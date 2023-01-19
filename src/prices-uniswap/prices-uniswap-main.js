const Scalar = require("ffjavascript").Scalar;

const uniswapLib = require("./uniswap-lib");
const {flashswapv2: FlashswapApi} = require("../../abis");
const {abi: abiUniswapPair} = require("./config-uniswap/abi-uniswap-pair.json");

// pools uniswap: https://v2.info.uniswap.org/pairs

module.exports.main = async (provider) => {

    // load abi uniswap pair & pair addresses & erc20 abi
    const pairsInfo = require("./config-uniswap/config-uniswap-pairs.json");
    const abiUniswapPair = require("./config-uniswap/abi-uniswap-pair.json").abi;
    const abiERC20 = require("./config-uniswap/abi-erc20.json").abi;


    for (let i = 0; i < pairsInfo.length; i++){

        if(!pairsInfo[i].active)
            continue;

        const pairInfo = pairsInfo[i];

        // load contract pair uniswap
        // const uniswapPair = new ethers.Contract(pairInfo.pairAddress, abiUniswapPair, provider);
        const uniswapPair = new provider.eth.Contract( abiUniswapPair , pairInfo.pairAddress);

        // get pair tokens and its info associated
        const addressToken0 = await uniswapPair.methods.token0().call();
        const addressToken1 = await uniswapPair.methods.token1().call();

        const reservesInfo = await uniswapPair.methods.getReserves().call();
        const reserve0 = Scalar.e(reservesInfo.reserve0);
        const reserve1 = Scalar.e(reservesInfo.reserve1);

        // get info tokens
        const token0 = new provider.eth.Contract( abiERC20, addressToken0);
        const token1 = new provider.eth.Contract( abiERC20, addressToken1);

        const token0Decimals = await token0.methods.decimals().call();
        const token1Decimals = await token1.methods.decimals().call();

        const token0Symbol = await token0.methods.symbol().call();
        const token1Symbol = await token1.methods.symbol().call();

        // sort tokens & compute price
        if (pairInfo.mainReserveSymbol !== token0Symbol && pairInfo.mainReserveSymbol !== token1Symbol)
            throw Error(`${pairInfo.mainReserveSymbol} has not been found in uniswap pair ${pairInfo.pairAddress}`);

        let tokenADecimals;
        let tokenBDecimals;

        let tokenAReserve;
        let tokenBReserve;

        let tokenASymbol;
        let tokenBSymbol;

        if (pairInfo.mainReserveSymbol === token1Symbol){
            tokenADecimals = token0Decimals;
            tokenBDecimals = token1Decimals;
            tokenAReserve = reserve0;
            tokenBReserve = reserve1;
            tokenASymbol = token0Symbol;
            tokenBSymbol = token1Symbol;
        } else {
            tokenADecimals = token1Decimals;
            tokenBDecimals = token0Decimals;
            tokenAReserve = reserve1;
            tokenBReserve = reserve0;
            tokenASymbol = token1Symbol;
            tokenBSymbol = token0Symbol;
        }
        console.log("--------------------------------------------------------------");
        console.log(`tokenASymbol: ${tokenASymbol} -> tokenAReserve ${tokenAReserve}`);
        console.log(`tokenBSymbol: ${tokenBSymbol} -> tokenBReserve ${tokenBReserve}`);

        const amountIn = Scalar.pow(10, tokenADecimals);
        const amountOut = uniswapLib.getAmountOut(amountIn, tokenAReserve, tokenBReserve);
        console.log(`tokenASymbol: ${tokenASymbol} -> amountIn ${amountIn}`);
        console.log(`tokenBSymbol: ${tokenBSymbol} -> amountOut ${amountOut}`);

        // compute price
        const finalAmountIn = Number(amountIn) / 10**tokenADecimals;
        const finalAmountOut = Number(amountOut) / 10**tokenBDecimals;

        console.log(`tokenASymbol: ${tokenASymbol} -> finalAmountIn ${finalAmountIn}`);
        console.log(`tokenBSymbol: ${tokenBSymbol} -> finalAmountOut ${finalAmountOut}`);

        const price = finalAmountIn / finalAmountOut;
        console.log(`price ${tokenBSymbol}: ${price.toFixed(2)} ${tokenASymbol}`);
        console.log("--------------------------------------------------------------");
    }
}
