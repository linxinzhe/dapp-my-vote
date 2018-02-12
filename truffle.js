'use strict'

// const HDWalletProvider = require('truffle-hdwallet-provider')
// const mnemonic = 'put your metamask seed words here'
// const infuraApiKey = 'your infura api key here'

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      network_id: '*' // Match any network id
    }
  }
}
