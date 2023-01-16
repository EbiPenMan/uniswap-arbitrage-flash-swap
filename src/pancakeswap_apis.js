const axios = require('axios');


// https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2/graphql?query=%7B%0A%20%20swaps%3A%20%0A%20%20%09swaps(first%3A%2033%2C%20orderBy%3A%20timestamp%2C%20orderDirection%3A%20desc)%0A%20%20%09%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20timestamp%0A%20%20%20%20%20%20pair%20%7B%0A%20%20%20%20%20%20%20%20token0%20%7Bid%20symbol%20derivedUSD%7D%0A%20%20%20%20%20%20%20%20token1%20%7Bid%20symbol%20derivedUSD%7D%0A%20%20%20%20%20%20%7D%20%20%20%20%20%20%0A%20%20%20%20%20%20from%20%20%20%20%20%20%0A%20%20%20%20%20%20%09amount0In%20amount1In%20amount0Out%20amount1Out%20amountUSD%0A%20%20%20%20%7D%20%20%0A%7D
// wss://bsc.streamingfast.io:8000/subgraphs/name/pancakeswap/exchange-v2

// {
//     amount0In: "0"
//     amount0Out: "1875182.97605678"
//     amount1In: "0.968999999999999024"
//     amount1Out: "0"
//     amountUSD: "399.724551489953116790275182948"
//     from: "0x14dccf28071fb83957d9900c8a2124521c9b68b8"
//     id: "0xdd22cd469d298f9b29f24b76bfb1423bae1ccef5076a1f619d46d4825aad99b9-0"
//     pair: {token0: {id: "0x1a8b6e637aab57c8544dc90bd813c62faa68aa1c", symbol: "HTF"},…}
//     timestamp: "1650304359"
// }
module.exports.getOverviewTransactions = async function () {
    const baseUrl = "https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2";

    try {
        const result = await axios.post(
            baseUrl,
            {
                "query": "\n  query overviewTransactions {\n    mints: mints(first: 33, orderBy: timestamp, orderDirection: desc) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      to\n      amount0\n      amount1\n      amountUSD\n    }\n    swaps: swaps(first: 33, orderBy: timestamp, orderDirection: desc) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      from\n      amount0In\n      amount1In\n      amount0Out\n      amount1Out\n      amountUSD\n    }\n    burns: burns(first: 33, orderBy: timestamp, orderDirection: desc) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      sender\n      amount0\n      amount1\n      amountUSD\n    }\n  }\n",
                "operationName": "overviewTransactions"
            }
        );

        // console.log(JSON.stringify(result.data));
        return result.data;

    } catch (error) {
        console.log(error);

    }
}

//without price
// tokens:{
//     address: "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47"
//     chainId: 56
//     decimals: 18
//     logoURI: "https://tokens.pancakeswap.finance/images/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47.png"
//     name: "Cardano Token"
//     symbol: "ADA"
// }
module.exports.getCoinMarketCapTokens = async function () { //without price
    const baseUrl = "https://tokens.pancakeswap.finance/cmc.json"
    try {
        const result = await axios.get(baseUrl);
        // console.log(JSON.stringify(result.data)); // is too much
        return result.data;

    } catch (error) {
        console.log(error);
    }
}

//without price
// tokens:{
//     address: "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47"
//     chainId: 56
//     decimals: 18
//     logoURI: "https://tokens.pancakeswap.finance/images/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47.png"
//     name: "Cardano Token"
//     symbol: "ADA"
// }
module.exports.getCoinGeckoTokens = async function () { //without price
    const baseUrl = "https://tokens.pancakeswap.finance/coingecko.json"
    try {
        const result = await axios.get(baseUrl);
        // console.log(JSON.stringify(result.data)); // is too much
        return result.data;

    } catch (error) {
        console.log(error);
    }
}

//without price
// tokens:{
//     address: "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47"
//     chainId: 56
//     decimals: 18
//     logoURI: "https://tokens.pancakeswap.finance/images/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47.png"
//     name: "Cardano Token"
//     symbol: "ADA"
// }
module.exports.getPancakeSwapTop100Tokens = async function () {
    const baseUrl = "https://tokens.pancakeswap.finance/pancakeswap-top-100.json"
    try {
        const result = await axios.get(baseUrl);
        // console.log(JSON.stringify(result.data)); // is too much
        return result.data;

    } catch (error) {
        console.log(error);
    }
}

//without price
// tokens:{
//     address: "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47"
//     chainId: 56
//     decimals: 18
//     logoURI: "https://tokens.pancakeswap.finance/images/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47.png"
//     name: "Cardano Token"
//     symbol: "ADA"
// }
module.exports.getPancakeSwapExtendedTokens = async function () {
    const baseUrl = "https://tokens.pancakeswap.finance/pancakeswap-extended.json"
    try {
        const result = await axios.get(baseUrl);
        // console.log(JSON.stringify(result.data)); // is too much
        return result.data;

    } catch (error) {
        console.log(error);
    }
}


