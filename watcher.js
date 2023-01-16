require('dotenv').config();
const Web3 = require('web3');
const BigNumber = require('bignumber.js');
const { performance } = require('perf_hooks');

const FlashswapApi = require('./abis/index').flashswapv2;
const BlockSubscriber = require('./src/block_subscriber');
const Prices = require('./src/prices');
const prices_uniswap_main = require('./src/prices-uniswap/prices-uniswap-main');
// const pancakeswap_apis = require('./src/pancakeswap_apis');

let FLASHSWAP_CONTRACT = process.env.CONTRACT;

const TransactionSender = require('./src/transaction_send');

const WMATIC = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
const pairsC = require('./src/pairs');


const fs = require('fs');
const util = require('util');
var log_file = fs.createWriteStream(__dirname + '/log_arbitrage.txt', { flags: 'w' });
var log_stdout = process.stdout;
console.log = function (d) {
    log_file.write(util.format(d) + '\n');
    log_stdout.write(util.format(d) + '\n');
};

const web3 = new Web3(
    // process.env.RPC_BLOCKS
    new Web3.providers.WebsocketProvider(process.env.WSS_BLOCKS, {
        reconnect: {
            auto: true,
            delay: 5000, // ms
            maxAttempts: 15,
            onTimeout: false
        }
    })
);

const { address: admin } = web3.eth.accounts.wallet.add(process.env.PRIVATE_KEY);

const prices = {};
const flashswap = new web3.eth.Contract(FlashswapApi, FLASHSWAP_CONTRACT);


let trxCount = 0;

