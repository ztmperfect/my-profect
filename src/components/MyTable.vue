<template>
  <div id="MyTable">

<el-row >
  <el-col :span="24" style="text-align:center " class="search_box" >
      <el-input  v-model="searchPerson"  placeholder="按校区/班级/姓名搜索" class="search_area_item" ></el-input>
     <el-button type="primary" round class="search_btn" @click="btnsearch()">搜索</el-button>     
  </el-col>
</el-row>
    

    <el-table stripe :data="stuList"  >
      <el-table-column prop="create_time" label="分配日期" align="center"></el-table-column>
      <el-table-column prop="school_name" label="学校" align="center"></el-table-column>
      <el-table-column prop="class_name" label="班级" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" align="center"></el-table-column>
      <el-table-column prop="date2" label="完成日期" align="center"></el-table-column>
      <el-table-column prop="check" label="操作" align="center">
        <router-link to="/user-photo">查看</router-link>
      </el-table-column>
      <el-table-column prop="is_complete" label="完成状态" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
// import store from '../../store';
export default {
  name: "MyTable",
  data() {
    return {
      stuList: [],
      searchPerson:""
    };
  },

  mounted: function() {
    this.getStulist();
  },

  methods: {
     errorMsg() {
      this.$message.error("搜索的内容不存在哦！");
    },
    getStulist() {
      const _this = this;
      _this
        .$axios({
          method: "get",
          url: "/api/pay_stu/?is_complete=0&worker="+this.$store.state.userId

        })
        .then(function(response) {
          // console.log(11111111111111, response.data);
          console.log(response.data.results);
          // console.log(_this)
          _this.stuList = response.data.results;
          // console.log(_this.stuList)
        })
        .catch(function(err) {
          console.log(222222222222222, err);
        });
    },
     //  搜索
    btnsearch() {
      const _this = this;
      this.$axios({
        method: "get",
        url: "/api/pay_stu/?search=" + _this.searchPerson
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
.el-row .search_box{
  margin:50px 0px 50px 0px!important;

}
.search_area_item{
  width: 500px;
}
.search_btn{
  margin-left:40px;
}

</style>
 
