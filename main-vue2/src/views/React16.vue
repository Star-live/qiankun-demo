<template>
  <iframe title="react16 micro app" :src="react16Url" width="100%" height="100%"></iframe>
</template>

<script>
export default {
  name: 'React16',
  data () {
    return {
      react16Url: 'http://localhost:7300/'
    }
  }
}
</script>

<style scoped></style>
