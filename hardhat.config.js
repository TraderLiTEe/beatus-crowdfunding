const { polygon } = require('wagmi/chains');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.15",
  defaultNetwork: "polygon",
  networks: {
    hardhat: {},
    polygon: {
      //ankr's free public rpc
      url: "https://rpc.ankr.com/polygon",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      polygon: process.env.POLYGONSCAN_API_KEY || "",
    },
  },
};
