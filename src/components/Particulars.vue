<template>
  <div class="particulars">
    <div class="title">
      <span>2020年1月11日Node party@北京成功举办，附照片、视频和ppt</span>
      <div class="source">
        <span>• 发布于22天前</span>
        <span>• 作者ting</span>
        <span>• 1234游览</span>
        <span>• 最后一次编辑是11天前</span>
        <span>• 来自 分享</span>
      </div>
    </div>
    <div class="left-box">
      <div class="essay">
        <span>活动信息</span>
      </div>
      <div class="comment">

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Particulars',
  data () {
    return {
      id: '5e16978581adfe260207a8c1',
      data: []
    }
  },
  created: function () {
    this.$store.dispatch('getContent').then(response => {
      axios.get(response.url + this.id, {})
        .then((response) => {
          console.log(response.data.data)
        })
    })
  }
}
</script>

<style lang="stylus" scoped>
.particulars
  float left
  width 74%
  height 500px
  .title
    background #fff
    padding 12px
    & > span
      font-size 20px
      font-weight bold
      color #000
    .source
      margin 12px 0
      & > span
        padding 0 2px
        font-size 12px
        color #838383
  .left-box
    background #fff
    margin-top 2px
</style>
