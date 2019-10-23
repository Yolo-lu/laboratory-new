<template>
  <div>
    <el-container>
      <el-header>

        <Head></Head>
      </el-header>
      <el-container style="background: #E1E1E1">
        <el-main ><router-view></router-view></el-main>
        <el-aside width="270px">
          <Aside></Aside>
          <div class="back" v-if="btnFlag">
            <img  class="go-top" src="../../assets/back.svg" @click="backTop">
            <div class="text">
              <div>回</div>
              <div>到</div>
              <div>顶</div>
              <div>部</div>
            </div>

          </div>
        </el-aside>
      </el-container>
      <el-footer><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script>
  import Head from '../../components/head/Head';
  import Aside from '../../components/asid/Asid';
  import Footer from '../../components/footer/Footer'
export default {
  name: "Structrue",
  components: {
    Head,
    Aside,
    Footer
  },
  props: {},
  data() {
    return {
      btnFlag:""
    };
  },
  methods: {
    backTop () {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
      const that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 40) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    }
  },

  mounted() {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },

  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
  .el-header {
    background-color: #444;
    color: #333;
    line-height: 50px;

  }

  .el-aside {
    color: #333;
    width: 270px;
    padding-top:10px ;

  }

  .el-main {

  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .back{
    width: 30px;

    position: fixed;
    right: 5px;
    top: 300px;
    img{
      width: 30px;
      height: 30px;
  }
    .text div{
      text-align: center;
    }
  }
</style>
