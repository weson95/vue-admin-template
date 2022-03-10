<template>
  <div class="setting-drawer" ref="settingDrawer">
    <a-drawer width="300" placement="right" @close="onClose" :closable="false" :visible="visible" :handle="handle">
      <div class="setting-drawer-index-content">

        <div :style="{ marginBottom: '24px' }">
          <h3 class="setting-drawer-index-title">整体风格设置</h3>

          <div class="setting-drawer-index-blockChecbox">
            <a-tooltip>
              <template slot="title">
                暗色菜单风格
              </template>
              <div class="setting-drawer-index-item" @click="handleMenuTheme('dark')">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg" alt="dark">
                <div class="setting-drawer-index-selectIcon" v-if="themeStyle.theme === 'dark'">
                  <a-icon type="check" />
                </div>
              </div>
            </a-tooltip>

            <a-tooltip>
              <template slot="title">
                亮色菜单风格
              </template>
              <div class="setting-drawer-index-item" @click="handleMenuTheme('light')">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg" alt="light">
                <div class="setting-drawer-index-selectIcon" v-if="themeStyle.theme !== 'dark'">
                  <a-icon type="check" />
                </div>
              </div>
            </a-tooltip>
          </div>
        </div>

        <div :style="{ marginBottom: '24px' }">
          <h3 class="setting-drawer-index-title">主题色</h3>

          <div style="height: 20px">
            <a-tooltip class="setting-drawer-theme-color-colorBlock" v-for="(item, index) in colorList" :key="index">
              <template slot="title">
                {{ item.key }}
              </template>
              <a-tag :color="item.color" @click="changeColor(item.color)">
                <a-icon type="check" v-if="item.color === themeStyle.color"></a-icon>
              </a-tag>
            </a-tooltip>

          </div>
        </div>
        <a-divider />

        <div :style="{ marginBottom: '24px' }">
          <h3 class="setting-drawer-index-title">导航模式</h3>

          <div class="setting-drawer-index-blockChecbox">
            <a-tooltip>
              <template slot="title">
                侧边栏导航
              </template>
              <div class="setting-drawer-index-item" @click="handleLayout('sidemenu')">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg" alt="sidemenu">
                <div class="setting-drawer-index-selectIcon" v-if="themeStyle.layout === 'sidemenu'">
                  <a-icon type="check" />
                </div>
              </div>
            </a-tooltip>

            <a-tooltip>
              <template slot="title">
                顶部栏导航
              </template>
              <div class="setting-drawer-index-item" @click="handleLayout('topmenu')">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg" alt="topmenu">
                <div class="setting-drawer-index-selectIcon" v-if="themeStyle.layout !== 'sidemenu'">
                  <a-icon type="check" />
                </div>
              </div>
            </a-tooltip>
          </div>
          <!-- <div :style="{ marginTop: '24px' }">
            <a-list :split="false">
              <a-list-item>
                <a-tooltip slot="actions">
                  <template slot="title">
                    该设定仅 [顶部栏导航] 时有效
                  </template>
                  <a-select size="small" style="width: 80px;" :defaultValue="themeStyle.contentWidth" @change="handleContentWidthChange">
                    <a-select-option value="Fixed">固定</a-select-option>
                    <a-select-option value="Fluid" v-if="themeStyle.layout !== 'sidemenu'">流式</a-select-option>
                  </a-select>
                </a-tooltip>
                <a-list-item-meta>
                  <div slot="title">内容区域宽度</div>
                </a-list-item-meta>
              </a-list-item>
              <a-list-item>
                <a-switch slot="actions" size="small" :defaultChecked="themeStyle.fixedHeader" @change="handleFixedHeader" />
                <a-list-item-meta>
                  <div slot="title">固定 Header</div>
                </a-list-item-meta>
              </a-list-item>
              <a-list-item>
                <a-switch slot="actions" size="small" :disabled="!themeStyle.fixedHeader" :defaultChecked="themeStyle.autoHideHeader" @change="handleFixedHeaderHidden" />
                <a-list-item-meta>
                  <a-tooltip slot="title" placement="left">
                    <template slot="title">固定 Header 时可配置</template>
                    <div :style="{ opacity: !themeStyle.fixedHeader ? '0.5' : '1' }">下滑时隐藏 Header</div>
                  </a-tooltip>
                </a-list-item-meta>
              </a-list-item>
              <a-list-item>
                <a-switch slot="actions" size="small" :disabled="(themeStyle.layout === 'topmenu')" :defaultChecked="themeStyle.fixSiderbar" @change="handleFixSiderbar" />
                <a-list-item-meta>
                  <div slot="title" :style="{ textDecoration: themeStyle.layout === 'topmenu' ? 'line-through' : 'unset' }">固定侧边菜单</div>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </div> -->
        </div>
        <!-- <a-divider /> -->

        <!-- <div :style="{ marginBottom: '24px' }">
          <h3 class="setting-drawer-index-title">其他设置</h3>
          <div>
            <a-list :split="false">
              <a-list-item>
                <a-switch slot="actions" size="small" :defaultChecked="themeStyle.tagsBar" @change="handleTagsBar" />
                <a-list-item-meta>
                  <div slot="title">多页签模式</div>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </div>
        </div> -->
        <!-- <a-divider /> -->
      </div>
      <div class="setting-drawer-index-handle" @click="toggle">
        <a-icon type="setting" v-if="!visible" />
        <a-icon type="close" v-else />
      </div>
    </a-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import themeColor from './themeColor.js'
