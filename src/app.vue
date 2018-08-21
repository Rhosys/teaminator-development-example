<template>
  <div>
    <alert-snackbar ></alert-snackbar>
    <navigation @navigationFocusChanged="onApplicationStateChange" :forceCollapse="applicationState !== 'NAVIGATION'" ></navigation>
    <div @click="navbarOnLoseFocus" class="container-fluid p-0 p-md-3">
      <div :class="{ 'content': !hideContentBox }" style="min-height: Calc(100vh -20px); overflow-y: show;">
        <router-view></router-view>
      </div>
      <div id="initial-loader" class="content" v-if="initialLoad">
        <div class="row title">
          <div class="col-sm-12" style="text-align: center">
            <img id="initial-spinner" src="./assets/images/spinner.svg">
            <h3 id="loading-note"></h3>
          </div>
        </div>
      </div>
      <div id="loading-error" class="content" style="display: none">
        <div class="row title">
          <div class="col-sm-12">
            <h2 class="text-danger">There was an issue loading teaminator on your device.</h2>
            <hr class="hr-header" />
          </div>
        </div>
        <br />
        <div class="alert alert-danger">
          <p>An error was encountered while loading.</p>
          <p>Please reload the page or contact us at <a href="mailto:support@teaminator.io?subject=Unsupported browser">support@teaminator.io</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './style.scss';
import AlertSnackbar from './components/alertSnackbar';
import Navigation from './components/navigation';

export default {
  name: 'App',

  components: {
    Navigation,
    AlertSnackbar
  },

  data() {
    return {
      applicationState: 'DISPLAY',
      initialLoad: true,
      hideContentBox: false
    };
  },

  created() {
    this.initialLoad = false;
  },

  watch: {
    $route(newRoute) {
      this.hideContentBox = newRoute.meta.hideContentBox;
      this.applicationState = 'DISPLAY';
    }
  },

  methods: {
    navbarOnLoseFocus() {
      this.applicationState = 'DISPLAY';
    },

    onApplicationStateChange(navigationIsExpanded) {
      this.applicationState = navigationIsExpanded ? 'NAVIGATION' : 'DISPLAY';
    }
  }
};
</script>
