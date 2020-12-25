<template>
  <div style="background-color: #ececec; padding: 20px;">
    <a-row :gutter="16" v-for="i in 10" :key="i">
      <a-col :span="8">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { getHouseTwoLevel } from '@/api'
export default {
  name: 'home',
  mounted () {
    getHouseTwoLevel().then(res => {
      console.log(res)
    })
  }
}

</script>
<style  lang='less' scoped>
</style>
