<template>
  <div id="app">
    <!--<h1 v-text="message"> message </h1>-->
    <!--<Caculator></Caculator>-->
    <router-link to="/userList/123">
      UserList123
    </router-link>
    <router-link to="/goods/title">
      goods.title
    </router-link>
    <router-link to="/goods/image">
      goods.image
    </router-link>
    <router-link to="/caculator">
      <button>caculator</button>
    </router-link>
    <hr>
    <router-view>
    </router-view>
  </div>
</template>

<script>

  // import Caculator from './components/Caculator'
  // import GoodsList from './pages/GoodsList'

  export default {
    name: 'app',
    components: {
      // Caculator,
      // GoodsList
    },
    data: () => {
      return {
        message: 'Hello, Www'
      }
    },
    methods: {

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
