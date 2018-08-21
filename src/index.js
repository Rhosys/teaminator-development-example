import 'error-object-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import { VuePlugin } from 'vuera';

import App from './app.vue';
import AlertHandler from './errorHandling/alertHandler';
import Loader from './components/loader';
import routes from './routes';
import store from './store/store';

import Logger from './logger';
import MockSkillsClient from './clients/mockSkillsClient';
import MockTeamIdentityClient from './clients/mockTeamIdentityClient';

import BootstrapVue from 'bootstrap-vue';
import './style.scss';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueRouter);
Vue.use(VuePlugin);
Vue.use(BootstrapVue);

async function init() {
  let alertHandler = new AlertHandler(store);

  let logger = new Logger();

  const router = new VueRouter({ routes: routes(), store, linkActiveClass: 'active' });

  Vue.component('loader', Loader);

  new Vue({ router, store,
    provide: {
      alertHandler: alertHandler,
      skillsClient: new MockSkillsClient(),
      teamIdentityClient: new MockTeamIdentityClient(),
      logger: logger
    },

    async created() {
      router.afterEach(() => {
        window.scrollTo(0, 0);
        alertHandler.removeAlert('danger');
        alertHandler.removeAlert('warning');
      });
      document.title = 'Teaminator';
    },

    render: h => h(App)
  }).$mount('#app');
}

init();