export default {
  data () {
    return {
      visible: false,
      colorList: [
        {
          key: '薄暮', color: '#F5222D'
        },
        {
          key: '火山', color: '#FA541C'
        },
        {
          key: '日暮', color: '#FAAD14'
        },
        {
          key: '明青', color: '#13C2C2'
        },
        {
          key: '极光绿', color: '#52C41A'
        },
        {
          key: '拂晓蓝（默认）', color: '#1890FF'
        },
        {
          key: '极客蓝', color: '#2F54EB'
        },
        {
          key: '酱紫', color: '#722ED1'
        }
      ],
      handle: <div />
    }
  },
  computed: {
    ...mapGetters(['themeStyle'])
  },
  mounted () {
    this.updateTheme(this.themeStyle.color)
  },
  methods: {
    showDrawer () {
      this.visible = true
    },
    onClose () {
      this.visible = false
    },
    toggle () {
      this.visible = !this.visible
    },
    updateTheme (newPrimaryColor) {
      const hideMessage = this.$message.loading('正在切换主题！', 0)
      themeColor.changeColor(newPrimaryColor).finally(t => {
        setTimeout(() => {
          hideMessage()
        })
      })
    },
    handleTagsBar (checked) {
      this.$store.dispatch('style/toggleTagsBar', checked)
    },
    handleMenuTheme (theme) {
      this.$store.dispatch('style/toggleTheme', theme)
    },
    handleLayout (mode) {
      this.$store.dispatch('style/toggleLayoutMode', mode)
      // 因为顶部菜单不能固定左侧菜单栏，所以强制关闭
      this.handleFixSiderbar(false)
    },
    handleContentWidthChange (type) {
      this.$store.dispatch('style/toggleContentWidth', type)
    },
    changeColor (color) {
      if (this.themeStyle.color !== color) {
        this.$store.dispatch('style/toggleColor', color)
        this.updateTheme(color)
      }
    },
    handleFixedHeader (fixed) {
      this.$store.dispatch('style/toggleFixedHeader', fixed)
    },
    handleFixedHeaderHidden (autoHidden) {
      this.$store.dispatch('style/toggleFixedHeaderHidden', autoHidden)
    },
    handleFixSiderbar (fixed) {
      if (this.themeStyle.layout === 'topmenu') {
        this.$store.dispatch('style/toggleFixSiderbar', false)
        return
      }
      this.$store.dispatch('style/toggleFixSiderbar', fixed)
    }
  }
}
</script>

<style lang="less" scoped>
.setting-drawer-index-content {
  .setting-drawer-index-blockChecbox {
    display: flex;

    .setting-drawer-index-item {
      margin-right: 16px;
      position: relative;
      border-radius: 4px;
      cursor: pointer;

      img {
        width: 48px;
      }

      .setting-drawer-index-selectIcon {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        padding-top: 15px;
        padding-left: 24px;
        height: 100%;
        color: #1890ff;
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
  .setting-drawer-theme-color-colorBlock {
    width: 20px;
    height: 20px;
    border-radius: 2px;
    float: left;
    cursor: pointer;
    margin-right: 8px;
    padding-left: 0px;
    padding-right: 0px;
    text-align: center;
    color: #fff;
    font-weight: 700;

    i {
      font-size: 14px;
    }
  }
}

.setting-drawer-index-handle {
  position: fixed;
  top: 240px;
  background: #1890ff;
  width: 48px;
  height: 48px;
  right: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: auto;
  z-index: 1001;
  text-align: center;
  font-size: 16px;
  border-radius: 4px 0 0 4px;

  i {
    color: rgb(255, 255, 255);
    font-size: 20px;
  }
}
</style>
