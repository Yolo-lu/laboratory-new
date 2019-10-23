<template>
  <div class="foot">
    <div id="link">RSS|源码地址</div>
    <div class="foot-1">
      CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。
    </div>
    <div class="foot-2">
      服务器赞助商为
      <img src="../../assets/9.png" alt="" class="img-1" /> ，存储赞助商为
      <img src="../../assets/10.png" alt="" class="img-2" />
      ，由 <img src="../../assets/12.png" alt="" class="img-3">提供应用性能服务。
    </div>
    <div class="foot-3">新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="">DigitalOcean(https://www.digitalocean.com/)</a></div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
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
.foot {
  margin: 20px 0;
  font-size: 14px;
  color: #ababab;
  #link {
    height: 26px;
    line-height: 26px;
    color: #385f8a;
  }
  .foot-2 {
    .img-1 {
      width: 96px;
      height: 17px;
    }
    .img-2{
      width: 115px;
      height: 44px;
    }
    .img-3{
      width: 116px;
      height: 54px;

    }
  }
  .foot-3{
    padding: 20px 0;
  }
}
</style>
