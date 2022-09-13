<template>
  <div>
    <HelloWorld :msg="msg"></HelloWorld>
    <el-button @click="dialogVisible = true">点击打开对话框</el-button>
    <el-dialog title="提示" v-model="dialogVisible" width="30%">
      <span>这是一段信息提示</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </template>
    </el-dialog>
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
      dialogVisible: false,
      msg: '子应用切换到Dialog路由'
    }
  }

}

</script>

<style scoped>

</style>
