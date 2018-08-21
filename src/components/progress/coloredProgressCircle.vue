<template>
  <div :style="`width: ${(size === 'big') ? 100 : 60}px;`">
    <progress-bar ref="circle" type="circle" :options="properties"></progress-bar>
    <div ref="text">
      <div :style="{'line-height': (size === 'big') ? '20px' : '4px', 'text-align': 'center', 'color': color }">
        <i class="fa fa-sort-asc" :class="{ 'fa-lg': (size === 'big') }" :style="{'color': getChangeColor(true) }" aria-hidden="true"></i><br/>
        <b :style="{'font-size': (size === 'big') ? '28px' : '16px' }">{{ Math.floor(score * 100) }}</b><br/>
        <i class="fa fa-sort-desc" :class="{ 'fa-lg': (size === 'big') }" :style="{ 'color': getChangeColor(false) }" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
// Use as copy-paste component until Vue.js warning is resolved https://github.com/wangdahoo/vue-progress/issues/4
// and this pull request is merged https://github.com/wangdahoo/vue-progress/pull/7
import VueProgress from './vue-progress/Progress';
import { getBootstrapColor } from '../colorPalette';

export default {
  name: 'ColoredProgressCircle',

  components: {
    progressBar: VueProgress
  },

  props: {
    value: {
      type: Number,
      required: false,
      default: 0.2
    },
    size: {
      type: String,
      required: false,
      default: 'small'
    },
    change: {
      type: Number,
      required: false,
      default: 0
    }
  },

  data() {
    return {
      properties: {
        color: this.getColor,
        trailColor: '#dbecf8',
        strokeWidth: 10,
        trailWidth: 10,
        duration: 500,
        easing: 'easeOut'
      },
      score: 0
    };
  },

  mounted() {
    this.update();
  },

  computed: {
    color() {
      if (!this.score) {
        return getBootstrapColor('light');
      }
      if (this.score >= 0.8) {
        return getBootstrapColor('success');
      }
      if (this.score <= 0.4) {
        return getBootstrapColor('danger');
      }
      return getBootstrapColor('warning');
    }
  },

  watch: {
    value() {
      this.update();
    }
  },

  methods: {
    getChangeColor(isUpper) {
      if ((isUpper && this.change > 0) || (!isUpper && this.change < 0)) {
        return '#000';
      }
      return '#dbecf8';
    },

    update() {
      this.score = this.value / 5;
      let col = this.color;
      this.$refs.circle.animate(this.score, { to: { color: '#fff' }, step(state, circle) { circle.path.setAttribute('stroke', col); } });
      this.$refs.circle.setText(this.$refs.text);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
