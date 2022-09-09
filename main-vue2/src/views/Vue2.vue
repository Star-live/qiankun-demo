<template>
  <iframe title="vue2 micro app" :src="vue2Url" width="100%" height="100%"></iframe>
</template>

<script>
export default {
  name: 'Vue2',
  data () {
    return {
      vue2Url: 'http://localhost:7100/'
    }
  }
}
</script>

<style scoped></style>
