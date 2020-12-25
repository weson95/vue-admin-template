<template>
  <error-content :src="src" />
</template>

<script>
import error404 from '@/assets/images/error-page/error-404.png'
import errorContent from './error-content.vue'
export default {
  name: 'error-404',
  components: {
    errorContent
  },
  data () {
    return {
      src: error404
    }
  }
}
</script>
