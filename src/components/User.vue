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
          <li v-for="(topics,index) in recent_topics"
              v-bind:key="index">{{topics.title}}</li>
        </ul>
      </div>
      <div class="reply">
        <div class="reply-title">
          <span>无人回复话题</span>
        </div>
        <div class="reply-content">
          <ul>
            <li v-for="(replise,index) in recent_replies"
                v-bind:key="index">{{replise.title}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'User',
  data () {
    return {
      id: 'i5ting',
      recent_topics: [],
      recent_replies: [],
      user: []
    }
  },
  created: function () {
    this.$store.dispatch('getUser').then(response => {
      axios.get(response.url + this.id, {})
        .then((response) => {
          this.recent_topics = response.data.data.recent_topics
          this.recent_replies = response.data.data.recent_replies
        })
    })
  }
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
      & > ul
        & > li
          color #778087
          padding 6px
          ellipsis()
  .reply
    margin-top 16px
    .reply-title
      title()
    .reply-content
      padding 10px
      background-color #fff
      & > ul
        & > li
          color #778087
          padding 6px
          ellipsis()
</style>
