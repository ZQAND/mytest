<template>
  <div id="main">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    </el-breadcrumb>
    <h2>我这里是首页</h2>
    <router-link to="/user">前往用户中心</router-link>
    <!-- <div @click="jump">跳转</div> -->
  </div>
</template>

<script>
export default {
  name: "Main",
  /* methods: {
    jump() {
      this.$router.push("/user");
    },
  }, */
};
</script>
