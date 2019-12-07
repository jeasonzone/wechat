<template>
  <div id="footer">
    <ul>
      <router-link tag="li" to="/home">
        <i class="iconfont icon-icon-"></i>
        <p>微信</p>
      </router-link>
      <router-link tag="li" to="/linkman">
        <i class="iconfont icon-tongxunlu"></i>
        <p>联系人</p>
      </router-link>
      <router-link tag="li" to="/found">
        <i class="iconfont icon-faxian"></i>
        <p>发现</p>
      </router-link>
      <router-link tag="li" to="/me">
        <i class="iconfont icon-meh"></i>
        <p>我</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tab"
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 50px;
  background: rgb(247, 245, 245);
  border-top: 0.8px #ebe8e3 solid;
  position: fixed;
  left: 0;
  bottom: 0;
}
#footer ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
#footer ul li {
  flex: 1;
  height: 40px;
  font-size: 12px;
  color: #000;
}
#footer ul li.router-link-active{ color: #1ce04d;}
</style>