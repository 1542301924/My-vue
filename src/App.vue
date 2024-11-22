<template>
  <div id="app">
    <AppSidebar />
    <div class="content">
      <router-view /> <!-- 显示当前路由对应的组件 -->
    </div>
  </div>
</template>

<script>
import AppSidebar from './components/AppSidebar.vue';

export default {
  name: 'App',
  components: {
    AppSidebar
  }
};
</script>

<style>
#app {
  display: flex; /* 使用 Flex 布局 */
}
.content {
  margin-left: 200px; /* 留出侧边栏的空间，值要与 Sidebar 的宽度保持一致 */
  padding: 20px; /* 适当的内边距 */
  flex-grow: 1; /* 使内容区域可扩展填满剩余空间 */
}
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 15px;
}
</style>
