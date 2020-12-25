<template>
  <error-content :src="src" />
</template>

<script>
import error404 from '@/assets/images/error-page/error-500.png'
import errorContent from './error-content.vue'
export default {
  name: 'error-500',
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
