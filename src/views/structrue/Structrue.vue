<template>
  <div>
    <el-container>
      <el-header>
        <Head></Head>
      </el-header>
      <el-container style="background: #E1E1E1">
        <el-main ><router-view></router-view></el-main>
        <el-aside width="270px"><Aside></Aside></el-aside>
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
    return {};
  },
  methods: {},

  mounted() {},
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
</style>
