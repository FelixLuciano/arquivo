<template lang='pug'>

  .featured-posts
    .featured-post(v-for='post in posts')
      .title {{ post.title }}
      .subtitle {{ post.subtitle }}
      a.button(:href='post.link') {{ post.button }}

</template>


------------------------------------------


<script>

  export default {
    name: 'mega-header-featured-posts',
    props: {
      posts: Array
    }

  }

</script>


------------------------------------------


<style lang='sass'>

  @import url('https://fonts.googleapis.com/css?family=Merriweather')

  .featured-posts
    width: 50%
    max-height: 200px
    margin-left: 13%

  .featured-post
    padding-left: 25px
    border-left: 3px solid rgba(#FFF9C4, .9)
    text-shadow: 0 0 50px #FFF59D, 0 0 50px #FFF9C4

    .title
      font-family: 'Merriweather', serif
      font-size: 2.2em
      color: #FFF9C4

    .subtitle
      margin-top: 10px
      font-size: 1.2em

    a.button
      margin-top: 20px
      padding: 0 25px
      background: rgba(#FFF, .1)
      border: 1px solid #FFF9C4
      border-radius: 3px
      color: #FFF9C4
      font-size: .9em
      text-decoration: none
      text-transform: uppercase
      line-height: 34px
      display: inline-block
      transition: .3s

      &:hover
        background: rgba(#FFF, .3)

</style>
