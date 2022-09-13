<template>
  <HelloWorld :msg="msg"></HelloWorld>

</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  data () {
    return {
      msg: '子应用切换到Home路由'
    }
  }

}

</script>

<style scoped>

</style>
