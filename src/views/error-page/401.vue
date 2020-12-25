<template>
  <error-content :src="src" />
</template>

<script>
import error401 from '@/assets/images/error-page/error-401.png'
import errorContent from './error-content.vue'
export default {
  name: 'error-401',
  components: {
    errorContent
  },
  data () {
    return {
      src: error401
    }
  }
}
</script>
