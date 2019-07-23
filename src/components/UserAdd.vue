<template>
  <div class="form-container">
      <h3>新增用户</h3>
    <el-form ref="form" :model="form" label-width="80px" label-position="left">
      <el-form-item label="姓名">
        <el-input v-model="form.name" style="width:320px;"></el-input>
      </el-form-item>
      <el-form-item label="身份">
        <el-select v-model="form.region" placeholder="请选择身份">
          <el-option label="美工" value="meigong"></el-option>
          <el-option label="管理员" value="guanliyuan"></el-option>
        </el-select>
      </el-form-item>

      
      <el-form-item label="密码" prop="pass" style="width:400px;">
        <el-input type="password" v-model="form.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass" style="width:400px;">
        <el-input type="password" v-model="form.checkPass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.desc" style="width:500px;"></el-input>
      </el-form-item>



      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
        <el-button @click="resetForm('form')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>



<style scoped>
.form-container{
    margin-left: 100px;
    margin-top: 60px;
    
}
</style>


<script>
export default {
  data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form.checkPass !== '') {
            this.$refs.form.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        pass:'',
        checkpass:'',

        type: [],
        resource: "",
        desc: ""
      },
      rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]}
    };
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
};
</script>








