<template>
  <div id="header">
    <span class="header-title">{{title}}</span>
    <i :class="RT"></i>
  </div>
</template>

<script>
export default {
  name: "title",
  props: {
    title: {
      type: String,
      default: "wechat"
    },
    RT:{
      type:String,
      default:""
    }
  }
};
</script>
<style scoped>
#header {
  height: 60px;
  width: 100%;
  background: rgb(241, 238, 238);
  text-align: center;
  line-height: 60px;
  position: relative;
  padding-right:-19px;
}
#header .header-title {
  font-weight: 700;
}
#header i {
  position:absolute;
  right:0;
  font-size: 24px;
}
</style>