import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import GoodsList from '../pages/GoodsList'
import Caculator from '../components/Calculator'
import GoodsImage from '../components/GoodsImage'
import GoodsTitle from '../components/GoodsTitle'

import UserList from  '../pages/UserList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    },
    {
      path: '/userList/:userId',
      name: 'userList',
      component: UserList
    },
    {
      path: '/goodsList',
      name: 'goodsList',
      component: GoodsList
    },
    {
      path: '/goods',
      name: 'Goods',
      component: GoodsList,
      redirect: '/goods/image',
      children: [
        // 嵌套路由
        {
          // path: 切记,这里不要加 '/'
          path: 'title',
          name: 'title',
          component: GoodsTitle
        },
        {
          path: 'image',
          name: 'image',
          component: GoodsImage
        },
      ]
    },
    {
      path: '/caculator',
      name: 'caculator',
      component: Caculator
    }
  ]
})