//without price
// {id: "0x8f538d9889e5cd384ba610a36eb222420ef1d15b-19100"}
module.exports.getTokenDayDatasTopTokens = async function () {
    const baseUrl = "https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2"
    try {
        const result = await axios.post(
            baseUrl,
            {
                "query": "\n      query topTokens($blacklist: [String!], $timestamp24hAgo: Int) {\n        tokenDayDatas(\n          first: 30\n          where: { dailyTxns_gt: 300, id_not_in: $blacklist, date_gt: $timestamp24hAgo }\n          orderBy: dailyVolumeUSD\n          orderDirection: desc\n        ) {\n          id\n        }\n      }\n    ",
                "variables": {
                    "blacklist": [
                        "0x495c7f3a713870f68f8b418b355c085dfdc412c3",
                        "0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea",
                        "0xe31debd7abff90b06bca21010dd860d8701fd901",
                        "0xfc989fbb6b3024de5ca0144dc23c18a063942ac1",
                        "0xe40fc6ff5f2895b44268fd2e1a421e07f567e007",
                        "0xfd158609228b43aa380140b46fff3cdf9ad315de",
                        "0xc00af6212fcf0e6fd3143e692ccd4191dc308bea",
                        "0x205969b3ad459f7eba0dee07231a6357183d3fb6",
                        "0x0bd67d358636fd7b0597724aa4f20beedbf3073a",
                        "0xedf5d2a561e8a3cb5a846fbce24d2ccd88f50075",
                        "0x702b0789a3d4dade1688a0c8b7d944e5ba80fc30",
                        "0x041929a760d7049edaef0db246fa76ec975e90cc",
                        "0xba098df8c6409669f5e6ec971ac02cd5982ac108",
                        "0x1bbed115afe9e8d6e9255f18ef10d43ce6608d94",
                        "0xe99512305bf42745fae78003428dcaf662afb35d",
                        "0xbE609EAcbFca10F6E5504D39E3B113F808389056",
                        "0x847daf9dfdc22d5c61c4a857ec8733ef5950e82e",
                        "0xdbf8913dfe14536c0dae5dd06805afb2731f7e7b",
                        "0xF1D50dB2C40b63D2c598e2A808d1871a40b1E653",
                        "0x4269e4090ff9dfc99d8846eb0d42e67f01c3ac8b"
                    ],
                    "timestamp24hAgo": 1650217920
                },
                "operationName": "topTokens"
            }
        );
        // console.log(JSON.stringify(result.data)); // is too much
        return result.data;

    } catch (error) {
        console.log(error);
    }
}


//without price
// {id: "0x8f538d9889e5cd384ba610a36eb222420ef1d15b-19100"}
module.exports.getTokenDayDatasTopPools = async function () {
    const baseUrl = "https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2"
    try {
        const result = await axios.post(
            baseUrl,
            {
                "query": "\n      query topPools($blacklist: [String!], $timestamp24hAgo: Int) {\n        pairDayDatas(\n          first: 30\n          where: { dailyTxns_gt: 300, token0_not_in: $blacklist, token1_not_in: $blacklist, date_gt: $timestamp24hAgo }\n          orderBy: dailyVolumeUSD\n          orderDirection: desc\n        ) {\n          id\n        }\n      }\n    ",
                "variables": {
                    "blacklist": [
                        "0x495c7f3a713870f68f8b418b355c085dfdc412c3",
                        "0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea",
                        "0xe31debd7abff90b06bca21010dd860d8701fd901",
                        "0xfc989fbb6b3024de5ca0144dc23c18a063942ac1",
                        "0xe40fc6ff5f2895b44268fd2e1a421e07f567e007",
                        "0xfd158609228b43aa380140b46fff3cdf9ad315de",
                        "0xc00af6212fcf0e6fd3143e692ccd4191dc308bea",
                        "0x205969b3ad459f7eba0dee07231a6357183d3fb6",
                        "0x0bd67d358636fd7b0597724aa4f20beedbf3073a",
                        "0xedf5d2a561e8a3cb5a846fbce24d2ccd88f50075",
                        "0x702b0789a3d4dade1688a0c8b7d944e5ba80fc30",
                        "0x041929a760d7049edaef0db246fa76ec975e90cc",
                        "0xba098df8c6409669f5e6ec971ac02cd5982ac108",
                        "0x1bbed115afe9e8d6e9255f18ef10d43ce6608d94",
                        "0xe99512305bf42745fae78003428dcaf662afb35d",
                        "0xbE609EAcbFca10F6E5504D39E3B113F808389056",
                        "0x847daf9dfdc22d5c61c4a857ec8733ef5950e82e",
                        "0xdbf8913dfe14536c0dae5dd06805afb2731f7e7b",
                        "0xF1D50dB2C40b63D2c598e2A808d1871a40b1E653",
                        "0x4269e4090ff9dfc99d8846eb0d42e67f01c3ac8b"
                    ],
                    "timestamp24hAgo": 1650217920
                },
                "operationName": "topPools"
            }
        );
        // console.log(JSON.stringify(result.data)); // is too much
        return result.data;

    } catch (error) {
        console.log(error);
    }
}


