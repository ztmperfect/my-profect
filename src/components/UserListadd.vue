<template>
  <div id="MyTable">
    <el-table
      border
      align="center"
      ref="multipleTable"
      :data="tableData3"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      >
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column prop="create_time" label="日期" width="250" align="center"></el-table-column>
      <el-table-column prop="school_name" label="学校" width="250" align="center"></el-table-column>
      <el-table-column prop="class_name" label="班级" width="250" align="center"></el-table-column>
      <el-table-column prop="worker" label="所属人" width="250" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" width="220" align="center"></el-table-column>
      <el-table-column prop="check" label="照片" width align="center">
        <router-link to="/user-photo">查看</router-link>
      </el-table-column>
    </el-table>

    <div class="chose_box">
      <el-radio-group v-model="defaultWorker" @change="changeHandler">
        <el-radio v-for="w in worker" :key="w.id" :label="w.id" border>{{w.username}}</el-radio>
      </el-radio-group>

      <el-button type="primary" round class="chose-btn1" @click="updateWorke()">分配</el-button>
      <el-button type="warning" round class="chose-btn1">一键分配</el-button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tableData3: [],
      defaultWorker: "",
      checkedWorker: "",
      worker: [],
      checkedStu: []
    };
  },
  mounted: function() {
    this.getTabledata3();
    this.getWorker();
  },

  methods: {
    // 未分配
    getTabledata3() {
      const _this = this;
      _this
        .$axios({
          method: "get",
          url: "/api/pay_stu/?worker=0"
        })
        .then(function(response) {
          console.log(response)
          _this.tableData3 = response.data.results;
        });
    },

    //获取所有的美工
    getWorker() {
      const _this = this;
      _this
        .$axios({
          method: "get",
          url: "/api/users/?identity=1" // 美工
        })
        .then(function(response) {
          // console.log(response, "-=-=-=-=");
          _this.worker = response.data.results;
          // 如果存在美工，则默认第一个美工被选中
          if (_this.worker) {
            _this.defaultWorker = _this.worker[0].id;
          }
        });
    },
    // 动态获取被选中美工的ID，单选
    changeHandler(value) {
      this.checkedWorker = value;
    },



    
    // 获取被选中的学员
    handleSelectionChange(value) {
      this.checkedStu = value;
    },

    // 点击分配按钮，传给
    updateWorke() {     
      const _this = this;
      let patch_data;
      _this.checkedStu.forEach(item => {
          patch_data = {
            school_url: item.school_url,
            class_id: item.class_id,
            stu_id: item.stu_id,
            worker: _this.checkedWorker? _this.checkedWorker:_this.defaultWorker
        };
        // console.log(item.id)
        _this
        .$axios({
          method: "patch",
          url: "/api/pay_stu/"+item.id+"/",
          data:patch_data
        })
        .then(function(response) {
          console.log(response)
            _this.$router.go(0);    
          // _this.tableData3 = response.data.results;
        })
        .catch(function(error){
          console.log(error)
        })
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.search-area {
  margin-left: 40px;
}
.search-item {
  margin-bottom: 20px;
}
.mytable-searchicon {
  margin-left: 80px;
  margin-top: 40px;
  margin-bottom: 40px;
}
.chose-btn1 {
  margin-left: 50px;
}

.chose_box {
  margin-top: 80px;
}
</style>

