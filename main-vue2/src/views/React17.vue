<template>
  <iframe title="react17 micro app" :src="react17Url" width="100%" height="100%"></iframe>
</template>

<script>
export default {
  name: 'React17',
  data () {
    return {
      react17Url: 'http://localhost:7400/'
    }
  }
}
</script>

<style scoped></style>
