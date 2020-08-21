var HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "ski mango hurdle bean mixture dinosaur goddess smoke trick scene surround adapt";

module.exports = {
  networks: {

    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: '*',
      gas: 4712388,
      gasPrice: 100000000000,
    },
  
  },
compilers: {
    solc: {
        version: "^0.5.8"
    }
}
};
