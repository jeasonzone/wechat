<template>
  <div class="home">
    <Title title="发现"/>
    FOUND
    <Tab />
  </div>
</template>

<script>
import Tab from '@/components/Tab/index'
import Title from '@/components/Title/index'

export default {
  name: 'found',
  components: {
    Tab,Title
  }
}
</script>
