const request = require("async-request");
const axios = require('axios');
// const pancakeswap_apis = require('./pancakeswap_apis');

module.exports.getPrices = async () => {

  // --------------- polygan -----------
  // const response = await request('https://api.coingecko.com/api/v3/simple/price?ids=sand,dogira,banana,aave,link,near,dai,weth,wmatic,polydoge,miMATIC&vs_currencies=usd');

  // --------------- BSC -----------
  const response = await request('https://api.coingecko.com/api/v3/simple/price?ids=wbnb,busd,cake,face&vs_currencies=usd');


  const prices = {};


  try {
    const json = JSON.parse(response.body);

    // --------------- polygan -----------
    // prices['0x8f3cf7ad23cd3cadbd9735aff958023239c6a063'.toLowerCase()] = json.dai?.usd;
    // prices['0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'.toLowerCase()] = json.weth?.usd;
    // prices['0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'.toLowerCase()] = json.wmatic?.usd;
    // prices['0x8a953cfe442c5e8855cc6c61b1293fa648bae472'.toLowerCase()] = json.polydoge?.usd;
    // prices['0xa3Fa99A148fA48D14Ed51d610c367C61876997F1'.toLowerCase()] = json.mimatic?.usd;
    // prices['0x72bd80445b0db58ebe3E8dB056529D4C5FAF6F2f'.toLowerCase()] = json.near?.usd;
    // prices['0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39'.toLowerCase()] = json.link?.usd;
    // prices['0xD6DF932A45C0f255f85145f286eA0b292B21C90B'.toLowerCase()] = json.aave?.usd;
    // prices['0x5d47baba0d66083c52009271faf3f50dcc01023c'.toLowerCase()] = json.banana?.usd;
    // prices['0xdda40cdfe4a0090f42ff49f264a831402adb801a'.toLowerCase()] = json.dogira?.usd;
    // prices['0xbbba073c31bf03b8acf7c28ef0738decf3695683'.toLowerCase()] = json.sand?.usd;
    // prices['0xbbba073c31bf03b8acf7c28ef0738decf3695683'.toLowerCase()] = null;
    // prices['??'.toLowerCase()] = json['usd-coin'].usd;


    // --------------- BSC -----------
    prices['0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'.toLowerCase()] = json.wbnb?.usd;
    prices['0xe9e7cea3dedca5984780bafc599bd69add087d56'.toLowerCase()] = json.busd?.usd;
    prices['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'.toLowerCase()] = json.cake?.usd;
    prices['0x623b64d0e2483b77cdd36308066b3d747603c498'.toLowerCase()] = json.face?.usd;
    // prices['0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377'.toLowerCase()] = 2.52; // MBOX
    // prices['0x0566b9a8ffb8908682796751eed00722da967be0'.toLowerCase()] = 7.87; // FGD

    // const tokensList = await pancakeswap_apis.getAllTokens();

    // tokensList.data.all.forEach(token => {
      // prices[token.id.toLowerCase()] = parseFloat(token.derivedUSD);
    // });

    // console.log("********** prices : ");
    // console.log(prices);

  } catch (e) {
    console.error(e)
    return {};
  }

  return prices;
}

