<style>
    .main-content {
        padding: 16px;
    }
</style>

<template>
  <div>
    <md-toolbar class="md-medium">
      <h1 class="md-title" style="flex: 1">Simple Vote</h1>
      <md-layout md-flex="40">
        <md-layout md-flex="25">
          <!--<web3></web3>-->
        </md-layout>
        <md-layout md-flex-offset="5">
          <!--<account></account>-->
        </md-layout>
      </md-layout>
      <md-button @click="openDialog" class="md-raised md-accent">Submit Proposal</md-button>
    </md-toolbar>
    <div class="main-content">
      <md-layout md-column md-flex>
        <md-layout>
          <md-layout v-for="(p, hash) in proposals" :key="hash" md-flex="33" md-row>
            <!--<proposal :hash="hash" style="flex: 1; margin: 5px"></proposal>-->
          </md-layout>
        </md-layout>
        <md-layout>
          <!--<transactions style="flex: 1"></transactions>-->
        </md-layout>
      </md-layout>
    </div>
    <md-snackbar
      ref="notice"
      md-position="top center"
      md-duration="5000"
      @close="onNoticeClose">
        <span>{{notice}}</span>
        <md-button @click="$refs.notice.close()">Close</md-button>
      </md-snackbar>
    <md-dialog-prompt
      ref="propose"
      v-model="proposal"
      md-title="Submit Proposal"
      md-ok-text="Submit"
      md-cancel-text="Cancel"
      md-input-maxlength="140"
      md-content="Please write a proposal (max 140 chars)"
      @close="onDialogClose"></md-dialog-prompt>
  </div>
</template>

<script>
module.exports = {
  name: 'app',
}
</script>