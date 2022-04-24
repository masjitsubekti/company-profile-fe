const mutations = {
  SET_IS_AUTHEN: (state: any, isAuthen: boolean) => {
    state.isAuth = isAuthen
  },
  SET_DATE_AUTHEN: (state: any, dateAuthen: string) => {
    state.dateAuth = dateAuthen
  },
  SET_TOKEN_AUTHEN: (state: any, token: string) => {
    state.token = token
  },
  SET_DATA_USER_AUTH: (state: any, dataUser: string) => {
    state.dataUser = dataUser
  },

}

export default mutations