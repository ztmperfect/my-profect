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
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column label="日期" width="220" align="center" >
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="school" label="学校" width="250" align="center"></el-table-column>
      <el-table-column prop="class" label="班级" width="250" align="center"></el-table-column>
       <el-table-column prop="allot" label="所属人" width="250" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" width="220" align="center"></el-table-column>
      <el-table-column prop="check" label="照片" width="" align="center">
        <router-link to="/user-photo">查看</router-link>
      </el-table-column>
    </el-table>

    <div>
    <el-radio-group v-model="radio2" v-for="name in names" :label='name' :key="name">
    <el-radio >{{name}}</el-radio>
    <!-- <el-radio :label="6">备选项</el-radio>
    <el-radio :label="9">备选项</el-radio> -->
  </el-radio-group>
  
    <button>一键分配</button>
    </div>


  </div>
</template>


<script>
export default {
  data() {
    return {
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          school:"南京百家湖校区",
          class:"德国班",
          allot:"未分配",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          school:"南京百家湖校区",
          class:"德国班",
          allot:"未分配",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          school:"南京百家湖校区",
          class:"德国班",
          allot:"未分配",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          school:"南京百家湖校区",
          class:"德国班",
          allot:"未分配",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          school:"南京百家湖校区",
          class:"德国班",
          allot:"未分配",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          school:"南京百家湖校区",
          class:"德国班",
          allot:"未分配",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          school:"南京百家湖校区",
          class:"德国班",
          allot:"未分配",
          address: "上海市普陀区金沙江路 1518 弄"
        }
        
      ],
       names:['黄文', '李成', '大洋', '小于'],
      multipleSelection: [],
      radio2:''
    };
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
</style>

