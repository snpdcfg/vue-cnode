<template>
  <div class="head">
    <div class="head-box clearfix">
      <div class="seek">
        <input type="text">
      </div>
      <div class="navigation clearfix">
        <ul>
          <li><a href="">首页</a></li>
          <li><a href="">新手入门</a></li>
          <li><a href="">API</a></li>
          <li><a href="">关于</a></li>
          <li><a href="">注册</a></li>
          <li><a href="">登录</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'He'
}
</script>

<style lang="stylus" scoped>
.head
  height 50px
  width 100%
  background #444
  @media screen and (max-width: 669px)
    height 100px
  .head-box
    line-height 50px
    width 80%
    margin 0 auto
    .seek
      float left
      & > input
        border-radius 55px
        background #ccc
        height 25px
        width 225px
        transition all 1s linear
        &:hover
          background #fff
          transform scale 2
          transition all 0.1s linear
    .navigation
      & > ul
        float right
        @media screen and (max-width: 669px)
          float left
        & > li
          float left
          padding 0 20px 0 0
          & > a
            color #ccc
            &:hover
              color #fff
</style>
