<template>
  <div id="error-snackbar">
    <transition-group tag="div" name="snackbar">
      <alert class="snackbar-item"
        v-for="(alert, index) in alerts"
        :key="`${index}-${new Date().getTime()}`/* we need a unique identifier since index will always be 0; getTime is good enough for our purposes */"
        :alert="alert"></alert>
    </transition-group>
  </div>
</template>

<script>
import Alert from './alert';

export default {
  name: 'AlertSnackbar',

  components: {
    Alert
  },

  data() {
    return {
      alerts: []
    };
  },

  computed: {
    storedAlert() {
      return this.$store.state.alert;
    }
  },

  watch: {
    storedAlert(n) {
      this.alerts.shift();
      if (n) {
        this.alerts.push(n);
      }
    }
  }
};
</script>

<style lang="scss">
  #error-snackbar {
    position: fixed;
    top: 7rem;
    left: 50%;
    z-index: 99;
    transform: translate(-50%, 0);
    width: 800px;
    max-width: 90vw;
  }
  .snackbar-item {
    transition: all .5s;
    padding: 2rem 30px 2rem 15px;
  }
  .snackbar-leave-active {
    position: absolute !important;
    width: 800px;
    max-width: 90vw;
  }
  .snackbar-enter {
    opacity: 0;
    transform: translateY(-120px);
  }
  .snackbar-leave-to {
    opacity: 0;
  }
</style>
