const mutations = {
  SET_TOGGLE_MENU_CMS: (state: any, toggle: boolean) => {
    state.toggleMenuCms = toggle
  },
  SET_WIDTH: (state: any, width: number) => {
    state.device.width = width
    if (state.device.width < 1024) {
      state.toggleMenuCms = false
    }
  },
  SET_HEIGHT: (state: any, height: number) => {
    state.device.height = height
  },
  SET_LOADING: (state: any, isShow: boolean) => {
    state.loading = isShow
  }
}

export default mutations