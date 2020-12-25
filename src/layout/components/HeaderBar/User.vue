<template>
  <div class="user-wrapper">
    <!-- <a href="https://pro.loacg.com/docs/getting-started" target="_blank">
        <span class="action">
          <a-icon type="question-circle-o"></a-icon>
        </span>
      </a> -->
    <a-dropdown>
      <span :class="['action ant-dropdown-link user-dropdown-menu',themeStyle.theme,themeStyle.layout]">
        <a-avatar class="avatar" size="small" src="https://pro.loacg.com/logo.png" />
        <span>ZEHUI</span>
      </span>
      <a-menu slot="overlay">
        <a-menu-item key="0">
          <router-link :to="{ name: 'center' }">
            <a-icon type="user" />
            <span>个人中心</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="1">
          <router-link :to="{ name: 'settings' }">
            <a-icon type="setting" />
            <span>账户设置</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2" disabled>
          <a-icon type="setting" />
          <span>测试</span>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3">
          <a href="javascript:;" @click="handleLogout">
            <a-icon type="logout" />
            <span>退出登录</span>
          </a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'User',
  computed: {
    ...mapGetters(['themeStyle'])
  },
  methods: {
    handleLogout () {
      this.$confirm({
        title: '提示',
        content: '真的要注销登录吗 ?',
        onOk: () => {

        },
        onCancel () {
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.user-wrapper {
  position: absolute;
  right: 20px;
  .action {
    cursor: pointer;
    padding: 0 12px;
    display: inline-block;
    transition: all 0.3s;
    height: 100%;
    color: rgba(0, 0, 0, 0.65);

    .avatar {
      margin: 20px 8px 20px 0;
      color: #1890ff;
      background: hsla(0, 0%, 100%, 0.85);
      vertical-align: middle;
    }

    .icon {
      font-size: 16px;
      padding: 4px;
    }
  }
  .dark {
    color: #fff;
    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
  .light {
    color: rgba(0, 0, 0, 0.65);
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
  .sidemenu {
    color: rgba(0, 0, 0, 0.65);
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
}
</style>