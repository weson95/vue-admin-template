<template>
  <div>
    <a-button size="large" type="link" @click="backHome">返回首页({{ second }}s)</a-button>
    <!-- <Button size="large" type="text" @click="backPrev">返回上一页</Button> -->
  </div>
</template>

<script>
import './error.less'
export default {
  name: 'backBtnGroup',
  data () {
    return {
      second: 5,
      timer: null
    }
  },
  methods: {
    backHome () {
      this.$router.replace({
        name: 'home'
      })
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      if (this.second === 0) this.backHome()
      else this.second--
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>
