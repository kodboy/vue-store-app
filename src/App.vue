<template>
  <div id="app">
    <!--<h1 v-text="message"> message </h1>-->
    <!--<router-link to="/userList/123">-->
      <!--UserList123-->
    <!--</router-link>-->
    <!--<br>-->
    <!--<router-link to="/goods/title">-->
      <!--goods.title-->
    <!--</router-link>-->

    <!--<router-link to="/goods/image">-->
      <!--goods.image-->
    <!--</router-link>-->
    <!--<br>-->
    <!--<router-link to="/caculator">-->
      <!--<button>caculator</button>-->
    <!--</router-link>-->
    <!--<br>-->
    <!--<button @click="pushToCart"> toCart</button>-->
    <!--<hr>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import NavHeader from './components/NavHeader'
  import NavFooter from './components/NavFooter'
  import NavBread from './components/NavBread'

  export default {
    name: 'app',
    components: {
      // Caculator,
      // GoodsList,
      NavHeader,
      NavBread,
      NavFooter
    },
    data: () => {
      return {
        message: 'Hello, Www'
      }
    },
    methods: {
      pushToCart() {
        this.$router.push({path: '/cart?cartId=532313'})
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
