<template>
  <a-layout-content class="content">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cacheList">
        <router-view :key="$route.fullPath" />
      </keep-alive>
    </transition>
    <!-- <a-layout-footer style="textAlign: center">
      CopyRight ©2019 Created by XXX
    </a-layout-footer> -->
  </a-layout-content>
</template>

<script>
export default {
  name: 'MainView',
  computed: {
    tagNavList () {
      return this.$store.getters.tagNavList
    },
    cacheList () {
      const list = [...this.tagNavList.length ? this.tagNavList.filter(item => !(item.meta && item.meta.notCache)).map(item => item.name) : []]
      return list
    }
  },
  created () {
    this.$store.dispatch('app/setHomeRoute')
  }
}

</script>
<style  lang='less' scoped>
.content {
  padding: 24px 16px 0;
  height: calc(100vh - 100px);
  overflow: auto;
}
</style>