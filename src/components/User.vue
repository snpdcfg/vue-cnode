<template>
  <div class="right">
    <div class="autho">
      <div class="autho-title">
        <span>作者</span>
      </div>
      <div class="user">
        <img src="https://avatars3.githubusercontent.com/u/3118295?v=4&s=120"
             alt="">
        <a href="">ting</a>
        <div class="integral">
          <span>积分:123456</span>
        </div>
        <div class="motto">
          <span> “ 狼叔说：少抱怨，多思考，未来更美好 ”</span>
        </div>
      </div>
    </div>
    <div class="recently">
      <div class="recently-title">
        <span>作者最近话题</span>
      </div>
      <div class="recently-content">
        <ul>
          <li>此处发帖无限制，不会在首页展示，不影响用户正常使用，千万不要随便回复别人的帖子</li>
          <li>此处发帖无限制，不会在首页展示，不影响用户正常使用，千万不要随便回复别人的帖子</li>
          <li>此处发帖无限制，不会在首页展示，不影响用户正常使用，千万不要随便回复别人的帖子</li>
          <li>此处发帖无限制，不会在首页展示，不影响用户正常使用，千万不要随便回复别人的帖子</li>
          <li>此处发帖无限制，不会在首页展示，不影响用户正常使用，千万不要随便回复别人的帖子</li>
        </ul>
      </div>
      <div class="reply">
        <div class="reply-title">
          <span>无人回复话题</span>
        </div>
        <div class="reply-content">
          <ul>
            <li>关于 Egg 中单元测试的问题，求指导</li>
            <li>关于 Egg 中单元测试的问题，求指导</li>
            <li>关于 Egg 中单元测试的问题，求指导</li>
            <li>关于 Egg 中单元测试的问题，求指导</li>
            <li>关于 Egg 中单元测试的问题，求指导</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User'
}
</script>

<style lang="stylus">
@import '../assets/mixins.styl'
.right
  width 25%
  float right
  .autho
    .autho-title
      title()
      & > span
        color #444
    .user
      background-color #fff
      padding 10px
      border-radius 0 0 3px 3px
      & > img
        width 48px
        height 48px
      .integral
        margin-top 16px
      .motto
        margin-top 16px
  .recently
    margin-top 15px
    .recently-title
      title()
    .recently-content
      background-color #fff
      padding 10px
      & > li
        ellipsis()
  .reply
    margin-top 16px
    .reply-title
      title()
</style>
