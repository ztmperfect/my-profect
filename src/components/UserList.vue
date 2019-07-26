<template>
  <section style="margin-top:50px;">
    <div style="font-size:23px; margin-left:20px; margin-bottom:20px;">
      用户列表
      <el-button
        type="primary"
        @click="dialogFormVisible = true"
        style="margin-left:50px; margin-bottom:10px; line-height:10px; "
      >新建用户</el-button>
    </div>

    <el-main class="container">
      <el-table :data="tableData" border>
        <el-table-column prop="id" label="id" width="140" align="center"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120" align="center"></el-table-column>
        <el-table-column prop="phone" label="电话" align="center"></el-table-column>
        <el-table-column prop="identity" label="身份" align="center"></el-table-column>
        <el-table-column prop="remarks" label="备注" align="center"></el-table-column>
        <el-table-column prop="action" label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleClick(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="open">禁用</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>

    
    <!-- 新建用户 -->
    <el-dialog title="用户添加" :visible.sync="dialogFormVisible" style="width:70%; margin-left:auto; margin-right:auto;" center>
      <el-form :model="form" :label-width="formLabelWidth" >
        <el-form-item label="姓名"  style="width:80%">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="身份"  :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择身份" >
            <el-option label="美工" value="meigong"></el-option>
            <el-option label="管理员" value="guanliyuan"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="密码" prop="pass"  style="width:80%">
          <el-input type="password" v-model="form.pass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="checkPass"   style="width:80%">
          <el-input type="password" v-model="form.checkPass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="备注"  style="width:80%">
          <el-input type="textarea" v-model="form.desc" ></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer" >
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>





  </section>
</template>


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
      tableData: Array(6).fill(item),

      
      
      //新增界面是否显示
      dialogTableVisible: false,  
      dialogFormVisible: false,
      //新增界面数据
				addForm: {
					name: '',
					pass: '',
					checkPass: '',
				},
     


      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
     handleClick(row) {
        console.log(row);
      },
    open() {
      this.$confirm("是否确定禁用该用户?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "禁用成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消禁用"
          });
        });
    }
  }
};
</script>

<style >

</style>
