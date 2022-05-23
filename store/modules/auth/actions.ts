import {
  authUseCase
} from '~/domain/usecase'

const actions = {
  setIsAuthAuthenticated: (vuexContext: any, isAuthen: boolean) => {
    vuexContext.commit('SET_IS_AUTHEN', isAuthen)
  },
  setDateAuthAuthenticated: (vuexContext: any, dateAuthen: string) => {
    vuexContext.commit('SET_DATE_AUTHEN', dateAuthen)
  },
  setTokenAuth: (vuexContext: any, token: string) => {
    vuexContext.commit('SET_TOKEN_AUTHEN', token)
  },
  setAuthDataUser: ({ commit }: any, data: string) => {
    commit('SET_DATA_USER_AUTH', data)
  },
  logoutAccount: ({ commit, state, getters }: any) => {

    authUseCase.logoutProcess(state.token).then((response: any) => {
      if (!response.error) {
        commit('SET_IS_AUTHEN', false)
        commit('SET_DATE_AUTHEN', null)
        commit('SET_TOKEN_AUTHEN', null)
        commit('SET_DATA_USER_AUTH', null)
      }
    })
  }
}

export default actions