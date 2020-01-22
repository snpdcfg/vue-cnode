<template>
  <div class="content">
    <div class="headline">
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
          <a href="">{{list.title}}</a>
        </div>
        <div class="time">
          <span>{{ list.last_reply_at}}</span>
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
  created: function () {
    this.$store.dispatch('getList').then(response => {
      this.posts = response.data.data
    })
  }
}
</script>

<style lang="stylus" scoped>
.content
  background #ccc
.headline
  background #fff
  width 80%
  margin 0 auto
  height 50px
  @media screen and (max-width: 800px)
    width 100%
  .headline-box
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
