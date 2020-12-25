<template>
  <a-layout id="components-layout-demo-responsive">
    <sider ref="sider" :collapsed="collapsed" v-if="themeStyle.layout==='sidemenu'" />
    <a-layout class="">
      <header-bar ref="header">
        <a-icon slot="trigger" class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="()=> collapsed = !collapsed" />
      </header-bar>
      <tags-bar />
      <main-view />
      <setting-style />
    </a-layout>
  </a-layout>
</template>
<script>
import { mapGetters } from 'vuex'
import { localRead } from '@/util'
import { Sider, MainView, HeaderBar, TagsBar, SettingStyle } from './components'
export default {
  name: 'Layout',
  components: {
    Sider,
    MainView,
    HeaderBar,
    TagsBar,
    SettingStyle
  },
  data () {
    return {
      collapsed: false
    }
  },
  computed: {
    ...mapGetters(['themeStyle'])
  },
  watch: {
    '$route' (newRoute) {
      const { name, query, params, meta } = newRoute
      this.$store.dispatch('app/addTagNavList', { name, query, params, meta })
      if (this.themeStyle.layout === 'sidemenu') {
        this.$refs.sider.updateMenu()
      } else {
        this.$refs.header.updateMenu()
      }
    }
  },
  created () {
    if (localRead('theme') !== '') {
      this.$store.dispatch('style/setStyleFromLocal', JSON.parse(localRead('theme')))
    }
  }
}
</script>

<style lang="less" scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
</style>
