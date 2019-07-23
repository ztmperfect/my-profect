<template>
    <div id="MyTable">
    <div class="search-area">
      <div class="search-item" align="center">
        <el-select v-model="value1" multiple placeholder="按校区">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>

        <el-select
          v-model="value2"
          multiple
          collapse-tags
          placeholder="按班级"
          style="margin-left: 20px;"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>

        <el-select
          v-model="value3"
          multiple
          collapse-tags
          placeholder="按名字"
          style="margin-left: 20px;"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-button type="primary" icon="el-icon-search" class="mytable-searchicon">搜索</el-button>
      </div>
      
    </div>
    <el-table :data="tableData"  >
      <el-table-column prop="Fdate" label="分配日期" width="200" align="center" class-name=""></el-table-column>
      <el-table-column prop="school" label="学校" width="200" align="center"></el-table-column>
      <el-table-column prop="room" label="班级" width="200" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" width="200" align="center"></el-table-column>
      
      <el-table-column prop="date1" label="初始日期" width="200" align="center"></el-table-column>
      <el-table-column prop="date2" label="完成日期" width="200" align="center"></el-table-column>
 
       <el-table-column prop="check" label="操作" width="100px;" align="center">
        <router-link to="/user-photo">查看</router-link>
            </el-table-column> 

      <el-table-column prop="finish" label="状态" width="200" align="center">
  <el-select v-model="value" placeholder="已完成" style="width:80px;">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
      </el-table-column>
      
    </el-table>

  
  </div>
</template>


<script>
export default {
  name: "MyTable",
  data() {
    const item = {
      Fdate:'2016/05/01',
      date1: "2016/05/02",
      date2:'2016/5/30',
      name: "王小虎",
      room: "荷兰班",
      school: "百家湖",
      finish:''
     
      
    };
    return {
      value:'',
      value1:'',
      value2:'',
      value3:'',
      options: [],
      tableData: Array(20).fill(item)
    };
  },
  methods: {}
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

