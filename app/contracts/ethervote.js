'use strict'

const EventEmitter = require('events')
const { loadContract } = require('./ethereum')
const etherVote = require('../../build/EtherVote.json')
const etherVoteAddr = process.env.ETHERVOTE_ADDRESS || '0x345ca3e014aaf5dca488057592ee47305d9b3e10'
const startBlock = process.env.ETHERVOTE_BLOCK || 0
let contract

async function getContract () {
  if (!contract) {
    contract = await loadContract(etherVote, etherVoteAddr)
  }
  return contract
}

async function vote (proposal, support, from) {
  const contract = await getContract()

  return new Promise((resolve, reject) => {
    contract.vote(proposal, support, { from }, (err, result) => {
      if (err) return reject(err)

      resolve(result)
    })
  })
}

async function propose (proposal, proposalHash, from) {
  const contract = await getContract()

  return new Promise((resolve, reject) => {
    contract.propose(proposal, proposalHash, { from }, (err, result) => {
      if (err) return reject(err)

      resolve(result)
    })
  })
}

async function logVote (index = {}, filter = { fromBlock: startBlock, toBlock: 'latest' }) {
  const emitter = new EventEmitter()
  const contract = await getContract()

  const log = contract.LogVote(index, filter)
  log.watch((err, event) => {
    if (err) return emitter.emit('error', err)

    emitter.emit('vote', event)
  })

  return emitter
}

async function logProposal (index = {}, filter = { fromBlock: startBlock, toBlock: 'latest' }) {
  const emitter = new EventEmitter()
  const contract = await getContract()

  const log = contract.LogProposal(index, filter)
  log.watch((err, event) => {
    if (err) return emitter.emit('error', err)

    emitter.emit('proposal', event)
  })

  return emitter
}

module.exports = {
  getContract,
  vote,
  propose,
  logVote,
  logProposal
}
