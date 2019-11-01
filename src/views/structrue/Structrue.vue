<template>
  <div>
    <div class="head">
      <div class="logo"><img src="../../assets/logo.svg" alt=""></div>
      <div class="item">

      </div>

    </div>
  </div>
  
</template>

<script>
  export default {
    name: "Structrue",
    components: {},
    props: {},
    data() {
      return {
        activeIndex:1
      }
    },
    methods: {},

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
.head {
  width: 1130px;
  height: 72px;
  padding: 0 5px;
  margin: auto;
  display: flex;

  .logo {
    height: 50px;
    width: 123px;
  }
}
</style>