<template>
  <div id="MyTable">
    <el-row>
      <el-col :span="24" style="text-align:center " class="search_box">
        <el-input v-model="searchPerson1" placeholder="按校区/班级/姓名" class="search_area_item"></el-input>
        <el-button type="primary" round class="search_btn" @click="btnsearch1()">搜索</el-button>
      </el-col>
    </el-row>

    <el-table :data="stuFinshlist">
      <el-table-column prop="create_time" label="分配日期" align="center" class-name></el-table-column>
      <el-table-column prop="school_name" label="学校" align="center"></el-table-column>
      <el-table-column prop="class_name" label="班级" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" align="center"></el-table-column>
      <el-table-column prop="date2" label="完成日期" align="center"></el-table-column>
      <el-table-column prop="is_complete" label="完成状态" align="center"></el-table-column>

      <el-table-column prop="check" label="操作" align="center">
        <router-link to="/user-photo">查看</router-link>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
import store from '../../store';
export default {
  name: "MyTable",
  data() {
    return {
      stuFinshlist: [],
      searchPerson1: "",
      search:""
    }
  },
  mounted: function() {
    this.getStufinlist();
  },
  methods: {
     errorMsg() {
      this.$message.error("搜索的内容不存在哦！");
    },
    // 获取列表数据
    getStufinlist() {
      const _this = this;
      _this
        .$axios({
          method: "get",
          // url: "/api/pay_stu/?is_complete=1&worker="+store.state.userId
          url: `/api/pay_stu/?is_complete=1&worker=${store.state.userId}` // vue  模版字符串
        })
        .then(function(response) {
          // console.log(response.data.results);
          _this.stuFinshlist = response.data.results;
        })
        .catch(function(err) {
          console.log(222222222222222, err);
        });
    },

    //  搜索
   btnsearch1() {
      const _this = this;
      this.$axios({
        method: "get",
        url: "/api/pay_stu/?search=" + _this.searchPerson1
      })
        .then(function(response) {
          console.log(response);
          if (response.status === 200) {
            if (!response.data.results.length == 0) {
              _this.stuList = response.data.results;
            } else {
              _this.errorMsg();
            }
          } else {
            _this.$message({
              message: response.data.msg,
              type: "error"
            });
          }
        })
        .catch(function(response) {
          console.log(response);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-row .search_box {
  margin: 50px 0px 50px 0px !important;
}
.search_area_item {
  width: 500px;
}
.search_btn {
  margin-left: 40px;
}
</style>

