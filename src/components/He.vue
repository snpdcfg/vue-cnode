<template>
  <div class="head">
    <div class="head-box">
      <div class="seek">
        <input type="text">
      </div>
      <div class="navigation">
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
  height 1rem
  width 100%
  background #444
  .head-box
    line-height 50px
    width 80%
    margin 0 auto
    display flex
    flex-direction row
    .seek
      flex 1
      & > input
        border-radius 1.1rem
        background #ccc
        height 0.5rem
        width 4.5rem
        transition all 1s linear
        &:hover
          background #fff
          transform scale 2
          transition all 0.1s linear
    .navigation
      & > ul
        display flex
        & > li
          padding 0 0.4rem 0 0
          & > a
            color #ccc
            &:hover
              color #fff
</style>
