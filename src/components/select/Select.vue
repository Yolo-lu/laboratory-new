<template>
  <div class="wrap">
    <div class="title">
      <div class="left">
        <span class="title1" v-if="data[0]">{{data[0].classify_name}}  |</span>
        <span class="title2" v-if="data[0]">{{data[0].description}}</span>
      </div>
      <div class="right">更多></div>
    </div>
    <div class="box">
      <div class="box1">
        <div class="first">
          <img src="../../assets/bash.png" alt="">
        </div>
          <div class="up" v-if="data[0]">
            <div class="second" v-for="(item,index) in data[0].courses.slice(0,2)":key="index">
              <div class="course">
                <div class="top" >
                  <img :src="item.picture_url" alt="">
                </div>
                <div class="bottom">
                  <div class="name">{{item.name}}
                    <div class="text">{{item.description}}</div>
                  </div>
                  <div class="gift el-icon-star-on">{{item.students_count}}</div>
                </div>
              </div>
            </div>
          </div>
      </div>
     <div  class="down" v-if="data[0]">
       <div class="box2" v-for="(item,index) in data[0].courses.slice(2)":key="index">
         <div class="course">
           <div class="top"><img :src="item.picture_url" alt="">
             <div class="bottom">
               <div class="name" style="font-size: 16px">{{item.name}}</div>
               <div class="text">{{item.description}}</div>
               <div class="gift el-icon-star-on">{{item.students_count}}</div>
               <span v-if="item.fee_type==='member'">
                 <span class="member">会员</span>
               </span>
             </div>
           </div>
         </div>
       </div>
     </div>
    </div>
<!--    第二部分-->
    <div class="title">
      <div class="left">
        <span class="title1" v-if="data[1]">{{data[1].classify_name}}  |</span>
        <span class="title2" v-if="data[1]">{{data[1].description}}</span>
      </div>
      <div class="right">更多></div>
    </div>
    <div  class="down1 down">
      <swiper :options="swiperOption" class="near">
        <swiper-slide v-for="(item,index) in data[1].courses" :key="index">
            <div class="one">
              <img :src="item.picture_url" alt="">
              <div class="bottom">
                <div class="name" style="font-size: 16px">{{item.name}}</div>
                <div class="text">{{item.description}}</div>
                <div class="gift el-icon-star-on">{{item.students_count}}</div>
                <span v-if="item.fee_type==='bootcamp'">
               <span class="member" style="background: #FF6666" >训练营</span>
             </span>
              </div>
            </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
