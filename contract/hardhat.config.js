require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

module.exports = {
  defaultNetwork: "hedera",
  solidity: "0.8.18",
  networks: {
    hedera: {
      // If you're using local testnet, replace `url` with local json-rpc address 
      url: "https://testnet.hashio.io/api",
      accounts: [`0x` + `${process.env.PRIVATE_KEY}`],
    },
  },
};