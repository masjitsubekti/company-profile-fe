const mutations = {
  SET_TOGGLE_MENU_CMS: (state: any, toggle: boolean) => {
    console.log('any toggle', toggle)
    state.toggleMenuCms = toggle
  },
  SET_WIDTH: (state: any, width: number) => {
    console.log('width', state.device.width < 1024)
    state.device.width = width
    // if (state.device.width < 1024) {
    //   state.toggleMenuCms = false
    // }
  },
  SET_HEIGHT: (state: any, height: number) => {
    console.log('height', height)
    state.device.height = height
  },
  
}

export default mutations