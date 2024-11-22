<template>
    <div class="sidebar">
      <ul>
        <li @click="navigate('home')">
          <i class="fas fa-home"></i> <router-link to="/">首页</router-link>
        </li>
        <li @click="navigate('about')">
          <i class="fas fa-info-circle"></i> <router-link to="/about">关于我们</router-link>
        </li>
        <li @click="navigate('contact')">
          <i class="fas fa-envelope"></i> <router-link to="/contact">联系我们</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppSidebar',
    methods: {
      navigate(page) {
        this.$emit('navigate', page);
      }
    }
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 100px;
    background-color: #f4f4f4;
    padding: 15px;
    height: 100vh;
    position: fixed; /* 固定侧边栏 */
  }
  .sidebar a {
  text-decoration: none; /* 去掉下划线 */
  color: inherit; /* 继承父元素的颜色 */
  }
  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }
  .sidebar li {
    padding: 10px 0;
    cursor: pointer;
    display: flex; /* 使用 Flexbox */
    align-items: center; /* 垂直居中对齐 */
  }
  .sidebar li i {
    margin-right: 8px; /* 图标和文字之间的间距 */
  }
  .sidebar li:hover {
    background-color: #ddd;
  }
  </style>
  