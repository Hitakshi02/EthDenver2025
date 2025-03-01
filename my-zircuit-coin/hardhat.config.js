require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { ZIRCUIT_PRIVATE_KEY, ZIRCUIT_RPC_URL } = process.env;

module.exports = {
  solidity: "0.8.19",
  networks: {
    zircuit: {
      url: ZIRCUIT_RPC_URL,
      accounts: [ZIRCUIT_PRIVATE_KEY],
    },
  },
};
