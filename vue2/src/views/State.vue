<template>
  <div id="state-container">
    <HelloWorld :msg="msg"></HelloWorld>
    <div id="counter-container">
      <button @click="onSub">-</button>
      <span class='num'>{{count}}</span>
      <button @click="onAdd">+</button>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  data () {
    return {
      count: 10,
      msg: '子应用切换到state路由'
    }
  },
  methods: {
    onAdd  () {
      this.count = this.count + 1
    },
    onSub () {
      this.count = this.count - 1
    }
  }
}
</script>

<style scoped>
.num {
  margin: 0 15px;
  font-size: 30px;
}
button {
  text-align: center;
  font-size: 30px;
  width: 40px;
  height: 40px;
}
</style>
