<template>
  <div class="home">
    <Title title="微信" RT="iconfont icon-21"/>
    HOME
    <Tab />
  </div>
</template>

<script>
import Tab from '@/components/Tab/index'
import Title from '@/components/Title/index'
export default {
  name: 'home',
  components: {
    Tab,
    Title
  }
}
</script>
