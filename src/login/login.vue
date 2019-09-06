<template>
  <div class="form-box">
    <p>中易智能相册管理系统</p>
    <el-form
      :model="loginForm"
      status-icon
      ref="loginForm"
      label-width="80px"
      class="demo-ruleForm"
    >
      <el-form-item label="登录名" prop="username">
        <el-input type="text" v-model="loginForm.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="password" v-model="loginForm.checkPass" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item class="btn-box">
        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import { mapState, mapMutations, Store } from "vuex";
export default {
  data() {
    return {
      loginForm: {
        username: "",
        checkPass: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const _this = this;
          let postData = this.$qs.stringify({
            username: _this.loginForm.username,
            password: _this.loginForm.checkPass
          });
          // console.log(postData);
          this.$axios({
            method: "post",
            url: "/api/login/",
            data: postData
          })
            .then(function(response) {
              // console.log(response),'=========00';
              if (response.status == 200) {
                _this.$cookie.setCookie("token", response.data["token"],7);
                _this.$cookie.setCookie("userid", response.data["user"]["id"]);
                // console.log(_this.$cookie.getCookie("token"))
                _this.changeName(response.data["user"]["username"]);
                
                // 把token存储到vuex里面 token绑定
                _this.$store.state.token = _this.$cookie.getCookie("token");
                _this.$store.state.userid = _this.$cookie.getCookie("userid");
              
                if (_this.$cookie.getCookie("token")) {
                  _this.$router.push({ path: "/home" });
                };
               
              }
              // console.log(get this.$cookie)
              // console.log(1111, response);
            })
            .catch(function(err) {
              console.log(err);
            });

          // alert('submit!');
        } else {
          console.log("error submit!!");
          return false;
        }
      })
    },
    ...mapMutations(["changeName"])
    ,
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>



<style scoped>
.form-box {
  width: 400px;
  height: 360px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 120px;
  background-color: #f8f8f8;
  box-shadow: 1px 1px 20px rgba(187, 187, 187, 0.4);
  padding-right: 40px;
}

.demo-ruleForm {
  padding-top: 20px;
}
.btn-box {
  margin-left: 70px;
  padding-top: 20px;
}
p {
  font-size: 25px;
  font-weight: bold;
  padding-top: 50px;
  margin-left: 100px;
}
</style>