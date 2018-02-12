<style>
    .main-content {
        padding: 16px;
    }
</style>

<template>
  <div>
    <md-toolbar class="md-medium">
      <h1 class="md-title" style="flex: 1">简易投票系统</h1>
      <md-layout md-flex="40">
        <md-layout md-flex="25">
          <web3></web3>
        </md-layout>
        <md-layout md-flex-offset="5">
          <account></account>
        </md-layout>
      </md-layout>
      <md-button @click="openDialog" class="md-raised md-accent">开启投票</md-button>
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
      md-title="开启投票"
      md-ok-text="提交"
      md-cancel-text="取消"
      md-input-maxlength="140"
      md-content="请写内容(暂时支持英文，小于140字)"
      @close="onDialogClose"></md-dialog-prompt>
  </div>
</template>

<script>
module.exports = {
  name: 'app',
}
</script>
