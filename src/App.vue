<template>
  <div id="app">
    <div class="comy-content">中易智能相册管理系统</div>
    <el-container style="height: 900px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color:#f5f5f5">
        <el-menu :default-openeds="['1','3']" router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-tools"></i>用户管理
            </template>
            <el-menu-item index="/user-list">用户列表</el-menu-item>
            <!-- <el-menu-item index="/user-add">添加用户</el-menu-item> -->
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-custom"></i>学员管理
            </template>
            <el-menu-item index="/my-table">未完成学员</el-menu-item>
            <el-menu-item index="/finish-table">已完成学员</el-menu-item>
            <el-menu-item index="/schedule">学员相册进度</el-menu-item>
            

          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-order"></i>统计分析
            </template>
            <el-menu-item-group>
              <el-menu-item index="/statistics">进度列表</el-menu-item>
              <el-menu-item index="/test">测试窗口</el-menu-item>
              <!-- <el-menu-item index="/add-adimin">测试窗口2</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 10px ; font-size:18px;"></i>
            <el-dropdown-menu slot="dropdown">
              <!-- <el-dropdown-item>所有排列</el-dropdown-item> -->
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>退出系统</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span style="margin-right:30px;">王小虎</span>
        </el-header>

        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value1: [],
      value2: [],
      value3: []
    };
  }
};
</script>

<style>


.comy-content {
  font-size: 34px;
  text-align: center;
  padding-bottom: 10px;
}

.el-header {
  text-align: right;
  background-color: #f5f5f5;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  background-color: #f5f5f5;
}

.el-main{
  padding: 10px;
}
</style>