//
// {
//     id: "0x58f876857a02d6762e0101bb5c46a8c1ed44dc16"
//     reserve0: "471682.913968537900407275"
//     reserve1: "194353809.678068559084920331"
//     reserveUSD: "389151763.458657749535278853353"
//     token0: {id: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", name: "Wrapped BNB", symbol: "WBNB"}
//     token0Price: "0.002426929087471157259719189868917"
//     token1: {id: "0xe9e7cea3dedca5984780bafc599bd69add087d56", name: "BUSD Token", symbol: "BUSD"}
//     token1Price: "412.0433535377800606753509927537"
//     volumeUSD: "53567117542.1191271667415824714"
// }
module.exports.getPools = async function () {
    const baseUrl = "https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2"
    try {
        const result = await axios.post(
            baseUrl,
            {
                "query": "\n      query pools {\n        now: pairs(\n    where: { id_in: [\"0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae\",\"0x58f876857a02d6762e0101bb5c46a8c1ed44dc16\",\"0x0ed7e52944161450477ee417de9cd3a859b14fd0\",\"0xed2ec734193626282e105a4a44bf39c1f6b44d78\",\"0x007ec643c7cc33a70c083fc305c283dd009c8b94\",\"0x7efaef62fddcca950418312c6c91aef321375a00\",\"0x58abe8f6fb0f45d28cfe0119b2a9df91bfe22dac\",\"0xe5e7dd79feaf6653a78fe038c72317dfd1a6d8ea\",\"0x804678fa97d91b974ec2af3c843270886528a9e6\",\"0x7e79b95271fb98f2385bf413e3d4917e87d5eb90\",\"0x7752e1fa9f3a2e860856458517008558deb989e3\",\"0x91db6365ad76e085f8366413fc57ada790f642f8\",\"0xb72723e36a83fb5fe1793f06b436f4720f5de4f9\",\"0x74e4716e431f45807dcf19f284c7aa99f18a4fbc\",\"0xc003f510fb2bdf3a82832b75863db27079c24dc1\",\"0x8fa59693458289914db0097f5f366d771b7a7c3f\",\"0xf45cd219aef8618a92baa7ad848364a158a24f33\",\"0xc23e7ca632a2db435704e2ed0978d253d4f578d1\",\"0x703f1c0b4399a51704e798002281bf26d6f9c2e6\",\"0x737046ef759691fbc778cd59fdec77b1534c39a5\",\"0x61eb789d75a95caa3ff50ed7e47b96c132fec082\",\"0x8e744ec2795c8b836689d1b4ebe1489204357dac\",\"0xa39af17ce4a8eb807e076805da1e2b8ea7d0755b\",\"0xd99c7f6c65857ac913a8f880a4cb84032ab2fc5b\",\"0xad1fedfb04377c4b849cef6ef9627bca41955fa0\",\"0x1ccdaf5e732b42fa1c65a79a15b8fbbefc2c99be\",\"0x44f382cec44c33067cb12fcfc08457eb6734be02\",\"0x2354ef4df11afacb85a5c7f98b624072eccddbb1\",\"0xf5377aeb4223fce3ed85bd786c54af8c37d9e3e8\",\"0x627f27705c8c283194ee9a85709f7bd9e38a1663\"] }\n    \n    orderBy: trackedReserveBNB\n    orderDirection: desc\n  ) {\n    id\n    reserve0\n    reserve1\n    reserveUSD\n    volumeUSD\n    token0Price\n    token1Price\n    token0 {\n      id\n      symbol\n      name\n    }\n    token1 {\n      id\n      symbol\n      name\n    }\n  }\n        oneDayAgo: pairs(\n    where: { id_in: [\"0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae\",\"0x58f876857a02d6762e0101bb5c46a8c1ed44dc16\",\"0x0ed7e52944161450477ee417de9cd3a859b14fd0\",\"0xed2ec734193626282e105a4a44bf39c1f6b44d78\",\"0x007ec643c7cc33a70c083fc305c283dd009c8b94\",\"0x7efaef62fddcca950418312c6c91aef321375a00\",\"0x58abe8f6fb0f45d28cfe0119b2a9df91bfe22dac\",\"0xe5e7dd79feaf6653a78fe038c72317dfd1a6d8ea\",\"0x804678fa97d91b974ec2af3c843270886528a9e6\",\"0x7e79b95271fb98f2385bf413e3d4917e87d5eb90\",\"0x7752e1fa9f3a2e860856458517008558deb989e3\",\"0x91db6365ad76e085f8366413fc57ada790f642f8\",\"0xb72723e36a83fb5fe1793f06b436f4720f5de4f9\",\"0x74e4716e431f45807dcf19f284c7aa99f18a4fbc\",\"0xc003f510fb2bdf3a82832b75863db27079c24dc1\",\"0x8fa59693458289914db0097f5f366d771b7a7c3f\",\"0xf45cd219aef8618a92baa7ad848364a158a24f33\",\"0xc23e7ca632a2db435704e2ed0978d253d4f578d1\",\"0x703f1c0b4399a51704e798002281bf26d6f9c2e6\",\"0x737046ef759691fbc778cd59fdec77b1534c39a5\",\"0x61eb789d75a95caa3ff50ed7e47b96c132fec082\",\"0x8e744ec2795c8b836689d1b4ebe1489204357dac\",\"0xa39af17ce4a8eb807e076805da1e2b8ea7d0755b\",\"0xd99c7f6c65857ac913a8f880a4cb84032ab2fc5b\",\"0xad1fedfb04377c4b849cef6ef9627bca41955fa0\",\"0x1ccdaf5e732b42fa1c65a79a15b8fbbefc2c99be\",\"0x44f382cec44c33067cb12fcfc08457eb6734be02\",\"0x2354ef4df11afacb85a5c7f98b624072eccddbb1\",\"0xf5377aeb4223fce3ed85bd786c54af8c37d9e3e8\",\"0x627f27705c8c283194ee9a85709f7bd9e38a1663\"] }\n    block: {number: 17031326}\n    orderBy: trackedReserveBNB\n    orderDirection: desc\n  ) {\n    id\n    reserve0\n    reserve1\n    reserveUSD\n    volumeUSD\n    token0Price\n    token1Price\n    token0 {\n      id\n      symbol\n      name\n    }\n    token1 {\n      id\n      symbol\n      name\n    }\n  }\n        twoDaysAgo: pairs(\n    where: { id_in: [\"0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae\",\"0x58f876857a02d6762e0101bb5c46a8c1ed44dc16\",\"0x0ed7e52944161450477ee417de9cd3a859b14fd0\",\"0xed2ec734193626282e105a4a44bf39c1f6b44d78\",\"0x007ec643c7cc33a70c083fc305c283dd009c8b94\",\"0x7efaef62fddcca950418312c6c91aef321375a00\",\"0x58abe8f6fb0f45d28cfe0119b2a9df91bfe22dac\",\"0xe5e7dd79feaf6653a78fe038c72317dfd1a6d8ea\",\"0x804678fa97d91b974ec2af3c843270886528a9e6\",\"0x7e79b95271fb98f2385bf413e3d4917e87d5eb90\",\"0x7752e1fa9f3a2e860856458517008558deb989e3\",\"0x91db6365ad76e085f8366413fc57ada790f642f8\",\"0xb72723e36a83fb5fe1793f06b436f4720f5de4f9\",\"0x74e4716e431f45807dcf19f284c7aa99f18a4fbc\",\"0xc003f510fb2bdf3a82832b75863db27079c24dc1\",\"0x8fa59693458289914db0097f5f366d771b7a7c3f\",\"0xf45cd219aef8618a92baa7ad848364a158a24f33\",\"0xc23e7ca632a2db435704e2ed0978d253d4f578d1\",\"0x703f1c0b4399a51704e798002281bf26d6f9c2e6\",\"0x737046ef759691fbc778cd59fdec77b1534c39a5\",\"0x61eb789d75a95caa3ff50ed7e47b96c132fec082\",\"0x8e744ec2795c8b836689d1b4ebe1489204357dac\",\"0xa39af17ce4a8eb807e076805da1e2b8ea7d0755b\",\"0xd99c7f6c65857ac913a8f880a4cb84032ab2fc5b\",\"0xad1fedfb04377c4b849cef6ef9627bca41955fa0\",\"0x1ccdaf5e732b42fa1c65a79a15b8fbbefc2c99be\",\"0x44f382cec44c33067cb12fcfc08457eb6734be02\",\"0x2354ef4df11afacb85a5c7f98b624072eccddbb1\",\"0xf5377aeb4223fce3ed85bd786c54af8c37d9e3e8\",\"0x627f27705c8c283194ee9a85709f7bd9e38a1663\"] }\n    block: {number: 17002678}\n    orderBy: trackedReserveBNB\n    orderDirection: desc\n  ) {\n    id\n    reserve0\n    reserve1\n    reserveUSD\n    volumeUSD\n    token0Price\n    token1Price\n    token0 {\n      id\n      symbol\n      name\n    }\n    token1 {\n      id\n      symbol\n      name\n    }\n  }\n        oneWeekAgo: pairs(\n    where: { id_in: [\"0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae\",\"0x58f876857a02d6762e0101bb5c46a8c1ed44dc16\",\"0x0ed7e52944161450477ee417de9cd3a859b14fd0\",\"0xed2ec734193626282e105a4a44bf39c1f6b44d78\",\"0x007ec643c7cc33a70c083fc305c283dd009c8b94\",\"0x7efaef62fddcca950418312c6c91aef321375a00\",\"0x58abe8f6fb0f45d28cfe0119b2a9df91bfe22dac\",\"0xe5e7dd79feaf6653a78fe038c72317dfd1a6d8ea\",\"0x804678fa97d91b974ec2af3c843270886528a9e6\",\"0x7e79b95271fb98f2385bf413e3d4917e87d5eb90\",\"0x7752e1fa9f3a2e860856458517008558deb989e3\",\"0x91db6365ad76e085f8366413fc57ada790f642f8\",\"0xb72723e36a83fb5fe1793f06b436f4720f5de4f9\",\"0x74e4716e431f45807dcf19f284c7aa99f18a4fbc\",\"0xc003f510fb2bdf3a82832b75863db27079c24dc1\",\"0x8fa59693458289914db0097f5f366d771b7a7c3f\",\"0xf45cd219aef8618a92baa7ad848364a158a24f33\",\"0xc23e7ca632a2db435704e2ed0978d253d4f578d1\",\"0x703f1c0b4399a51704e798002281bf26d6f9c2e6\",\"0x737046ef759691fbc778cd59fdec77b1534c39a5\",\"0x61eb789d75a95caa3ff50ed7e47b96c132fec082\",\"0x8e744ec2795c8b836689d1b4ebe1489204357dac\",\"0xa39af17ce4a8eb807e076805da1e2b8ea7d0755b\",\"0xd99c7f6c65857ac913a8f880a4cb84032ab2fc5b\",\"0xad1fedfb04377c4b849cef6ef9627bca41955fa0\",\"0x1ccdaf5e732b42fa1c65a79a15b8fbbefc2c99be\",\"0x44f382cec44c33067cb12fcfc08457eb6734be02\",\"0x2354ef4df11afacb85a5c7f98b624072eccddbb1\",\"0xf5377aeb4223fce3ed85bd786c54af8c37d9e3e8\",\"0x627f27705c8c283194ee9a85709f7bd9e38a1663\"] }\n    block: {number: 16859210}\n    orderBy: trackedReserveBNB\n    orderDirection: desc\n  ) {\n    id\n    reserve0\n    reserve1\n    reserveUSD\n    volumeUSD\n    token0Price\n    token1Price\n    token0 {\n      id\n      symbol\n      name\n    }\n    token1 {\n      id\n      symbol\n      name\n    }\n  }\n        twoWeeksAgo: pairs(\n    where: { id_in: [\"0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae\",\"0x58f876857a02d6762e0101bb5c46a8c1ed44dc16\",\"0x0ed7e52944161450477ee417de9cd3a859b14fd0\",\"0xed2ec734193626282e105a4a44bf39c1f6b44d78\",\"0x007ec643c7cc33a70c083fc305c283dd009c8b94\",\"0x7efaef62fddcca950418312c6c91aef321375a00\",\"0x58abe8f6fb0f45d28cfe0119b2a9df91bfe22dac\",\"0xe5e7dd79feaf6653a78fe038c72317dfd1a6d8ea\",\"0x804678fa97d91b974ec2af3c843270886528a9e6\",\"0x7e79b95271fb98f2385bf413e3d4917e87d5eb90\",\"0x7752e1fa9f3a2e860856458517008558deb989e3\",\"0x91db6365ad76e085f8366413fc57ada790f642f8\",\"0xb72723e36a83fb5fe1793f06b436f4720f5de4f9\",\"0x74e4716e431f45807dcf19f284c7aa99f18a4fbc\",\"0xc003f510fb2bdf3a82832b75863db27079c24dc1\",\"0x8fa59693458289914db0097f5f366d771b7a7c3f\",\"0xf45cd219aef8618a92baa7ad848364a158a24f33\",\"0xc23e7ca632a2db435704e2ed0978d253d4f578d1\",\"0x703f1c0b4399a51704e798002281bf26d6f9c2e6\",\"0x737046ef759691fbc778cd59fdec77b1534c39a5\",\"0x61eb789d75a95caa3ff50ed7e47b96c132fec082\",\"0x8e744ec2795c8b836689d1b4ebe1489204357dac\",\"0xa39af17ce4a8eb807e076805da1e2b8ea7d0755b\",\"0xd99c7f6c65857ac913a8f880a4cb84032ab2fc5b\",\"0xad1fedfb04377c4b849cef6ef9627bca41955fa0\",\"0x1ccdaf5e732b42fa1c65a79a15b8fbbefc2c99be\",\"0x44f382cec44c33067cb12fcfc08457eb6734be02\",\"0x2354ef4df11afacb85a5c7f98b624072eccddbb1\",\"0xf5377aeb4223fce3ed85bd786c54af8c37d9e3e8\",\"0x627f27705c8c283194ee9a85709f7bd9e38a1663\"] }\n    block: {number: 16658298}\n    orderBy: trackedReserveBNB\n    orderDirection: desc\n  ) {\n    id\n    reserve0\n    reserve1\n    reserveUSD\n    volumeUSD\n    token0Price\n    token1Price\n    token0 {\n      id\n      symbol\n      name\n    }\n    token1 {\n      id\n      symbol\n      name\n    }\n  }\n      }\n    ",
                "operationName": "pools"
            }
        );
        console.log(JSON.stringify(result.data)); // is too much
        return result.data;

    } catch (error) {
        console.log(error);
    }
}