const init = async () => {
    const pairs = [];
    // const pairs = await pairsC.getPairs();
    // console.log('starting: ', JSON.stringify(pairs.map(p => p.name)));

    const transactionSender = TransactionSender.factory(process.env.WSS_BLOCKS.split(','));

    let nonce = await web3.eth.getTransactionCount(admin);
    let gasPrice = await web3.eth.getGasPrice();
    console.log(`started: wallet ${admin} - gasPrice ${gasPrice}`);

    setInterval(async () => {
        nonce = await web3.eth.getTransactionCount(admin);
    }, 1000 * 19);

    // setInterval(async () => {
    //     gasPrice = await web3.eth.getGasPrice()
    // }, 1000 * 60 * 3);

    const owner = await flashswap.methods.owner().call();

    console.log(`started: wallet ${admin} - gasPrice ${gasPrice} - contract owner: ${owner}`);

    let handler = async () => {
        const myPrices = await Prices.getPrices();
        if (Object.keys(myPrices).length > 0) {
            for (const [key, value] of Object.entries(myPrices)) {
                prices[key.toLowerCase()] = value;
            }
        }
    };

    // await handler();
    // setInterval(handler, 1000 * 60 * 5);

    await prices_uniswap_main.main(web3);


    // const onBlock = async (block, web3, provider) => {
    //     const start = performance.now();
    //
    //     const calls = [];
    //
    //     const flashswap = new web3.eth.Contract(FlashswapApi, FLASHSWAP_CONTRACT);
    //
    //     pairs.forEach((pair) => {
    //         calls.push(async () => {
    //             const check = await flashswap.methods.check(pair.tokenBorrow, new BigNumber(pair.amountTokenPay * 1e18), pair.tokenPay, pair.sourceRouter, pair.targetRouter).call();
    //
    //             const profit = check[0];
    //
    //             let s = pair.tokenPay.toLowerCase();
    //             const price = prices[s];
    //             if (!price) {
    //                 console.log('invalid price', pair.tokenPay);
    //                 return;
    //             }
    //
    //             const profitUsd = profit / 1e18 * price;
    //             const percentage = (100 * (profit / 1e18)) / pair.amountTokenPay;
    //             console.log(`[${block.number}] [${new Date().toLocaleString()}]: [${provider}] [${pair.name}] Arbitrage checked! Expected profit: ${(profit / 1e18).toFixed(3)} $${profitUsd.toFixed(2)} - ${percentage.toFixed(2)}%`);
    //
    //             if (profit > 0) {
    //                 console.log(`[${block.number}] [${new Date().toLocaleString()}]: [${provider}] [${pair.name}] Arbitrage opportunity found! Expected profit: ${(profit / 1e18).toFixed(3)} $${profitUsd.toFixed(2)} - ${percentage.toFixed(2)}%`);
    //
    //                 const tx = flashswap.methods.start(
    //                     block.number + 5,
    //                     pair.tokenBorrow,
    //                     new BigNumber(pair.amountTokenPay * 1e18),
    //                     pair.tokenPay,
    //                     pair.sourceRouter,
    //                     pair.targetRouter,
    //                     pair.sourceFactory,
    //                 );
    //
    //                 let estimateGas
    //                 try {
    //                     estimateGas = await tx.estimateGas({ from: admin });
    //                 } catch (e) {
    //                     console.log(`[${block.number}] [${new Date().toLocaleString()}]: [${pair.name}]`, 'gasCost error', e.message);
    //                     return;
    //                 }
    //                 // console.log(`estimateGas:${estimateGas}`);
    //
    //                 const myGasPrice = new BigNumber(gasPrice).plus(gasPrice * 0.2212).toFixed(0).toString();
    //                 // console.log(`myGasPrice:${myGasPrice}`);
    //                 const txCostBNB = Web3.utils.toBN(estimateGas) * Web3.utils.toBN(myGasPrice);
    //                 // console.log(`txCostBNB:${txCostBNB}`);
    //
    //                 let gasCostUsd = (txCostBNB / 1e18) * prices[WMATIC.toLowerCase()];
    //                 const profitMinusFeeInUsd = profitUsd - gasCostUsd;
    //
    //                 console.log(`block.number:${block.number} - estimateGas:${estimateGas} - myGasPrice:${myGasPrice} - txCostBNB:${txCostBNB} - gasCostUsd:${gasCostUsd} - profitMinusFeeInUsd:${profitMinusFeeInUsd} - `);
    //
    //
    //                 if (profitMinusFeeInUsd < 0.1) {
    //                     console.log(`[${block.number}] [${new Date().toLocaleString()}] [${provider}]: [${pair.name}] stopped: `, JSON.stringify({
    //                         profit: "$" + profitMinusFeeInUsd.toFixed(2),
    //                         profitWithoutGasCost: "$" + profitUsd.toFixed(2),
    //                         gasCost: "$" + gasCostUsd.toFixed(2),
    //                         duration: `${(performance.now() - start).toFixed(2)} ms`,
    //                         provider: provider,
    //                         myGasPrice: myGasPrice.toString(),
    //                         txCostBNB: txCostBNB / 1e18,
    //                         estimateGas: estimateGas,
    //                     }));
    //                 }
    //
    //                 if (profitMinusFeeInUsd > 0.1) {
    //                     console.log(`[${block.number}] [${new Date().toLocaleString()}] [${provider}]: [${pair.name}] and go: `, JSON.stringify({
    //                         profit: "$" + profitMinusFeeInUsd.toFixed(2),
    //                         profitWithoutGasCost: "$" + profitUsd.toFixed(2),
    //                         gasCost: "$" + gasCostUsd.toFixed(2),
    //                         duration: `${(performance.now() - start).toFixed(2)} ms`,
    //                         provider: provider,
    //                     }));
    //
    //                     const data = tx.encodeABI();
    //                     const txData = {
    //                         from: admin,
    //                         to: flashswap.options.address,
    //                         data: data,
    //                         gas: estimateGas,
    //                         gasPrice: new BigNumber(myGasPrice),
    //                         nonce: nonce
    //                     };
    //
    //                     let number = performance.now() - start;
    //                     if (number > 1500) {
    //                         console.error('out of time window: ', number);
    //                         return;
    //                     }
    //
    //                     console.log(`[${block.number}] [${new Date().toLocaleString()}] [${provider}]: sending transactions...`, JSON.stringify(txData))
    //
    //                     try {
    //                         console.log("sendTransaction befor");
    //                         trxCount++;
    //                         await transactionSender.sendTransaction(txData);
    //                         console.log("sendTransaction after");
    //                     } catch (e) {
    //                         console.error('transaction error', e);
    //                     }
    //                 }
    //             }
    //         })
    //     })
    //
    //     // try {
    //     await Promise.all(calls.map(fn => fn()));
    //     // } catch (e) {
    //     //     console.log('error', e)
    //     // }
    //
    //     let number = performance.now() - start;
    //     if (number > 1500) {
    //         console.error('warning to slow', number);
    //     }
    //
    //     if (block.number % 40 === 0) {
    //         console.log(`[${block.number}] [${new Date().toLocaleString()}]: alive (${provider}) - took ${number.toFixed(2)} ms`);
    //     }
    // };

    // BlockSubscriber.subscribe(process.env.WSS_BLOCKS.split(','), onBlock);
}

init();
