<template>
  <el-container>
    <el-header>
      <div class="header-inner">
        <div class="logo">
          <img src="../assets/logo.png" />
          <div>
            <p class="projectName">后台管理系统</p>
            <p class="desc">后台管理系统欢迎您</p>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router="true"
      >
        <el-menu-item index="/main">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="/user">用户中心</el-menu-item>
        <el-menu-item index="4"
          ><a href="https://www.ele.me" target="_blank"
            >订单管理</a
          ></el-menu-item
        >
        <el-submenu class="fr" index="5">
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>个人中心</span></template
          >
          <el-menu-item index="2-1">退出</el-menu-item>
          <el-menu-item index="2-2">帮助</el-menu-item>
          <el-menu-item index="2-3">消息</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>产品</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-location"></i>
              <span slot="title">计划</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">主数据</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">设置</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-container>
        <el-main><router-view /></el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "app",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },

  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.el-container {
  /* position: absolute;
  width: 100%;
  top: 0px;
  left: 0;
  bottom: 0; */
  height: 100%;
}
.el-header {
  padding: 0;
  z-index: 1000;
}
.el-header .header-inner {
  display: flex;
  align-items: center;
  height: 65px;
  padding: 10px 12px;
  background: #ffffff;

  .logo {
    display: flex;
    align-items: center;
  }

  img {
    width: 50px;
    margin-right: 4px;
  }

  .projectName {
    margin-bottom: 2px;
    font-size: 20px;
    font-weight: 600;
    color: #1c1c28;
  }

  .desc {
    font-size: 12px;
    color: #a6a6a6;
  }
}

.el-header .fr {
  float: right;
}
.el-header .el-menu {
  padding-left: 200px;
  border-bottom: none;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-aside,
.el-main {
  padding-top: 100px;
}
.el-aside {
  background: #545c64;
}
.el-aside .el-menu {
  border-right: none;
}
</style>
