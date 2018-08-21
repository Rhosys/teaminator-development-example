<template>
  <div>
    <b-navbar id="navbar" toggleable="sm" type="dark" variant="dark">
      <b-navbar-brand :to="{ name: 'Home' }" class="text-30 p-0">
        <img style="width: 30px" src="../assets/images/logo.png">
        <span class="ml-2 d-none d-sm-inline-block"> Teaminator</span>
        <span class="ml-2 d-sm-none d-xs-inline-block">{{ 'Teaminator' }}</span>
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse" v-model="showCollapse">
        <b-navbar-nav v-if="profile.userId" class="text-30">
          <b-nav-item :to="{ name: 'Home' }" active-class="navlink-active" class="text-right" exact><span>Home</span></b-nav-item>
          <!-- This should be enabled -->
          <!-- <b-nav-item :to="{ name: 'Skills' }" active-class="navlink-active" class="text-right"><span>Skills</span></b-nav-item> -->
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-text class="text-30 text-right text-primary mx-3 m-xs-0 pointer">{{ currentTeamName }}</b-nav-text>
          <b-nav-item-dropdown v-if="profile.userId" extra-menu-classes="nav-dropdown-xs" extra-toggle-classes="pl-0" right no-caret>
            <template slot="button-content">
              <span v-if="profile.userId" class="d-inline-block d-sm-none">{{ profile.name }}</span>
              <avatar v-if="profile.avatarUrl" :show-avatar-replacement="true" :url="profile.avatarUrl" :userId="profile.userId" size="30" class="ml-2"/>
              <i class="fa text-30 fa-angle-down text-muted ml-2" aria-hidden="true"></i>
            </template>
            <b-dropdown-header v-if="profile.userId" class="text-dark d-none d-sm-inline-block"><b>{{ profile.name }}</b></b-dropdown-header>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Avatar from '../components/avatar';

export default {
  inject: ['logger', 'teamIdentityClient'],

  components: {
    Avatar
  },

  props: {
    forceCollapse: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      showCollapse: false,
      currentTeamName: null,
      teams: null,
      profile: {
        userId: '4400eee4-635c-48b3-91df-22ccc100cf57',
        name: 'Anonymous User',
        avatarUrl: 'https://www.gravatar.com/avatar/2b1f8ebfd993a04ad2e8346b304134b6?d=404'
      }
    };
  },

  watch: {
    forceCollapse(newValue) {
      if (newValue) {
        this.showCollapse = false;
      }
    },

    showCollapse(newValue) {
      if (!newValue && this.showCollapse) {
        this.showCollapse = false;
      }
      this.$emit('navigationFocusChanged', this.showCollapse);
    }
  },

  async created() {
    this.teams = await this.teamIdentityClient.getTeams();
    this.currentTeamName = this.teams[0].teamName;
  }
};

</script>

<style lang="scss" scoped>
  .avatar {
    height: 30px;
  }

  .text-30 {
    line-height: 30px;
  }

  .mobile-controls {
    position: absolute;
    right: 0;
    top: 0;
    padding: 3px 3px 0 0;
    background-color: #2d434d;
  }
</style>
