import Vue from 'vue';
import createPersistedState from 'vuex-persistedstate';
import createLogger from 'vuex/dist/logger';
import Vuex from 'vuex';
Vue.use(Vuex);

import mutations from '@/store/mutations';
import initialState from '@/store/state';

let plugins = [createPersistedState({ key: 'teaminator' })];
let isDevelopment = process.env.NODE_ENV && process.env.NODE_ENV === 'development';
if (isDevelopment) { plugins.push(createLogger()); }
export default new Vuex.Store({
  strict: isDevelopment,
  plugins: plugins,
  state: initialState,
  mutations: mutations,
  reducer: state => ({
    profile: state.profile,
    settings: state.settings,
    cache: state.cache
  })
});
