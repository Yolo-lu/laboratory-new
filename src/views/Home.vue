<template>
  <div style="background: #F9F9F9">
    <div class="head">
      <div class="left">
        <div class="logo"><img src="../assets/logo.svg" alt=""></div>
        <div class="text">做实验，学编程</div>
      </div>
    <div class="right">
      <div class="modle">
        <span>企业版</span><span>|</span><span>学校版</span>
      </div>
      <div class="login">登录</div>
      <div class="register">注册</div>
    </div>
    </div>
    <div class="menu-list">
      <div class="left">
        <div class="box">
          <i class="el-icon-s-grid"></i>
          <span>全部课程</span>
        </div>
        <div class="item">
          <div class="first">路径</div>
          <div class="first">训练营</div>
          <div class="first">楼+</div>
          <div class="first">会员
            <img src="../assets/hot.svg" alt="">
          </div>
          <div class="first "  @mouseenter="enter()" @mouseleave="leave()">社区
            <i class="el-icon-caret-bottom"></i>
            <div class="manu" v-if="index===1">
              <div class="second">讨论</div>
              <div class="second">教程库</div>
              <div class="second">直播</div>
              <div class="second">比赛</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <el-input v-model="input" placeholder="搜索课程/问答" suffix-icon="el-icon-search"></el-input>

      </div>
    </div>
   <div class="container" >
     <div class="block">
       <div class="top">
         <div class="text" v-for="(item,index) in data1" :key="index">
           <div class="left" >
             <span class="course">{{item.name}}</span>
             <span class="text1" v-for="(item1,index1) in item.tags" :key="index1">
           <span class="course1" v-if="index1<2">{{item1.name}}</span>
           </span>
           </div>
             <div class="right">
               <span class="title1">{{item.name}}</span>
               <div class="text1">
               <span v-for="(item1,index1) in item.tags" :key="index1">
                 <span class="value">| {{item1.name}}</span>
               </span>
               </div>
               <span class="title1">课程推荐</span>
               <div class="text1">
                 <div v-for="(item2,index2) in item.recommend_courses" :key="index2">
                   <div class="value"> {{item2.name}}</div>
                 </div>
               </div>
             </div>
         </div>
         <span class="bottom">经管专区</span>
       </div>
       <el-carousel height="515px">
         <el-carousel-item v-for="(item,index) in data" :key="index">
           <div><img :src="item.picture_url" alt=""></div>
         </el-carousel-item>
       </el-carousel>



     </div>
   </div>
    <building></building>
    <selectCourse></selectCourse>
  </div>
  
</template>

<script>
  import building from "../components/building/Building"
  import selectCourse from "../components/select/Select"
  export default {
    name: "Home",
    components: {
      building,
      selectCourse
    },
    props: {},
    data() {
      return {
        index:0,
        input:'',
        data:[],
        data1:[],
      }
    },
    methods: {
      enter(){
        this.index=1
      },
      leave(){
        this.index=0
      },
      getBanner(){
        this.$axios.req("api/v2/index/banner-pictures/").then(response =>{
          this.data=response
        }).catch(err=>{
          console.log(err);
        })
      },
      getCourse(){
        this.$axios.req("api/v2/index/categories").then(response =>{
          this.data1=response
          // console.log(this.data1);
        }).catch(err=>{
          console.log(err);
        })
      },
    },

    mounted() {
      this.getBanner();
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
  .head {
    width: 1130px;
    min-width: 1080px;
    height: 72px;
    padding: 0 5px 20px 5px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    .left{
      display: flex;
      .logo {
       margin-top: 15px;
        height: 50px;
        width: 123px;
        line-height: 72px;
      }
      .text{
        vertical-align: -2px;
        font-size: 18px;
        color: #274a59;
        line-height: 72px;
      }
    }
  .right{
    display: flex;
    .modle{
      padding: 0 6px;
      color: #999;
      line-height: 72px;
      span{
        padding: 0 6px;
      }
      span:hover{
        color: #08bf91;
      }
    }
    .login{
      line-height: 72px;
      color: #08bf91;
      padding: 0 25px;
    }
    .register{
      width: 82px;
      height: 48px;
      line-height: 48px;
      background:#08bf91 ;
      color: white;
      text-align: center;
      margin-top: 15px;
    }
  }

  }
  .menu-list{
    margin: auto;
    width: 1130px;
    min-width: 1080px;
    display: flex;
    justify-content: space-between;
    background: white;
    .left{
      display: flex;
      .box{
        width: 260px;
        height: 64px;
        background: #08BF91;
        .el-icon-s-grid{
          color: white;
          line-height: 64px;
          width: 16px;
          height: 16px;
          padding-left: 20px;
        }
        span{
          color: white;
          line-height: 64px;
          padding-left: 5px;
        }
      }
      .item{
        display: flex;
        line-height: 64px;
        div{
          padding: 0 18px;
          font-size: 16px;
          img{
            position: relative;
            top: -10px;
          }
        }
        .first:hover{
          color: #08bf91;
          cursor: pointer;
        }
      }
      .manu{
        width: 140px;
        font-size: 16px;
        line-height: 1.5;
        color: #212529;
        position: absolute;
        top: 155px;
        left: 660px;
        z-index: 99;
        background: white;
        color: #212529;
        div{
          padding: 10px 0;
        }
        .second:hover{
          width: 100%;
          color: #08bf91;
          background: #F9F9F9;
        }
      }
    }
    .right{
      line-height: 64px;
    }
  }
 .container {
    display: flex;
  margin-bottom:30px ;
   .bottom{
     color: white;
     border: 1px solid #bcbcbc;
     border-radius: 10px;
     margin: 0 90px;
     padding: 5px 10px;
     line-height: 50px;
     &:hover{
       background: white;
       color: #666;
     }
   }
   .block {
     width: 1130px;
     min-width: 1080px;
     margin: auto;
     .top{
       position: absolute;
       z-index: 99;
     }
   }
   .text {
     z-index: 99;
     position: relative;
     color: white;
     border-bottom: 1px solid #bcbcbc;
     &:hover{
       background: white;
       color: #212529;
       .right {
         display: block;
       }
     }
     .left{
       width: 260px;
     }
     .right {
       display: none;
       position: absolute;
       background: white;
       left: 260px;
       width: 300px;
       top: 0;
       .title1{
         background:#eee;
         margin: 20px;
         height: 25px;
         line-height: 25px;
         color: #666;
         font-size: 12px;
         padding: 5px;
         text-align: center;
         border-radius: 3px;
       }
       .text1{
         margin: 20px;
       }
       .value{
         line-height: 25px;
         color: #666;
         font-size: 12px;
         padding: 10px 20px 0 0;
         &:hover{
           color: #08BF91;
           cursor: pointer;
         }
       }
     }

     .course {
       margin-left: 10px;
       height: 58px;
       line-height: 58px;
       &:hover{
         color: #08BF91;
         cursor: pointer;
       }
     }
     .course1{
       font-size: 12px;
       margin-left: 10px;
       &:hover{
         color: #08BF91;
         cursor: pointer;
       }

     }
   }
 }
</style>