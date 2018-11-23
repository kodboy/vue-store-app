<template>
    <div id="nav-bread">
        <nav class="nav-breadcrumb">
            <a href="/">Home/</a>
            <slot></slot>
        </nav>
    </div>
</template>

<script>
  export default {
    name: "NavBread"
  }
</script>

<style scoped>

</style>