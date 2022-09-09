<template>
  <iframe title="vue3 micro app" :src="vue3Url" width="100%" height="100%"></iframe>
</template>

<script>
export default {
  name: 'Vue3',
  data () {
    return {
      vue3Url: 'http://localhost:7200/'
    }
  }
}
</script>

<style scoped></style>
