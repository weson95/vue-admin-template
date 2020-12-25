<template>
  <div class="error-page">
    <div class="content-con">
      <img :src="src">
      <back-btn-group class="back-btn-group"></back-btn-group>
    </div>
  </div>
</template>

<script>
import './error.less'
import backBtnGroup from './back-btn-group.vue'
export default {
  name: 'error_content',
  components: {
    backBtnGroup
  },
  props: {
    src: String
  }
}
</script>
