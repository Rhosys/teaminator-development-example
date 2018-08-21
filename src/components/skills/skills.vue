<template>
<b-container class="p-0">
  <loader v-show="isLoading"></loader>
  <div v-if="!isLoading" class="d-panel">
    <div class="d-panel-body p-3 p-md-5">
      <div class="row mb-3">
        <div class="col">
          <h4>Team Skills</h4>
          <div class="text-align">
            <!-- Pass the value 4 to the value property, the value big to the size property, the value .2 to the change property -->
            <colored-progress-circle :value="4" size="big" :change=".2" />

            <!-- React selector example, in case there is a react component that interests you -->
            <drop-down :value="this.selectedValue" :onChange="this.propertyChanged" :options="options"></drop-down>

            <!-- Vue selector example -->
            <vue-select v-model="selectedValue" :options="options"></vue-select>
          </div>
        </div>
      </div>
    </div>
  </div>
</b-container>
</template>

<script>
// Color circle to present progress
import ColoredProgressCircle from '../progress/coloredProgressCircle';

// Example react component pulled in, if you are into that
import 'react';
import Select from 'react-select';

// Vue select component
import VueSelect from 'vue-select';

export default {
  // Name of component for registration
  name: 'Skills',

  // Register components with the vue template
  components: {
    ColoredProgressCircle,
    'drop-down': Select,
    VueSelect
  },

  // list of injected properties, since this component Skills to a top level view referenced in routes.js, it likely won't need any, child components will have these
  props: {
    propertyName: {
      type: Object,
      required: false,
      default() { return {}; }
    }
  },

  // application level classes which handle most of the heavy lifting, these are standard javascript classes.
  inject: ['logger', 'alertHandler', 'skillsClient', 'teamIdentityClient'],

  // mutable data for the component
  data() {
    return {
      isLoading: true,
      options: [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ],
      selectedValue: null
    };
  },

  // code executed only when the component is created, but once for each instance
  async created() {
    let skills = await this.skillsClient.getTeamSkillReport();
    let team = await this.teamIdentityClient.getTeamMembers();
    // eslint-disable-next-line
    console.log(skills, team);
    this.isLoading = false;
  },

  // Reactive properties which will update when the properties used inside these also update
  computed: {
    dynamicProperty() {
      return true;
    },
    reactOptions() {
      return this.options;
    }
  },

  // Defines a list of methods which can be called
  methods: {
    someMethod() {

    },

    propertyChanged(newSelectedValue) {
      this.selectedValue = newSelectedValue;
    }
  }
};

</script>

<style lang="scss" scoped>
</style>
