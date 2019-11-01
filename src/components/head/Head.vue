<template>
  <div class="box">
  <div class="left">
    <img src="../../assets/cnode.svg" alt="" @click="skip">
    <div class="demo-input-suffix el__input__text">
      <el-input
          placeholder="请输入内容"
          v-model="input4">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
  </div>
    <div class="right">
        <div class="item" label="首页" name="1">首页</div>
        <div class="item" label="新手入门" name="2">新手入门</div>
        <div class="item" label="API" name="3">API</div>
        <div class="item" label="关于" name="4">关于</div>
        <div class="item" label="注册" name="5">注册</div>
        <div class="item" label="登录" name="6" @click="log()">登录</div>
        <div class="item" label="退出登录" name="7" @click="exit()">退出登录</div>
    </div>


  </div>


  
</template>

<script>
  export default {
    name: "Head",
    components: {},
    props: {},
    data() {
      return {
        input4: '',
        activeName:''
      }
    },
    methods: {
      skip(){
        this.$router.push("/home");  /*点击图片跳转*/
      },
      log(){
        this.$router.push("/login");  /*点击图片跳转*/
      },
      exit(){
        this.$store.state.username="";    /*退出登录*/
        localStorage.removeItem("uername")
      }

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

  .box{
    width:1214px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  img{
    width: 120px;
    height: 50px;

  }
  .demo-input-suffix{
    margin-left: 20px;

  }
.left{
  width: 600px;
  display: flex;
}
  .right{
    display: flex;
    justify-content: start;
    .item{
      margin-right: 15px;
      color:#ccc;
      height: 20px;
      font-size: 14px;
    }
  }
</style>