<!--    //第三部分-->
    <div class="title">
      <div class="left">
        <span class="title1" v-if="data[2]">{{data[2].classify_name}}  |</span>
        <span class="title2" v-if="data[2]">{{data[2].description}}</span>
      </div>
      <div class="right">更多></div>
    </div>
    <div  class="down">
      <div class="box2" v-for="(item,index) in data[2].courses.slice(0,4)":key="index">
        <div class="course">
          <div class="top"><img :src="item.picture_url" alt="">
            <div class="bottom">
              <div class="name" style="font-size: 16px">{{item.name}}</div>
              <div class="text">{{item.description}}</div>
              <div class="gift el-icon-star-on">{{item.students_count}}</div>
              <span v-if="item.fee_type==='bootcamp'">
                 <span class="member" >训练营</span>
               </span>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    第四部分-->
    <div class="title">
      <div class="left">
        <span class="title1" v-if="data[3]">{{data[3].classify_name}}  |</span>
      </div>
      <div class="right">更多></div>
    </div>
   <div class="four">
     <div class="left">
       <img :src="data[3].recommend_course.picture_url" alt="">
     </div>
     <div class="right">
       <div  class="down">
         <div class="box2" v-for="(item,index) in data[3].courses.slice(0,3)":key="index">
           <div class="course">
             <div class="top"><img :src="item.picture_url" alt="">
               <div class="bottom">
                 <div class="name" style="font-size: 16px">{{item.name}}</div>
                 <div class="text">{{item.description}}</div>
                 <div class="gift el-icon-star-on">{{item.students_count}}</div>
                 <span v-if="item.fee_type==='member'">
                 <span class="member">会员</span>
               </span>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div  class="down">
         <div class="box2" v-for="(item,index) in data[3].courses.slice(3)":key="index">
           <div class="course">
             <div class="top"><img :src="item.picture_url" alt="">
               <div class="bottom">
                 <div class="name" style="font-size: 16px">{{item.name}}</div>
                 <div class="text">{{item.description}}</div>
                 <div class="gift el-icon-star-on">{{item.students_count}}</div>
                 <span v-if="item.fee_type==='member'">
                 <span class="member">会员</span>
               </span>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
    <!--     第五部分-->
    <div class="title">
      <div class="left">
        <span class="title1" v-if="data[4]">{{data[4].classify_name}}  |</span>
      </div>
      <div class="right">更多></div>
    </div>
    <div class="four">
      <div class="left">
        <img :src="data[4].recommend_course.picture_url" alt="">
      </div>
      <div class="right">
        <div  class="down">
          <div class="box2" v-for="(item,index) in data[4].courses.slice(0,3)":key="index">
            <div class="course">
              <div class="top"><img :src="item.picture_url" alt="">
                <div class="bottom">
                  <div class="name" style="font-size: 16px">{{item.name}}</div>
                  <div class="text">{{item.description}}</div>
                  <div class="gift el-icon-star-on">{{item.students_count}}</div>
                  <span v-if="item.fee_type==='member'">
                 <span class="member">会员</span>
               </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div  class="down">
          <div class="box2" v-for="(item,index) in data[4].courses.slice(3)":key="index">
            <div class="course">
              <div class="top"><img :src="item.picture_url" alt="">
                <div class="bottom">
                  <div class="name" style="font-size: 16px">{{item.name}}</div>
                  <div class="text">{{item.description}}</div>
                  <div class="gift el-icon-star-on">{{item.students_count}}</div>
                  <span v-if="item.fee_type==='member'">
                 <span class="member">会员</span>
               </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: "Select",
    components: {

    },
    props: {},
    data() {
      return {
        data:[],
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 30,
          slidesPerGroup: 4,
          loop: true,
          loopFillGroupWithBlank: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    methods: {
      getCourse(){
        this.$axios.req("api/v2/index/classfication-courses").then(response=>{
          this.data=response
          console.log(this.data[0]);

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
  .wrap {
    width: 1130px;
    min-width: 1080px;
    margin: auto;
    img{
      /*height: 250px;*/
      display: block;
      width: 100%;
    }
    .title {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      .left {
        .title1 {
          color: #565656;
          font-size: 24px;
        }

        .title2 {
          color: #666;
          font-size: 14px;
          padding-left: 10px;
        }
      }

      .right {
        color: #666;
        font-size: 14px;
      }
    }
    .box{
      margin-top: 30px;
    }
    .box1{
      display: flex;
      justify-content: space-between;

      .first{
        flex: 1;
        margin-right: 15px;
        &:hover{
          box-shadow: 3px 3px 5px #cbc9c3;
        }
      }
      .up{
        flex: 1;
        display: flex;
        justify-content: space-between;
        margin-left: 15px;
      }
    }
    .second{
      flex: 1;
      &:first-child{
        margin-right: 30px;
      }
      &:hover {
        box-shadow: 3px 3px 5px #cbc9c3;
        .text{
          display: block !important;
        }
        .bottom {
          position: relative;
          top: -48px;
          background: white;
        }
      }
      .course{
        border: 1px solid #999999;
      }
      &:first-child{
        margin-left: 0;
      }
      .top{

        img{
          width: 100%;
          display: block;
        }
      }
    }
    .bottom{
      height: 100px;
      .name{
        color: #666;
        font-size: 18px;
        padding: 12px;
        /*width: 85%;*/
        /*text-overflow: ellipsis;*/
        overflow: hidden;
        /*white-space: nowrap;*/
      }
    }
    .gift{
      font-size: 12px;
      color: #9b9da2;
      padding-left: 12px;
      height: 54px;
      line-height: 54px;
      z-index: 99;
    }
    .text{
      margin-top: 10px;
      color: rgb(102, 102, 102);
      font-size: 13px;
      height: 48px;
      line-height: 16px;
      display: none;
      overflow: hidden;
    }
    .down{
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      .box2{
        flex: 1;
        margin-left: 30px;
        border: 1px solid #999999;
        &:hover {
          box-shadow: 3px 3px 5px #cbc9c3;
          .text{
            display: block !important;
          }
          .bottom {
            position: relative;
            width: 250px;
            top: -60px;
            background: white;
          }
        }

        &:first-child {
          margin-left: 0;
        }
        .course{
          overflow: hidden;
          .top{
            img{
              display: inline-block;
              width: 100%;
              overflow: hidden;
            }
          }
          }
        }
      }
    .member{
      display: inline-block;
      width: 50px;
      height: 20px;
      background: #FFC500;
      text-align: center;
      border-radius: 10px;
      color: white;
      margin-left: 140px;
    }
    .down1{
      width: 100%;
      &:hover{
        .swiper-button-prev,.swiper-button-next{
          display: block;
        }
      }
    }
    .four{
      display: flex;
      justify-content: space-between;
      .left{
        flex: 1;
        margin:20px 15px 0 0;
        &:hover{
          box-shadow: 3px 3px 5px #cbc9c3;
        }
        img{
          height: 515px;
        }
      }
      .right{
        flex: 3;
        /*display: flex;*/
        /*justify-content: space-between;*/
        margin-left: 15px;
      }
    }
    .near{
      margin-top: 20px;
      .one{
        border: 1px solid #999999;
        &:hover{
          box-shadow: 3px 3px 5px #cbc9c3;
          .text{
            display: block !important;
          }
          .bottom {
            position: relative;
            top: -60px;
            background: white;
          }
        }
      }
    }
    .swiper-button-prev,.swiper-button-next{
      font-size: 14px;
      display: none;
    }
  }
</style>