<template lang='pug'>

  .root
    mega-header
    .wraper
      page-article
      page-aside

</template>


------------------------------------------


<script>

  import MegaHeader  from './Components/Mega-header.vue'
  import PageArticle from './Components/Page-article.vue'
  import PageAside   from './Components/Page-aside.vue'

  export default {
    components:{  MegaHeader, PageArticle, PageAside  }
  }

</script>


------------------------------------------


<style lang='sass'>

  @import 'node_modules/normalize.css/normalize'
  @import url('https://fonts.googleapis.com/css?family=Roboto')

  ::selection
    background: rgba(#64FFDA, .5)
    color: inherit

  body
    background: url('./assets/background-pattern.png') repeat-y left, url('./assets/background-pattern.png') repeat-y right hsl(180,15%,99%)
    font-family: 'Roboto', sans-serif
    color: #37474F
    cursor: default

    header.mega-header + .wraper
      padding: 0 13% 0 13%
      display: flex
      flex-flow: row wrap
      align-items: flex-start
      justify-content: center

</style>
