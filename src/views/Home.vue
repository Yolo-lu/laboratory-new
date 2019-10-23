<template>
  <div class="home">
    <el-card class=" el__card__title">
      <div class="title" slot="header">
        <div v-for="(item, index) in list" :key="index">
          <div>
            <el-tag type="success">{{ item.name }}</el-tag>
          </div>
        </div>
      </div>

      <div v-for="item in now.slice(
        pages*(pageNumber-1),
        pages*pageNumber
        )" :key="item.id">
        <div class="row" style="height: 50px">
          <div class="left">
            <div class="left-1">
              <img :src="item.author.avatar_url" alt="" />
            </div>
            <div class="left-2">
              <span class="num1">{{ item.reply_count }}</span
              >/ <span class="num2">{{ item.visit_count }}</span>
            </div>
            <div class="left-3">
              <div class="box" v-if="item.top === true">置顶</div>
              <div class="box box-new" v-else-if="item.tab === 'share'">
                分享
              </div>
              <div class="box box-new" v-else-if="item.tab === 'ask'">问答</div>
            </div>
            <div class="left-4" @click="getDetail(item)">
              {{ item.title }}
            </div>
          </div>
          <div class="right">
            <div v-if="item.day">{{ item.day }}天前</div>
            <div v-else-if="item.min">{{ item.min }}分钟前</div>
            <div v-else>{{ item.hours }}小时前</div>
          </div>
        </div>
      </div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNumber"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="now.length"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
// @ is an alias to /src
import { Loading } from 'element-ui';
export default {
  name: "home",
  components: {
    // Detail
  },
  data() {
    return {
      list: [
        { id: 1, name: "全部" },
        { id: 2, name: "精华" },
        { id: 3, name: "分享" },
        { id: 4, name: "问答" },
        { id: 4, name: "招聘" },
        { id: 4, name: "客户端问答" }
      ],
      now: [],

      pages:10,
      pageNumber:1
    };
  },
  methods: {
    getNow() {
      this.$axios
        .req("api/topics")
        .then(response => {
          this.now = response.data;
          console.log(response);
          this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
            this.loadingInstance.close();
          });
          let nowTime = Date.now(); /*获取当前时间戳*/
          // console.log(nowTime);
          this.now.map(item => {
            let difference =
              nowTime -
              this.$dayjs(item.last_reply_at).valueOf(); /*将时间转换为时间戳*/
            let time = difference / 1000 / 60 / 60;
            if (time < 1) {
              let min = Math.floor(time * 60);
              this.$set(item, "min", min);  /*创建属性*/
            } else if (time > 24) {
              let day = Math.ceil(time / 24);
              this.$set(item, "day", day);
            } else {
              let hours = Math.floor(time);
              this.$set(item, "hours", hours);
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleSizeChange(val) {
      this.pages=val;
    },
    handleCurrentChange(val) {
      this.pageNumber=val;
    },
    getDetail(data){
      this.$router.push({name:'detail',query:{id:data.id}})   /*含有参数的路由跳转*/
    }
  },
  filters: {},
  mounted() {
    this.getNow();
    this.loadingInstance=Loading.service({
      text: "加载中,敬请期待..."
    });
  }
};
</script>
<style scoped lang="scss">
.title {
  display: flex;
  justify-content: start;
}
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background: #eee;
  }
  .left {
    display: flex;
  }
}
.left-1 img {
  width: 30px;
  height: 30px;
  margin: 0 5px;
}
.left-2 {
  width: 70px;
  font-size: 12px;
  line-height: 32px;
  margin: 0 5px;
  .num1 {
    color: #9e78c0;
  }
  .num2 {
    color: #b4b4b4;
  }
}
.left-3 {
  margin: 0 5px;
  .box {
    width: 32px;
    height: 18px;
    background: #80bd01;
    padding: 2px;
    color: white;
    border-radius: 3px;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
  }
  .box-new {
    background-color: #e5e5e5;
    color: #999;
  }
}
.left-4 {
  margin: 0 5px;
  color: #888;
  width: 630px;
  line-height: 32px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap; /*超出部分显示省略号*/
  &:hover {
    text-decoration: underline;
  }
}
</style>
