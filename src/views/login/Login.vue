<template>
  <div>
    <div id="login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="请输入用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="请输入密码" prop="password">
          <el-input type="password" v-model="ruleForm.password">
          </el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: "Login",
    components: {},
    props: {},
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
      },
        rules: {
          // name: [
          //   { required: true, message: '请输入用户名', trigger: 'blur' },
          //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          // ],
    },
    methods: {

    },

    mounted() {

    },
    created() {

    },
    filters: {},
    computed: {},
    watch: {},
    directives: {}
  }
</script>

<style scoped lang="scss">

</style>