<template>
  <div class="home">
    <Title title="我"/>
    ME
    <Tab />
  </div>
</template>

<script>
import Tab from '@/components/Tab/index'
import Title from '@/components/Title/index'

export default {
  name: 'me',
  components: {
    Tab,Title
  }
}
</script>
