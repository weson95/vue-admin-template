<template>
  <div class="tag" @click="openPage(router)">
    <span class="content">
      <i :class="isCurrentTag(router)?'circle active':'circle'"></i>
      <span class="title">{{router.meta.title}}</span>
      <a-icon type="close" class="close" @click="closePage(router)" v-if="router.name!=='home'" />
    </span>
  </div>
</template>

<script>
import { routeEqual } from '@/util'
export default {
  name: 'tag',
  props: {
    router: {
      type: Object
    }
  },
  methods: {
    openPage (router) {
      if (!routeEqual(this.$route, router)) {
        this.$emit('open', router)
      }
    },
    closePage (router) {
      this.$emit('close', router)
    },
    isCurrentTag (router) {
      return routeEqual(this.$route, router)
    }
  }
}

</script>
<style  lang='less' scoped>
@import "~@/assets/css/mixin.less";
@import "~ant-design-vue/dist/antd.less";
.tag {
  height: 29px;
  line-height: 28px;
  border: 1px solid #e8eaec !important;
  color: #515a6e !important;
  background: #fff !important;
  padding: 0 12px;
  display: inline-block;
  margin: 1px 4px;
  border-radius: 3px;
  font-size: 12px;
  vertical-align: middle;
  opacity: 1;
  overflow: hidden;
  cursor: pointer;
  .content {
    display: inline-block;
    height: 28px;
  }
  .circle {
    display: inline-block;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: #f0f2f5;
    vertical-align: sub;
    margin-bottom: 1px;
  }
  .active {
    background-color: @primary-color;
  }
  .title {
    margin: 0 7px;
  }
  .close {
    color: #b4bfd8;
    font-size: 10px;
    &:hover {
      color: @primary-color;
    }
  }
}
</style>
