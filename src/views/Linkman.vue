<template>
  <div class="home">
    <Title title="联系人" RT="iconfont icon-jiaren"/>
    Linkman
    <Tab />
  </div>
</template>

<script>
import Tab from '@/components/Tab/index'
import Title from '@/components/Title/index'

export default {
  name: 'linkman',
  components: {
    Tab,Title
  }
}
</script>
