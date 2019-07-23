<template>
  <div >
    <div style="font-size:23px; margin-left:20px; margin-bottom:-10px;">用户列表</div>
    <el-main class="container">
      <el-table :data="tableData" border >
        <el-table-column prop="id" label="id" width="140" align="center" ></el-table-column>
        <el-table-column prop="name" label="姓名" width="120" align="center"></el-table-column>
        <el-table-column prop="phone" label="电话" align="center"></el-table-column>
        <el-table-column prop="identity" label="身份" align="center"></el-table-column>
        <el-table-column prop="remarks" label="备注" align="center"></el-table-column>
        <el-table-column prop="action" label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" >编辑</el-button>
             <el-button size="mini" type="danger" @click="open" >禁用</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </div>
</template>

<style lang="scss" scoped>
</style>


<script>
export default {
  data() {
    const item = {
      id: "1",
      name: "王小虎",
      phone: "18205160472",
      identity: "美工",
      remarks: "无"
    };
    return {
      tableData: Array(6).fill(item)
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    open() {
        this.$confirm('是否确定禁用该用户?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '禁用成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消禁用'
          });          
        });
      }
    
  }
};
</script>

<style  scoped>



</style>

