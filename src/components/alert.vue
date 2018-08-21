<template>
  <div class="alert notification" :class="`alert-${alert.alertType}`">
    <button v-on:click="hideAlert()" type="button" class="close">&times;</button>
    <span>{{ alert.message }}</span>
    <span v-show="alert.details"> - <i>{{ alert.details }}</i></span>
  </div>
</template>

<script>
export default {
  name: 'Alert',

  inject: ['alertHandler'],

  props: {
    alert: {
      type: Object,
      required: true
    }
  },

  created() {
    if (this.alert.timeoutInMs > 0) {
      setTimeout(() => this.hideAlert(), this.alert.timeoutInMs);
    }
  },
  methods: {
    hideAlert() {
      this.alertHandler.removeSpecificAlert(this.alert);
    }
  }
};
</script>
