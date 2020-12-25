<template>
  <div class="tags-nav">
    <div class="btn-con left-btn">
      <a-button icon="left" @click="handleScroll(240)"></a-button>
    </div>
    <div class="btn-con right-btn">
      <a-button icon="right" @click="handleScroll(-240)"></a-button>
    </div>
    <div class="scroll-outer" ref="scrollOuter" @DOMMouseScroll="handlescroll" @mousewheel="handlescroll">
      <div ref="scrollBody" class="scroll-body" :style="{left: tagBodyLeft + 'px'}">
        <transition-group name="taglist-moving-animation">
          <tag v-for="(item,index) in tagNavList" ref="tagsPageOpened" :key="item.name+index" :router="item" :data-route-item="item" @open="openPage" @close="closePage" @contextmenu.prevent.native="contextMenu(item.name, $event)" />
        </transition-group>
      </div>
    </div>
    <ul v-show="visible" :style="{left: contextMenuLeft + 'px', top: contextMenuTop + 'px'}" class="contextmenu">
      <li @click="handleTagsOption('others')">关闭其他</li>
      <li @click="handleTagsOption('all')">关闭所有</li>
    </ul>
  </div>
</template>

<script>
import { routeEqual } from '@/util'
import { mapGetters } from 'vuex'
import Tag from './Tag.vue'
export default {
  name: 'TagsView',
  components: {
    Tag
  },
  data () {
    return {
      visible: false,
      tagBodyLeft: 0,
      outerPadding: 2,
      contextMenuLeft: 0,
      contextMenuTop: 0
    }
  },
  computed: {
    ...mapGetters([
      'tagNavList'
    ])
  },
  watch: {
    visible (value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.getTagElementByRoute(this.$route)
    }, 200)
  },
  methods: {
    handlescroll (e) {
      var type = e.type
      let delta = 0
      if (type === 'DOMMouseScroll' || type === 'mousewheel') {
        delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40
      }
      this.handleScroll(delta)
    },
    handleScroll (offset) {
      const outerWidth = this.$refs.scrollOuter.offsetWidth
      const bodyWidth = this.$refs.scrollBody.offsetWidth
      if (offset > 0) {
        this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
      } else {
        if (outerWidth < bodyWidth) {
          if (this.tagBodyLeft < -(bodyWidth - outerWidth)) {
            this.tagBodyLeft = this.tagBodyLeft
          } else {
            this.tagBodyLeft = Math.max(this.tagBodyLeft + offset, outerWidth - bodyWidth)
          }
        } else {
          this.tagBodyLeft = 0
        }
      }
    },
    moveToView (tag) {
      const outerWidth = this.$refs.scrollOuter.offsetWidth
      const bodyWidth = this.$refs.scrollBody.offsetWidth
      if (bodyWidth < outerWidth) {
        this.tagBodyLeft = 0
      } else if (tag.offsetLeft < -this.tagBodyLeft) {
        // 标签在可视区域左侧
        this.tagBodyLeft = -tag.offsetLeft + this.outerPadding
      } else if (tag.offsetLeft > -this.tagBodyLeft && tag.offsetLeft + tag.offsetWidth < -this.tagBodyLeft + outerWidth) {
        // 标签在可视区域
        this.tagBodyLeft = Math.min(0, outerWidth - tag.offsetWidth - tag.offsetLeft - this.outerPadding)
      } else {
        // 标签在可视区域右侧
        this.tagBodyLeft = -(tag.offsetLeft - (outerWidth - this.outerPadding - tag.offsetWidth))
      }
    },
    getTagElementByRoute (route) {
      this.$nextTick(() => {
        this.refsTag = this.$refs.tagsPageOpened
        this.refsTag.forEach((item, index) => {
          if (routeEqual(route, item.$attrs['data-route-item'])) {
            let tag = this.refsTag[index].$el
            this.moveToView(tag)
          }
        })
      })
    },
    openPage (router) {
      this.visible = false
      this.$router.push(router)
    },
    closePage (router) {
      this.$store.dispatch('app/delTagNavList', router)
      this.$router.push(this.tagNavList[this.tagNavList.length - 1])
    },
    // 右键菜单
    contextMenu (name, e) {
      if (name === 'home') {
        return
      }
      this.visible = true
      const offsetLeft = this.$el.getBoundingClientRect().left
      this.contextMenuLeft = e.clientX - offsetLeft + 10
      this.contextMenuTop = e.clientY - 64
    },
    // 右键关闭操作
    handleTagsOption (type) {
      this.visible = false
      let tagNavList = []
      if (type === 'all') {
        // 关闭所有，除了home
        tagNavList = this.tagNavList.filter(item => item.name === 'home')
        this.$router.push('home')
      } else if (type === 'others') {
        // 关闭除当前页和home页的其他页
        tagNavList = this.tagNavList.filter(item => routeEqual(this.$route, item) || item.name === 'home')
      }
      this.$store.dispatch('app/setTagNavList', tagNavList)
    },
    closeMenu () {
      this.visible = false
    }
  }
}

</script>
<style  lang='less' scoped>
@import "./index.less";
</style>
