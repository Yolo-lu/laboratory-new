<template>
  <div class="wrap">
    <div class="title">
      <div class="left">
        <span class="title1">楼+战课程  |</span>
        <span class="title2">定期开班，导师助教全程辅导，最快最优成长</span>
      </div>
      <div class="right">更多></div>
    </div>
    <div class="box">
      <div class="box1" v-for="(item,index) in data" :key="index">
        <div class="box2" v-if="index<4">
          <div class="=top"><img :src="item.picture_url" alt=""></div>
          <div class="bottom">
            <div class="bottom1">{{item.title}}</div>
            <div class="bottom2">最近班次：{{item.open_time}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: "Building",
    components: {},
    props: {},
    data() {
      return {
        data:[]
      }
    },
    methods: {
      getCourse(){
        this.$axios.req("api/v2/index/louplus").then(response=>{
          this.data=response
          // console.log(this.data);
        }).catch(err=>{
          console.log(err);
        })
      }
    },

    mounted() {
      this.getCourse()
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
.wrap{
  width: 1130px;
  min-width: 1080px;
  margin: auto;
  .title{
    display: flex;
    justify-content: space-between;
    .left{
      .title1{
        color: #565656;
        font-size: 24px;
      }
      .title2{
        color: #666;
        font-size: 14px;
        padding-left: 10px;
      }
    }
    .right{
      color: #666;
      font-size: 14px;
    }
  }
  .box{
    width: 100%;
    display: flex;
    justify-content: space-between;

    .box1{
      box-sizing: border-box;
      flex: 1;
      margin-top: 30px;
      margin-left: 12px;
      &:first-child{
        margin-left: 0;
      }
      .box2{

        border: 1px solid #999999;
        border-radius: 8px;
        img{
          width: 270px;
          height: 90px;
          display: inline-block;
           border-radius: 8px 8px 0 0;
        }
        .bottom{

          .bottom1{
            color: #565656;
            font-size: 18px;
            padding: 10px;
          }
          .bottom2{
            font-size: 16px;
            color: #a4a4a4;
            padding: 10px;
          }
        }
      }
    }
  }
}
</style>