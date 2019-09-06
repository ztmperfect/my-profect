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
      <el-table :data="userList">
        <el-table-column prop="id" label="id" align="center"></el-table-column>
        <el-table-column prop="username" label="姓名" align="center"></el-table-column>
        <el-table-column prop="gender" label="性别" align="center"></el-table-column>
        <el-table-column prop="mobile" label="电话" align="center"></el-table-column>
        <el-table-column prop="identity" label="身份" align="center"></el-table-column>
        <el-table-column prop="action" label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click=" handleClick(scope.row)">编辑</el-button>
            <el-button size="mini" type="warning" @click="open">禁用</el-button>
            <el-button size="mini" type="danger" @click=" handleClick1(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>

    <!-- 新建用户 -->
    <el-dialog
      title="用户添加"
      :visible.sync="dialogFormVisible"
      style="width:80%; margin-left:auto; margin-right:auto;"
      center
    >
      <el-form :model="form">
        <el-form-item label="姓名" prop="username" label-width="60px">
          <el-input v-model="form.username"></el-input>
        </el-form-item>

        <el-form-item label="性别" prop="gender" style="margin-left:20px;">
          <el-select v-model="form.gender" style="width:91%">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="密码" prop="password" label-width="60px">
          <el-input type v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item label="电话" prop="mobile" label-width="60px">
          <el-input type v-model="form.mobile"></el-input>
        </el-form-item>

        <el-form-item label="身份" prop="identity" label-width="60px">
          <el-radio-group v-model="form.identity">
            <el-radio label="0">美工</el-radio>
            <el-radio label="1">管理员</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addsubtn()">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 编辑 -->
    <el-dialog
      title="编辑用户"
      :visible.sync="dialogFormVisible1"
      style="width:80%; margin-left:auto; margin-right:auto;"
      center
    >
      <el-form :model="form1">
        <el-form-item label="姓名" prop="username" label-width="60px">
          <el-input v-model="form1.username"></el-input>
        </el-form-item>

        <el-form-item label="性别" prop="gender" style="margin-left:20px;">
          <el-select v-model="form1.gender" style="width:91%">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="密码" prop="password" label-width="60px">
          <el-input type v-model="form1.password"></el-input>
        </el-form-item>

        <el-form-item label="电话" prop="mobile" label-width="60px">
          <el-input type v-model="form1.mobile"></el-input>
        </el-form-item>

        <el-form-item label="身份" prop="identity" label-width="60px">
          <el-radio-group v-model="form1.identity">
            <el-radio label="0">美工</el-radio>
            <el-radio label="1">管理员</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </div>
    </el-dialog>
  </section>
</template>


<script>
export default {
  data() {
    return {
      dialogFormVisible1: false,
      //新增界面是否显示
      dialogTableVisible: false,
      dialogFormVisible: false,
      id: "",

      form: {
        username: "",
        gender: "",
        identity: "",
        password: "",
        mobile: ""
      },
      form1: {
        username: "",
        gender: "",
        identity: "",
        password: "",
        mobile: ""
      },

      userList: []
    };
  },
  mounted: function() {
    this.getUserlist();
  },

  methods: {
    // 获取用户列表
    getUserlist() {
      const _this = this;
      _this
        .$axios({
          method: "get",
          url: "/api/users/"
        })
        .then(function(response) {
          // console.log(response.data.results);
          _this.userList = response.data.results;
        })
        .catch(function(err) {
          console.log(222222222222222, err);
        });
    },

    // 新增用户
    addsubtn() {
      const _this = this;
      let postData = this.$qs.stringify({
        username: _this.form.username,
        gender: _this.form.gender,
        identity: _this.form.identity,
        password: _this.form.password,
        mobile: _this.form.mobile
      });
      this.$axios({
        method: "post",
        url: "/api/users/",
        data: postData
      }).then(function(response) {
        console.log(response, "====");
        if (response.status == 201) {
          _this.dialogFormVisible = false;
          _this.$message({
            type: "success",
            message: "新增成功!"
          });
          setTimeout(() => {
            _this.$router.go(0);
          }, 1000);
        }
      });
    },

    // 编辑用户--获取行数据
    handleClick(row) {
      this.dialogFormVisible1 = true;
      console.log(row);
      const _this = this;
      _this.form1.username = row.username;
      _this.form1.gender = row.gender;
      _this.form1.identity = row.identity;
      _this.form1.password = row.password;
      _this.form1.mobile = row.mobile;
      _this.id = row.id;
    },

    //编辑表单提交
    submit() {
      setTimeout(() => {
        this.dialogFormVisible1 = false;
      }, 500);
      const _this = this;
      let postData = this.$qs.stringify({
        username: _this.form1.username,
        gender: _this.form1.gender,
        identity: _this.form1.identity,
        password: _this.form1.password,
        mobile: _this.form1.mobile
      });
      this.$axios({
        method: "put",
        url: "/api/users/" + _this.id + "/",
        data: postData
      }).then(function(response) {
        console.log(response);
        if (response.status == 200) {
          _this.dialogFormVisible = false;
          _this.$message({
            type: "success",
            message: "修改成功!"
          });
          setTimeout(() => {
            _this.$router.go(0);
          }, 1000);
        }
      });
    },

    // 用户删除
    handleClick1(row) {
      const _this = this;
      _this
        .$confirm("此操作将删除该用户的会员身份, 是否继续?", "提示", {
          closeOnClickModal: false,
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          // console.log("我点击了确认")
          _this.id = row.id;
          // console.log(_this.id)
          // let postData = this.$qs.stringify({
          // hid: _this.$cookie.getCookie("id"),
          // rank: 0,
          // id: row.id
          // });
          _this
            .$axios({
              method: "delete",
              // headers: { "Content-Type": "application/x-www-form-urlencoded" },
              url: "/api/users/" + _this.id + "/"
              // data: postData
            })
            .then(function(response) {
              console.log(response);
              if (response.status === 204) {
                _this.$message({
                  type: "success",
                  message: "删除成功!"
                });
                setTimeout(() => {
                  _this.$router.go(0);
                }, 500);
              } else {
                alert(response.data.msg);
              }
            })
            .catch(function(response) {
              // console.log(response);
            });
        })
        .catch(() => {
          _this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    // 禁用
    open() {}
  }
};
</script>

<style >
</style>
