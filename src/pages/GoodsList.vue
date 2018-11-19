<template>
    <div class="goodsList">
        <h1>这是商品列表页面</h1>
        <span>{{ $route.params.goodId }}</span>
        <router-link to="title">显示标题</router-link>
        <router-link to="image">显示图片</router-link>
        <!--如果有子路由配置,必须有 router-view 子组件用以承载 -->
        <router-view>

        </router-view>
    </div>
</template>

<script>
  export default {
    name: "GoodsList"
  }
</script>

<style scoped>

</style>