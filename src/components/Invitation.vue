<template>
  <div class="content clearfix">
    <div class="headline clearfix">
      <div v-for="(list, index) in posts "
           v-bind:key="index"
           class="headline-box clearfix">
        <div class="portrait">
          <a href="">
            <img :src="list.author.avatar_url"
                 alt="">
          </a>
          <span>{{list.reply_count}}</span>
          <span>/</span>
          <span>{{list.visit_count}}</span>
        </div>
        <div class="news">
          <span>置顶</span>
          <router-link :to="{name: 'essay', params: {name: list.author.loginname}}">{{list.title}}</router-link>
        </div>
        <div class="time">
          <span>{{ list.last_reply_at | capitalize}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Invitation',
  data () {
    return {
      posts: [],
      loading: false
    }
  },
  // 获取接口数据
  created: function () {
    this.$store.dispatch('getList').then(response => {
      this.posts = response.data.data
    })
  },
  // 过滤时间
  filters: {
    capitalize: function (str) {
      let date = new Date(str)
      let time = new Date().getTime() - date.getTime()
      if (time < 0) {
        return ''
      } else if ((time / 1000 < 30)) {
        return '刚刚'
      } else if (time / 1000 < 60) {
        return parseInt((time / 1000)) + '秒前'
      } else if ((time / 60000) < 60) {
        return parseInt((time / 60000)) + '分钟前'
      } else if ((time / 3600000) < 24) {
        return parseInt(time / 3600000) + '小时前'
      } else if ((time / 86400000) < 31) {
        return parseInt(time / 86400000) + '天前'
      } else if ((time / 2592000000) < 12) {
        return parseInt(time / 2592000000) + '月前'
      } else {
        return parseInt(time / 31536000000) + '年前'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.content, .headline
  width 80%
  margin 0 auto
  @media screen and (max-width: 800px)
    width 100%
  .headline-box
    background #fff
    padding 10px 10px 10px 10px
    line-height 26px
    width 95%
    height 26px
    margin 0 auto
    .portrait
      float left
      & > a
        & > img
          padding 0 15px 0 0
          width 30px
          height 30px
    .news
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
      float left
      padding 0 0 0 20px
      & > span, & > a
        color #000
        display inline-block
    .time
      white-space nowrap
      width 72px
      float right
</style>
