const actions = {
  setToggleMenuCms: ({ commit }: any, toggle: boolean) => {
    commit('SET_TOGGLE_MENU_CMS', toggle)
  },
  initResize: ({ commit }: any) => {
    window.addEventListener('resize', () => {
      commit('SET_WIDTH', window.innerWidth)
      commit('SET_HEIGHT', window.innerHeight)
    })
  },
  setWidth: ({ commit }: any) => {
    commit('SET_WIDTH', window.innerWidth)
  },
  setHeight: ({ commit }: any) => {
    commit('SET_HEIGHT', window.innerHeight)
  },
  destroyResize: ({ commit }: any) => {
    window.removeEventListener('resize', () => ({}))
  },
  showLoading: ({ commit }: any) => {
    commit('SET_LOADING', true)
  },
  hideLoading: ({ commit }: any) => {
    commit('SET_LOADING', false)
  },
}

export default actions