//
// {
//     derivedBNB: "1"
//     derivedUSD: "412.5156824863105628185109263005"
//     id: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
//     name: "Wrapped BNB"
//     symbol: "WBNB"
//     totalLiquidity: "7821662.75796974948773694504953"
//     totalTransactions: "514651495"
//     tradeVolumeUSD: "270590243680.2978717979178178551"
// }
module.exports.getTokens = async function () {
    const baseUrl = "https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2"
    try {
        const result = await axios.post(
            baseUrl,
            {
                "query": "\n      query tokens {\n        now: tokens(\n      where: {id_in: [\"0x8f538d9889e5cd384ba610a36eb222420ef1d15b\",\"0x96a6b8f3c1c013f8b9f897b2a308def6b77f1d10\",\"0xd60b69e282d17cdb9003b348016c24404091c601\",\"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c\",\"0xe9e7cea3dedca5984780bafc599bd69add087d56\",\"0x55d398326f99059ff775485246999027b3197955\",\"0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82\",\"0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d\",\"0x0566b9a8ffb8908682796751eed00722da967be0\",\"0x2170ed0880ac9a755fd29b2688956bd959f933f8\",\"0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1\",\"0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c\",\"0x623b64d0e2483b77cdd36308066b3d747603c498\",\"0x873a5dfd10af54e54df6e2d646190ac6b5f62736\",\"0xee61e4fbd85e7944bf32ff6e040ae7a1c662f0de\",\"0x8f0528ce5ef7b51152a59745befdd91d97091d2f\",\"0x03436fe878e33be3c8caebd205ebc04a66aa3248\",\"0x8c851d1a123ff703bd1f9dabe631b69902df5f97\",\"0x1e4402fa427a7a835fc64ea6d051404ce767a569\",\"0x12bb890508c125661e03b09ec06e404bc9289040\",\"0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377\",\"0x4eaf5492838f34aaf6a5e1c603872da94baedc7d\",\"0xc9882def23bc42d53895b8361d0b1edc7570bc6a\",\"0x26193c7fa4354ae49ec53ea2cebc513dc39a10aa\",\"0x26619fa1d4c957c58096bbbeca6588dcfb12e109\",\"0xb626213cb1d52caa1ed71e2a0e62c0113ed8d642\",\"0x71cce0035d82c21cf4b908bcd8f1117fff0fa623\",\"0xba96731324de188ebc1ed87ca74544ddebc07d7f\",\"0x1bb132d6039b81faedc524a30e52586b6ca15f48\",\"0x3a0d9d7764fae860a659eb96a500f1323b411e68\"]}\n      \n      orderBy: tradeVolumeUSD\n      orderDirection: desc\n    ) {\n      id\n      symbol\n      name\n      derivedBNB\n      derivedUSD\n      tradeVolumeUSD\n      totalTransactions\n      totalLiquidity\n    }\n  \n        oneDayAgo: tokens(\n      where: {id_in: [\"0x8f538d9889e5cd384ba610a36eb222420ef1d15b\",\"0x96a6b8f3c1c013f8b9f897b2a308def6b77f1d10\",\"0xd60b69e282d17cdb9003b348016c24404091c601\",\"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c\",\"0xe9e7cea3dedca5984780bafc599bd69add087d56\",\"0x55d398326f99059ff775485246999027b3197955\",\"0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82\",\"0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d\",\"0x0566b9a8ffb8908682796751eed00722da967be0\",\"0x2170ed0880ac9a755fd29b2688956bd959f933f8\",\"0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1\",\"0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c\",\"0x623b64d0e2483b77cdd36308066b3d747603c498\",\"0x873a5dfd10af54e54df6e2d646190ac6b5f62736\",\"0xee61e4fbd85e7944bf32ff6e040ae7a1c662f0de\",\"0x8f0528ce5ef7b51152a59745befdd91d97091d2f\",\"0x03436fe878e33be3c8caebd205ebc04a66aa3248\",\"0x8c851d1a123ff703bd1f9dabe631b69902df5f97\",\"0x1e4402fa427a7a835fc64ea6d051404ce767a569\",\"0x12bb890508c125661e03b09ec06e404bc9289040\",\"0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377\",\"0x4eaf5492838f34aaf6a5e1c603872da94baedc7d\",\"0xc9882def23bc42d53895b8361d0b1edc7570bc6a\",\"0x26193c7fa4354ae49ec53ea2cebc513dc39a10aa\",\"0x26619fa1d4c957c58096bbbeca6588dcfb12e109\",\"0xb626213cb1d52caa1ed71e2a0e62c0113ed8d642\",\"0x71cce0035d82c21cf4b908bcd8f1117fff0fa623\",\"0xba96731324de188ebc1ed87ca74544ddebc07d7f\",\"0x1bb132d6039b81faedc524a30e52586b6ca15f48\",\"0x3a0d9d7764fae860a659eb96a500f1323b411e68\"]}\n      block: {number: 17031326}\n      orderBy: tradeVolumeUSD\n      orderDirection: desc\n    ) {\n      id\n      symbol\n      name\n      derivedBNB\n      derivedUSD\n      tradeVolumeUSD\n      totalTransactions\n      totalLiquidity\n    }\n  \n        twoDaysAgo: tokens(\n      where: {id_in: [\"0x8f538d9889e5cd384ba610a36eb222420ef1d15b\",\"0x96a6b8f3c1c013f8b9f897b2a308def6b77f1d10\",\"0xd60b69e282d17cdb9003b348016c24404091c601\",\"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c\",\"0xe9e7cea3dedca5984780bafc599bd69add087d56\",\"0x55d398326f99059ff775485246999027b3197955\",\"0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82\",\"0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d\",\"0x0566b9a8ffb8908682796751eed00722da967be0\",\"0x2170ed0880ac9a755fd29b2688956bd959f933f8\",\"0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1\",\"0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c\",\"0x623b64d0e2483b77cdd36308066b3d747603c498\",\"0x873a5dfd10af54e54df6e2d646190ac6b5f62736\",\"0xee61e4fbd85e7944bf32ff6e040ae7a1c662f0de\",\"0x8f0528ce5ef7b51152a59745befdd91d97091d2f\",\"0x03436fe878e33be3c8caebd205ebc04a66aa3248\",\"0x8c851d1a123ff703bd1f9dabe631b69902df5f97\",\"0x1e4402fa427a7a835fc64ea6d051404ce767a569\",\"0x12bb890508c125661e03b09ec06e404bc9289040\",\"0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377\",\"0x4eaf5492838f34aaf6a5e1c603872da94baedc7d\",\"0xc9882def23bc42d53895b8361d0b1edc7570bc6a\",\"0x26193c7fa4354ae49ec53ea2cebc513dc39a10aa\",\"0x26619fa1d4c957c58096bbbeca6588dcfb12e109\",\"0xb626213cb1d52caa1ed71e2a0e62c0113ed8d642\",\"0x71cce0035d82c21cf4b908bcd8f1117fff0fa623\",\"0xba96731324de188ebc1ed87ca74544ddebc07d7f\",\"0x1bb132d6039b81faedc524a30e52586b6ca15f48\",\"0x3a0d9d7764fae860a659eb96a500f1323b411e68\"]}\n      block: {number: 17002678}\n      orderBy: tradeVolumeUSD\n      orderDirection: desc\n    ) {\n      id\n      symbol\n      name\n      derivedBNB\n      derivedUSD\n      tradeVolumeUSD\n      totalTransactions\n      totalLiquidity\n    }\n  \n        oneWeekAgo: tokens(\n      where: {id_in: [\"0x8f538d9889e5cd384ba610a36eb222420ef1d15b\",\"0x96a6b8f3c1c013f8b9f897b2a308def6b77f1d10\",\"0xd60b69e282d17cdb9003b348016c24404091c601\",\"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c\",\"0xe9e7cea3dedca5984780bafc599bd69add087d56\",\"0x55d398326f99059ff775485246999027b3197955\",\"0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82\",\"0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d\",\"0x0566b9a8ffb8908682796751eed00722da967be0\",\"0x2170ed0880ac9a755fd29b2688956bd959f933f8\",\"0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1\",\"0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c\",\"0x623b64d0e2483b77cdd36308066b3d747603c498\",\"0x873a5dfd10af54e54df6e2d646190ac6b5f62736\",\"0xee61e4fbd85e7944bf32ff6e040ae7a1c662f0de\",\"0x8f0528ce5ef7b51152a59745befdd91d97091d2f\",\"0x03436fe878e33be3c8caebd205ebc04a66aa3248\",\"0x8c851d1a123ff703bd1f9dabe631b69902df5f97\",\"0x1e4402fa427a7a835fc64ea6d051404ce767a569\",\"0x12bb890508c125661e03b09ec06e404bc9289040\",\"0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377\",\"0x4eaf5492838f34aaf6a5e1c603872da94baedc7d\",\"0xc9882def23bc42d53895b8361d0b1edc7570bc6a\",\"0x26193c7fa4354ae49ec53ea2cebc513dc39a10aa\",\"0x26619fa1d4c957c58096bbbeca6588dcfb12e109\",\"0xb626213cb1d52caa1ed71e2a0e62c0113ed8d642\",\"0x71cce0035d82c21cf4b908bcd8f1117fff0fa623\",\"0xba96731324de188ebc1ed87ca74544ddebc07d7f\",\"0x1bb132d6039b81faedc524a30e52586b6ca15f48\",\"0x3a0d9d7764fae860a659eb96a500f1323b411e68\"]}\n      block: {number: 16859210}\n      orderBy: tradeVolumeUSD\n      orderDirection: desc\n    ) {\n      id\n      symbol\n      name\n      derivedBNB\n      derivedUSD\n      tradeVolumeUSD\n      totalTransactions\n      totalLiquidity\n    }\n  \n        twoWeeksAgo: tokens(\n      where: {id_in: [\"0x8f538d9889e5cd384ba610a36eb222420ef1d15b\",\"0x96a6b8f3c1c013f8b9f897b2a308def6b77f1d10\",\"0xd60b69e282d17cdb9003b348016c24404091c601\",\"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c\",\"0xe9e7cea3dedca5984780bafc599bd69add087d56\",\"0x55d398326f99059ff775485246999027b3197955\",\"0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82\",\"0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d\",\"0x0566b9a8ffb8908682796751eed00722da967be0\",\"0x2170ed0880ac9a755fd29b2688956bd959f933f8\",\"0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1\",\"0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c\",\"0x623b64d0e2483b77cdd36308066b3d747603c498\",\"0x873a5dfd10af54e54df6e2d646190ac6b5f62736\",\"0xee61e4fbd85e7944bf32ff6e040ae7a1c662f0de\",\"0x8f0528ce5ef7b51152a59745befdd91d97091d2f\",\"0x03436fe878e33be3c8caebd205ebc04a66aa3248\",\"0x8c851d1a123ff703bd1f9dabe631b69902df5f97\",\"0x1e4402fa427a7a835fc64ea6d051404ce767a569\",\"0x12bb890508c125661e03b09ec06e404bc9289040\",\"0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377\",\"0x4eaf5492838f34aaf6a5e1c603872da94baedc7d\",\"0xc9882def23bc42d53895b8361d0b1edc7570bc6a\",\"0x26193c7fa4354ae49ec53ea2cebc513dc39a10aa\",\"0x26619fa1d4c957c58096bbbeca6588dcfb12e109\",\"0xb626213cb1d52caa1ed71e2a0e62c0113ed8d642\",\"0x71cce0035d82c21cf4b908bcd8f1117fff0fa623\",\"0xba96731324de188ebc1ed87ca74544ddebc07d7f\",\"0x1bb132d6039b81faedc524a30e52586b6ca15f48\",\"0x3a0d9d7764fae860a659eb96a500f1323b411e68\"]}\n      block: {number: 16658298}\n      orderBy: tradeVolumeUSD\n      orderDirection: desc\n    ) {\n      id\n      symbol\n      name\n      derivedBNB\n      derivedUSD\n      tradeVolumeUSD\n      totalTransactions\n      totalLiquidity\n    }\n  \n      }\n    ",
                "operationName": "tokens"
            }
        );
        // console.log(JSON.stringify(result.data)); // is too much
        return result.data;

    } catch (error) {
        console.log(error);
    }
}


module.exports.getAllTokens = async function () {
    const baseUrl = "https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2"
    try {
        const result = await axios.post(
            baseUrl,
            {
                "query": "query tokens { all: tokens(      orderBy: tradeVolumeUSD      orderDirection: desc    ) {      id      symbol      name      derivedBNB      derivedUSD      tradeVolumeUSD      totalTransactions      totalLiquidity    }   }",
                "operationName": "tokens"
            }
        );
        // console.log(JSON.stringify(result.data)); // is too much
        return result.data;

    } catch (error) {
        console.log(error);
    }
}
