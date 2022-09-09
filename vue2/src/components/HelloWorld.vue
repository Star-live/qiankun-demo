<template>
  <div class="hello">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <h1>当前为vue2应用</h1>
    <h2 class="vue-title">{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.hello {
  text-align: center;
  margin-bottom: 50px;
}

img {
  width: 200px;
  height: 200px;
}

h1 {
  margin: 15px 0;
}

.vue-title {
  color: seagreen;
}
</style>
