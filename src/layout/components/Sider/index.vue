<template>
  <a-layout-sider v-model="collapsed" :class="['sider',themeStyle.theme]" breakpoint="lg" :trigger="null" width="256px" collapsible>
    <div :class="['logo',themeStyle.theme,themeStyle.layout]">
      <img :src="logo" alt="logo">
      <h1>Vue Admin</h1>
    </div>
    <sider-menu ref="menu" :collapsed="collapsed" />
  </a-layout-sider>
</template>

<script>
import { mapGetters } from 'vuex'
import logo from '@/assets/images/logo.svg'
import SiderMenu from './SiderMenu.vue'
export default {
  name: 'Sider',
  components: {
    SiderMenu
  },
  props: ['collapsed'],
  data () {
    return {
      logo,
      collapse: false
    }
  },
  computed: {
    ...mapGetters(['themeStyle'])
  },
  methods: {
    updateMenu () {
      this.$refs.menu.updateMenu()
    }
  }
}

</script>
<style  lang='less' scoped>
.sider {
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  z-index: 99;
  .logo {
    position: relative;
    height: 64px;
    padding-left: 24px;
    overflow: hidden;
    line-height: 64px;
    background: #002140;
    transition: all 0.3s;
    img {
      width: 32px;
      height: 32px;
    }
    h1 {
      color: #fff;
      font-size: 20px;
      margin: 0 0 0 25px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      font-weight: 600;
      vertical-align: middle;
      display: inline-block;
    }
  }
  .dark {
    background-color: rgb(0, 21, 41);
  }
  .sidemenu {
    background: #002140;
  }
  .light {
    background-color: #fff;
    h1 {
      color: #1890ff;
    }
  }
}
.dark {
  background-color: rgb(0, 21, 41);
}
.light {
  background-color: #fff;
  .ant-menu-dark .ant-menu-submenu-selected {
    background: #1890ff;
  }
  .ant-menu-dark .ant-menu-submenu-open {
    background-color: transparent;
  }
}
</style>
