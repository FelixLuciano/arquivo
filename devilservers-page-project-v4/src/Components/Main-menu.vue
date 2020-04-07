<template lang='pug'>

  nav.Main-menu
    ul: li(v-for='item in menuItems.left' v-once)
      a(:href='item.link') {{ item.name }}
      ul(v-if='item.submenu')
        li(v-for='subitem in item.submenu')
          a(:href='subitem.link') {{ subitem.name }}

    ul.right-menu: li(v-for='item in menuItems.right' v-once)
      a(:href='item.link') {{ item.name }}

</template>


------------------------------------------


<script>

  import Map from  './Main-menu-map.json'

  export default {
    name: 'main-menu',

    data() {
      return {
        menuItems: Map
      }
    }

  }

</script>


------------------------------------------


<style lang='sass'>

  @import url('https://fonts.googleapis.com/css?family=Merriweather')

  nav
    width: 80%
    height: 70px
    margin: 0 10%
    border-bottom: 1px solid rgba(#FFF9C4, .5)
    display: flex
    align-items: center
    justify-content: space-between

    ul
      margin: 0
      padding: 0
      display: flex
      flex-diretion: column

      li
        list-style-type: none

        a
          padding: 25px 15px
          border-bottom: 2px solid  transparent
          color: rgba(#FFFDE7, .95)
          text-decoration: none
          font-family: 'Merriweather', serif
          transition: .3s

          &:hover
            border-bottom-color: rgba(#FFFDE7, .7)
            color: #FFF
            text-shadow: 0 0 50px #FFF59D, 0 0 50px #FFF9C4
            cursor: pointer

          &::after
            content: ''
            display: block
            width: 50%
            line-height: 1px
            background: red

        &:hover

          a::after

          ul
            margin-top: 45px
            visibility: visible
            opacity: 1

        ul
          margin: 30px 0 0 -10px
          position: absolute
          visibility: hidden
          opacity: 0
          transition: .3s
          transition-delay: .1s

          li a
            padding: 10px 20px
            border-bottom: none

</style>
