<template lang='pug'>

  header.mega-header
    main-menu

    featured-posts(v-bind:posts='posts')

</template>


------------------------------------------


<script>
  import MainMenu      from './Main-menu.vue'
  import FeaturedPosts from './Mega-header-featured-posts.vue'

  export default {
    name: 'mega-header',
    components: {  MainMenu, FeaturedPosts  },
    data() {
      return {
        posts: [
          {
            title: 'A temporada 2018 começou!',
            subtitle: 'A temporada 2018 já chegou. Dê o primeiro passo e comece a jornada.',
            button: 'Conferir',
            link: '#Post1Link'
          }/*, {
            title: 'Post 2 Title',
            subtitle: 'Post 2 Sutitle',
            button: 'Post 2 Button',
            link: '#Post2Link'
          }, {
            title: 'Post 3 Title',
            subtitle: 'Post 3 Sutitle',
            button: 'Post 3 Button',
            link: '#Post3Link'
          }*/
        ]
      }
    }
  }

</script>


------------------------------------------


<style lang='sass'>

  header.mega-header
    width: 100%
    height: 100vh
    background: url('../assets/mega-header.jpg') no-repeat center / cover
    color: #FFF
    display: flex
    flex-flow: row wrap
    box-shadow: 0 6px 10px 0 rgba(#000, .14), 0 1px 18px 0 rgba(#000, .12), 0 3px 5px -1px rgba(#000, .3), 0 50px 100px rgba(#000, .3) inset

</style>
