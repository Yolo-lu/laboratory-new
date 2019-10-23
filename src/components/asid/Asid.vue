<template>
  <div>
    <div id="log">
      <p class="top-1">CNode：Node.js专业中文社区</p>
      <div class="top-2">您可以 登录 或 注册 , 也可以</div>
      <el-button type="primary" @click="login()">通过GitHub登录</el-button>
    </div>
    <div id="ad">
      <div><img src="../../assets/1.jpg" alt="" /></div>
      <div><img src="../../assets/2.jpg" alt="" /></div>
      <div><img src="../../assets/3.jpg" alt="" /></div>
    </div>
    <div id="topic">
      <div class="title">无人回复的话题</div>
      <div class="item">
        <div>想快速掌握node开发的来</div>
        <div>请问node-xlsx解析excel空行数据为空数组怎么回事呀？</div>
        <div>发现一个用node.js做的后台权限管理框架</div>
        <div>请问有谁了解 VuePress JAMStack Headless cms 么</div>
        <div>RabbitMQ 消费端服务限流实践</div>
      </div>
    </div>
    <div id="topic">
      <div class="title">积分榜  TOP 100  >></div>
      <div class="item">
        <div>21725 <span>I5TING</span></div>
        <div>15650 <span>alsotang</span></div>
        <div>9350 <span>leapon</span></div>
        <div>9030 <span>atian25</span></div>
        <div>8780 <span>jiyinyiyong</span></div>
        <div>7305 <span>yakczh</span></div>
        <div>6815 <span>im-here</span></div>
        <div>6095 <span>DevinXian</span></div>
        <div>5815 <span>chapgaga</span></div>
        <div>5350 <span>magicdawn</span></div>
      </div>
    </div>
    <div id="topic">
      <div class="title">友情社区</div>
      <div class="item">
        <div class="photo"><img src="../../assets/4.png" alt=""></div>
        <div class="photo"><img src="../../assets/5.png" alt=""></div>
        <div class="photo"><img src="../../assets/6.png" alt=""></div>
        <div class="photo"><img src="../../assets/8.png" alt=""></div>
      </div>
    </div>
    <div id="topic">
      <div class="title">客户端二维码</div>
      <div class="erweima"><img src="../../assets/11.png" alt=""></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Asid",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    login(){
      this.$router.push({name:'login'})
    }
  },

  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#log {
  width: 230px;
  margin: 10px;
  font-size: 14px;
  background: white;
  padding: 10px;
  .top-1 {
    height: 26px;
    margin-bottom: 10px;
  }
  .top-2 {
    margin-bottom: 10px;
  }
}
#ad {
  margin: 10px;
  padding: 10px;
  background: white;
  img {
    width: 230px;
    height: 65px;
    padding: 5px 0;
  }
}
#topic {
  font-size: 14px;
  width: 230px;
  margin: 10px;
  background: white;
  padding-left: 10px;
  .title {
    background: #f6f6f6;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
  }
  .item {
    div {
      height: 30px;
      line-height: 30px;
      width: 230px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .photo{
      height: 55px;
    }
  }
  span{
    padding-left: 20px;
  }
  img{
    width: 150px;
    height: 50px;
  }
  .erweima img{
    width: 200px;
    height: 200px;
    margin: 10px;
  }
}
</style>
