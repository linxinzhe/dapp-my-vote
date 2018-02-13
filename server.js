'use strict'

const http = require('http')
const path = require('path')
const express = require('express')
var bodyParser = require('body-parser')

const Web3 = require('web3')
const truffle = require('./truffle')
const network = process.env.TRUFFLE_NETWORK || 'development'
const provider = 'http://' + truffle.networks[network].host + ':' + truffle.networks[network].port
console.log('web3 provider = ' + provider)
const web3 = new Web3(new Web3.providers.HttpProvider(provider))

const port = process.env.PORT || 8888
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/ether', (req, res) => {
  let to = req.body.address

  let tx = web3.eth.sendTransaction({
    from: '0xbdb8d8060c2a339863438548a5bd31a52aafd252',
    to: to,
    value: 200000000000000000
  })
  res.send(tx)
})

const server = http.createServer(app)
server.listen(port, () => console.log(`Server listening on port ${port}`))
