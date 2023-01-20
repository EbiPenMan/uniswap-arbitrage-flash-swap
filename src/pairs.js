
// #WSS_BLOCKS=wss://polygon-mainnet.g.alchemy.com/v2/jILmCWR38eIZ34TczkNGnq7Iotho4epB
// WSS_BLOCKS=wss://bsc.getblock.io/mainnet/?api_key=9e4c3936-72d9-431e-992d-6f34c02ac4ea

// # contract address; deploy your own version
// #polygan
// #CONTRACT=0xb8ffB5D204250b20cdFcDB2890450AFa23686709

// #bsc
// CONTRACT=0xc06300f67f42361bb8056def2a558ef5496a33bd //old
// CONTRACT=0x2795127297f26fa72a50B460D42AA389e4a599f3 //new

//69f3719c-2ded-4715-8238-42586f79fa3b // coin market cap api key


// const pancakeswap_apis = require('./pancakeswap_apis');



module.exports.getPairs = async () => {

    let dex_Polygan = [
        {
            dexName: "quickswap",
            router: "0xa5e0829caced8ffdd4de3c43696c57f7d7a678ff",
            factory: "0x5757371414417b8c6caad45baef941abc7d3ab32"
        },
        {
            dexName: "sushiswap",
            router: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506",
            factory: "0xc35dadb65012ec5796536bd9864ed8773abc74c4"
        },

        {
            dexName: "apeswap",
            router: "0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607",
            factory: "0xCf083Be4164828f00cAE704EC15a36D711491284"
        },


        {
            dexName: "dfyn",
            router: "0xA102072A4C07F06EC3B4900FDC4C7B80b6c57429",
            factory: "0xE7Fb3e833eFE5F9c441105EB65Ef8b261266423B"
        },
    ];

    let mainToken_Polygan = [
        // { tokenName: "WMATIC", address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270' },
        { tokenName: "WETH", address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619' },
        { tokenName: "DAI", address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063' },
        // { tokenName: "USD", address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174' }
    ];

    let slaveToken_Polygan = [
        { tokenName: "PolyDoge", address: '0x8a953cfe442c5e8855cc6c61b1293fa648bae472' },
        // { tokenName: "miMATIC", address: '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1' },
        // { tokenName: "NEAR", address: '0x72bd80445b0db58ebe3E8dB056529D4C5FAF6F2f' },
        // { tokenName: "LINK", address: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39' },
        // { tokenName: "AAVE", address: '0xD6DF932A45C0f255f85145f286eA0b292B21C90B' },
        // { tokenName: "BANANA", address: '0x5d47baba0d66083c52009271faf3f50dcc01023c' },
        // { tokenName: "DOGIRA", address: '0xdda40cdfe4a0090f42ff49f264a831402adb801a' },
        // { tokenName: "SAND", address: '0xbbba073c31bf03b8acf7c28ef0738decf3695683' },
        // { tokenName: "KEK", address: '0x42E5E06EF5b90Fe15F853F59299Fc96259209c5C' },
        // { tokenName: "GHST", address: '0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7' },
        // { tokenName: "DLYCOP", address: '0x1659fFb2d40DfB1671Ac226A0D9Dcc95A774521A' },
        // { tokenName: "AMT", address: '0xedBe70ef62b74730215728eD6B3F1f8705E3c58B' }
    ];


    let dex_Bsc = [
        {
            dexName: "pancakeswap",
            router: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
            factory: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73"
        },
        {
            dexName: "biswap",
            router: "0x3a6d8ca21d1cf76f653a67577fa0d27453350dd8",
            factory: "0x858E3312ed3A876947EA49d572A7C42DE08af7EE"
        },

        {
            dexName: "apeswap",
            router: "0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7",
            factory: "0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6"
        }



    ];

    let mainToken_Bsc = [
        // { tokenName: "USDT", address: '0x55d398326f99059fF775485246999027B3197955' },
        // { tokenName: "WBNB", address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c' },
        { tokenName: "BUSD", address: '0xe9e7cea3dedca5984780bafc599bd69add087d56' },
    ];

    let slaveToken_Bsc = [
        // { tokenName: "BUSD", address: '0xe9e7cea3dedca5984780bafc599bd69add087d56' },
        { tokenName: "WBNB", address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c' },

        // { tokenName: "Cake", address: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82' },
        // { tokenName: "FGD", address: '0x0566b9a8ffb8908682796751eed00722da967be0' },
        // { tokenName: "FACE", address: '0x623b64d0e2483b77cdd36308066b3d747603c498' },
        // { tokenName: "OPT", address: '0xee61e4fbd85e7944bf32ff6e040ae7a1c662f0de' },
        // { tokenName: "MBOX", address: '0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377' },
        // { tokenName: "GMT", address: '0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1' },
    ];

    const pairs = []

    const dex = dex_Bsc;
    const mainToken = mainToken_Bsc;
    const slaveToken = slaveToken_Bsc;

    for (let i = 0; i < dex.length; i++) {
        for (let j = 0; j < dex.length; j++) {
            if (j !== i) {
                for (let i_mainToken = 0; i_mainToken < mainToken.length; i_mainToken++) {
                    for (let i_slaveToken = 0; i_slaveToken < slaveToken.length; i_slaveToken++) {

                        let pair =
                        {
                            name: `${mainToken[i_mainToken].tokenName}/${slaveToken[i_slaveToken].tokenName} ${dex[i].dexName}>${dex[j].dexName}`,
                            tokenBorrow: mainToken[i_mainToken].address,
                            amountTokenPay: 1,
                            tokenPay: slaveToken[i_slaveToken].address,
                            sourceRouter: dex[i].router,
                            targetRouter: dex[j].router,
                            sourceFactory: dex[i].factory,
                        };
                        pairs.push(pair);

                    }
                }
            }
        }
    }

    // const pairsPre = await getPairPre(dex_Bsc);


    return pairs;
}

const getPairPre = async function (dex) {
    const pairs = [];

    const tran = await pancakeswap_apis.getOverviewTransactions();

    for (let i = 0; i < dex.length; i++) {
        for (let j = 0; j < dex.length; j++) {
            if (j !== i) {
                for (let k = 0; k < tran.data.swaps.length; k++) {

                    let swap = tran.data.swaps[k];

                    let bIndex = swap.amount0In != "0" ? "0" : "1";
                    let gIndex = swap.amount0In != "0" ? "1" : "0";

                    let pair =
                    {
                        name: `${swap.pair["token" + bIndex].symbol}/${swap.pair["token" + gIndex].symbol} ${dex[i].dexName}>${dex[j].dexName}`,
                        tokenBorrow: swap.pair["token" + bIndex].id,
                        amountTokenPay: parseFloat(swap["amount" + bIndex + "In"]),
                        tokenPay: swap.pair["token" + gIndex].id,
                        sourceRouter: dex[i].router,
                        targetRouter: dex[j].router,
                        sourceFactory: dex[i].factory,
                    };
                    pairs.push(pair);

                }
            }
        }
    }
    // console.log("********** api : ");
    // console.log(pairs);
    return pairs;
}
