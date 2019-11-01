<template>
  <div class="all">
    <div id="login">
      <el-card>
        <div slot="header">
          <div class="title">欢迎来到cnode社区</div>
        </div>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item label="请输入用户名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="请输入密码" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="请确认密码" prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <div class="button">
            <el-button type="primary" @click="submitForm('ruleForm')"
              >立即登录</el-button
            >
          </div>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  props: {},
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur", required: true }],
        checkPass: [
          { validator: validatePass2, trigger: "blur", required: true }
        ],
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.state.username = this.ruleForm.name; /*将用户名存入state中*/
          localStorage.setItem("username",JSON.stringify({username:this.ruleForm.name})) /*将用户名存入本地*/
          this.$router.push("/home"); /*跳转*/
          this.$message({
            showClose: true,
            message: `欢迎${this.ruleForm.name}登录cnode社区`,
            type: "success"
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {

  },
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.all {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  text-align: center;
}
#login {
  width: 420px;
  margin: auto;
  padding: 20px;
}
.button {
  display: flex;
  justify-content: center;
}
</style>
