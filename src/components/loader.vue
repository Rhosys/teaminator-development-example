<template>
  <img v-bind:class="{loader: pageCenter, 'center-of-page': pageCenter, 'inline': !pageCenter}" v-bind:height="spinnerSize" src="../assets/images/spinner.svg" alt="loading" />
</template>

<script>
export default {
  name: 'spinner',
  props: {
    size: {
      type: String,
      required: false,
      default: () => 'large',
      validator(val) {
        return val.match(/^\d+px$/) || ['large', 'small'].includes(val);
      }
    }
  },
  computed: {
    spinnerSize() {
      if (this.size.match(/^\d+px$/)) {
        return this.size;
      }

      let result = '';
      switch (this.size) {
        case 'small':
          result = '19px';
          break;
        case 'large':
          result = '76px';
          break;
        default:
          result = '76px';
          break;
      }
      return result;
    },

    pageCenter() {
      return this.size === 'large';
    }
  }
};
</script>

<style lang="scss">
  .loader {
    z-index: 9999;
    top: 50%;
    left: 50%;
  }
  .center-of-page {
    margin: auto;
    display: block;
  }
  .inline {
    margin: auto;
    display: inline-block;
  }
</style>
