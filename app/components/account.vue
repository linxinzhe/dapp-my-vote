<template>
  <md-layout md-column>
    <md-layout v-if="account" md-row>
      <md-layout>
        <span class="md-body-2">您的钱包地址:</span>
      </md-layout>
      <md-chip>{{account}}</md-chip>
    </md-layout>
    <md-layout v-if="balance" md-row>
      <md-layout>
        <span class="md-body-2">您的余额:</span>
      </md-layout>
      <md-chip>{{balance}}</md-chip>
    </md-layout>
  </md-layout>
</template>

<script>
const { mapState } = require('vuex')

module.exports = {
  computed: mapState({
    account: state => state.account,
    balance: state => state.balance
  })
}
</script>
