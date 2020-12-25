import { localSave } from '@/util'
const state = {
  sidebar: true,
  device: 'desktop',
  theme: 'dark',
  layout: '',
  contentWidth: 'Fixed',
  fixedHeader: false,
  fixSiderbar: false,
  autoHideHeader: false,
  color: '#1890FF',
  tagsBar: true
}
const mutations = {
  SET_STYLE_FROM_LOCAL: (state, style) => {
    state.sidebar = style.sidebar
    state.device = style.device
    state.theme = style.theme
    state.layout = style.layout
    state.contentWidth = style.contentWidth
    state.fixedHeader = style.fixedHeader
    state.fixSiderbar = style.fixSiderbar
    state.autoHideHeader = style.autoHideHeader
    state.color = style.color
    state.tagsBar = style.tagsBar
  },
  SET_SIDEBAR_TYPE: (state, type) => {
    state.sidebar = type
    localSave('theme', JSON.stringify(state))
  },
  CLOSE_SIDEBAR: (state) => {
    state.sidebar = false
    localSave('theme', JSON.stringify(state))
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  TOGGLE_THEME: (state, theme) => {
    state.theme = theme
    localSave('theme', JSON.stringify(state))
  },
  TOGGLE_LAYOUT_MODE: (state, layout) => {
    state.layout = layout
    localSave('theme', JSON.stringify(state))
  },
  TOGGLE_FIXED_HEADER: (state, fixed) => {
    state.fixedHeader = fixed
    localSave('theme', JSON.stringify(state))
  },
  TOGGLE_FIXED_SIDERBAR: (state, fixed) => {
    state.fixSiderbar = fixed
    localSave('theme', JSON.stringify(state))
  },
  TOGGLE_FIXED_HEADER_HIDDEN: (state, show) => {
    state.autoHideHeader = show
    localSave('theme', JSON.stringify(state))
  },
  TOGGLE_CONTENT_WIDTH: (state, type) => {
    state.contentWidth = type
    localSave('theme', JSON.stringify(state))
  },
  TOGGLE_COLOR: (state, color) => {
    state.color = color
    localSave('theme', JSON.stringify(state))
  },
  TOGGLE_TAGS_BAR: (state, bool) => {
    state.tagsBar = bool
    localSave('theme', JSON.stringify(state))
  }
}
const actions = {
  setStyleFromLocal: ({ commit }, style) => {
    commit('SET_STYLE_FROM_LOCAL', JSON.parse(style))
  },
  setSidebar ({ commit }, type) {
    commit('SET_SIDEBAR_TYPE', type)
  },
  CloseSidebar ({ commit }) {
    commit('CLOSE_SIDEBAR')
  },
  toggleDevice ({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  toggleTheme ({ commit }, theme) {
    commit('TOGGLE_THEME', theme)
  },
  toggleLayoutMode ({ commit }, mode) {
    commit('TOGGLE_LAYOUT_MODE', mode)
  },
  toggleFixedHeader ({ commit }, fixedHeader) {
    if (!fixedHeader) {
      commit('TOGGLE_FIXED_HEADER_HIDDEN', false)
    }
    commit('TOGGLE_FIXED_HEADER', fixedHeader)
  },
  toggleFixSiderbar ({ commit }, fixSiderbar) {
    commit('TOGGLE_FIXED_SIDERBAR', fixSiderbar)
  },
  toggleFixedHeaderHidden ({ commit }, show) {
    commit('TOGGLE_FIXED_HEADER_HIDDEN', show)
  },
  toggleContentWidth ({ commit }, type) {
    commit('TOGGLE_CONTENT_WIDTH', type)
  },
  toggleColor ({ commit }, color) {
    commit('TOGGLE_COLOR', color)
  },
  toggleTagsBar ({ commit }, bool) {
    commit('TOGGLE_TAGS_BAR', bool)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
