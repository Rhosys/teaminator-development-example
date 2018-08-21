<template>
  <progress-bar :class="{inline: true, rotating: spinner}" ref="bar" type="circle" :options="properties"></progress-bar>
</template>

<script>
// Use as copy-paste component until Vue.js warning is resolved https://github.com/wangdahoo/vue-progress/issues/4
// and this pull request is merged https://github.com/wangdahoo/vue-progress/pull/7
import VueProgress from '@/components/progress/vue-progress/Progress';

export default {
  name: 'progress-circle',

  components: {
    progressBar: VueProgress
  },

  props: {
    progressValue: {
      type: Number,
      required: false,
      default: 0
    }
  },

  data() {
    return {
      properties: {
        color: '#188AA8',
        strokeWidth: 15,
        trailWidth: 15
      },
      spinner: true
    };
  },

  mounted() {
    // used for spinning animation
    this.$refs.bar.set(0.95);
  },

  watch: {
    progressValue(newValue) {
      if (this.spinner) {
        // spinning ended
        this.$refs.bar.set(0);
        this.spinner = false;
      }
      this.$refs.bar.animate(newValue);
    }
  }
};
</script>

<style lang="scss" scoped>
  .inline {
    position: absolute;
    left: 7px;
    top: 4px;
    width: 29px;
  }

  .rotating {
    animation: rotating 1s linear infinite;
  }

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
