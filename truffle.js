'use strict'

// const HDWalletProvider = require('truffle-hdwallet-provider')
// const mnemonic = 'put your metamask seed words here'
// const infuraApiKey = 'your infura api key here'

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    remote: {
      host: 'linxz.top',
      port: 8545,
      network_id: '*' // Match any network id
    },
    docker: {
      host: 'ganache',
      port: 8545,
      network_id: '*' // Match any network id
    }
  }
}
