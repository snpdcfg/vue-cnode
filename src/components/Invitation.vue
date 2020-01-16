<template>
  <div class="content">
    <div class="headline">
      <div class="headline-box">
        <div class="portrait">
          <img src="https://avatars3.githubusercontent.com/u/33857095?v=4&s=120"
               alt="">
          <span>5</span>
          <span>/</span>
          <span>3600</span>
        </div>
        <div class="news">
          <span>置顶</span>
          <p>第三届 SEE Conf 全天场回顾，围观玉伯,天猪，死马都讲了啥</p>
        </div>
        <div class="time">
          <img src="https://avatars3.githubusercontent.com/u/33857095?v=4&s=120"
               alt="">
          <span>3小时前</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Invitation'
}
</script>

<style lang="stylus" scoped>
.content
  width 80%
  margin 0 auto
  background #ccc
.headline
  height 1rem
  .headline-box
    padding 10px 10px 10px 10px
    line-height 0.6rem
    display flex
    flex-direction row
    width 95%
    height 0.6rem
    margin 0 auto
    .portrait
      & > img
        padding 0 0.3rem 0 0
        width 0.6rem
        height 0.6rem
    .news
      flex auto
      display flex
      padding 0 0 0 0.4rem
      & > span
        color #fff
        background #80bd01
        font-size 10px
        height 0.36rem
        width 0.6rem
        margin-top 5px
        line-height 0.36rem
        text-align center
    .time
      display flex
      & > img
        line-height 1rem
        width 0.36rem
        height 0.36rem
</style>
