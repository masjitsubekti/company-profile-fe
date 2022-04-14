import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import VuexPersistence from 'vuex-persist'

// import SecureLS from 'secure-ls'
// const ls: any = new SecureLS({ encodingType: 'aes', isCompression: false, encryptionSecret: 'PT-$3L412@5-H@ND45@-!NT!-P3R$@D4' })

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  key: 'SIPT',
  // storage: {
  //   getItem: (key: any) => ls.get(key),
  //   setItem: (key: any, value: any) => ls.set(key, value),
  //   removeItem: (key: any) => ls.remove(key),
  // },
  // storage: sessionStorage,
})


export default () => new Vuex.Store({
  getters,
  mutations,
  state,
  actions,
  // modules: {
  //   FilterLocale: moduleFilterLocale,
  //   auth: auth
  // },
  strict: process.env.NODE_ENV !== 'production',
  plugins: [vuexLocal.plugin],
})
