<template>
  <a-layout-header :class="['header',themeStyle.layout==='sidemenu'?'':themeStyle.theme]">
    <slot name="trigger" v-if="themeStyle.layout==='sidemenu'"></slot>
    <div class="header-left" v-else>
      <div :class="['logo',themeStyle.theme]">
        <img :src="logo" alt="logo">
        <h1>ZEHUI Admin</h1>
      </div>
      <sider-menu ref="menu" />
    </div>

    <user />
  </a-layout-header>
</template>

<script>
import { mapGetters } from 'vuex'
import logo from '@/assets/images/logo.svg'
import User from './User'
import SiderMenu from '../Sider/SiderMenu.vue'
export default {
  name: 'HeaderBar',
  components: {
    User,
    SiderMenu
  },
  data () {
    return {
      logo
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
.header {
  background-color: #fff;
  padding: 0;
  display: flex;
  .ant-menu-horizontal {
    line-height: 65px;
  }
  &-left {
    display: flex;
    max-width: 835px;
    .logo {
      position: relative;
      height: 64px;
      padding: 0 30px;
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
    .light {
      background-color: #fff;
      h1 {
        color: #1890ff;
      }
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