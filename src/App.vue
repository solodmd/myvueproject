<template>
  <div id="app">
    <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    {{typeof this.$store.navList}}
    <el-menu :default-active="this.$route.path" router mode="horizontal">
  <el-menu-item v-for="(item,i) in this.$store.navList" :key="i" :index="item.name">
      {{ item.navItem }}
  </el-menu-item>
</el-menu>
</el-aside>
<el-main><div><router-view/></div></el-main>
</el-container>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
