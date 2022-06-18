// ~/plugins/vuex-persist.js
import VuexPersistence from 'vuex-persist'
// import store from '@/store'
 
export default ({ store }:any) => {
  new VuexPersistence({
  /* your options */
    key: 'SIPT',
    storage: window.localStorage
  }).plugin(store);
}
