const mutations = {
  SET_TOGGLE_MENU_CMS: (state: any, toggle: boolean) => {
    // console.log('toohl', toggle)
    state.toggleMenuCms = toggle
  },
  SET_WIDTH: (state: any, width: number) => {
    state.device.width = width
  },
  SET_HEIGHT: (state: any, height: number) => {
    state.device.height = height
  },
  
}

export default mutations