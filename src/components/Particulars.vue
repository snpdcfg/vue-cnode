<template>
  <div class="particulars">
    <div class="loading"
         v-if="loading">
      Loading...
    </div>
    <div class="title">
      <span>{{data.title}}</span>
      <div class="source">
        <span>• 发布于{{data.create_at}}天前</span>
        <span>• 作者{{data.author.loginname}}</span>
        <span>• {{data.visit_count}}游览</span>
        <span>• 最后一次编辑是11天前</span>
        <span>• 来自 分享</span>
      </div>
    </div>
    <div class="left-box">
      <div class="essay">
        <div v-html="data.content"></div>
      </div>
      <div class="comment">
        <div class="comment-title">
          <span>10回复</span>
        </div>
        <div v-for="(list,index) in data.replies"
             v-bind:key="index"
             class="comment-box">
          <div class="use">
            <img :src="list.author.avatar_url"
                 alt="">
            <span>{{list.author.loginname}}</span>
            <span>{{index + 1}}楼·22天前</span>
          </div>
          <div class="text">
            <span v-html="list.content"></span>
          </div>
        </div>
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
      data: [],
      loading: false
    }
  },
  created: function () {
    this.$store.dispatch('getContent').then(response => {
      axios.get(response.url + this.$route.params.id, {})
        .then((response) => {
          if (response.data.success === true) {
            this.data = response.data.data
            this.loading = false
          }
        })
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/mixins.styl'
.particulars
  float left
  width 74%
  @media screen and (max-width: 900px)
    width 100%
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
    .essay
      background-color #fff
    margin-top 2px
    .comment
      margin-top 20px
      .comment-title
        title()
    .comment-box
      background #fff
      margin-top 1px
      .use
        padding 12px
      img
        width 30px
        height 30px
      .text
        margin-left 16px
</style>
