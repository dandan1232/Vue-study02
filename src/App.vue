<template>
  <div id="app">
    <div id="nav">
      <router-link to="/timeline">时间轴</router-link> |
      <router-link to="/scroll">滚动轴</router-link> |
      <router-link to="/cards">卡片</router-link> |
      <router-link to="/grids">网格</router-link> |
      <router-link to="/componentWithMap">地图</router-link> |
      <router-link to="/list">列表</router-link> |

      <ComponentWithMap />
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
