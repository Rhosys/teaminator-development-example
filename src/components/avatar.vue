<template>
  <span>
    <transition v-if="showAvatar" name="fade">
      <img :src="avatar" class="rounded-circle" @error="error = true;" @load="error = false">
    </transition>
    <transition v-if="!showAvatar && showAvatarReplacement" name="fade">
      <i class="fa fa-user-circle-o align-middle" :style="replacementStyle"></i>
    </transition>
  </span>
</template>

<script>
import axios from 'axios';
export default {
  name: 'avatar',

  inject: ['teamIdentityClient'],

  props: {
    userId: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: false,
      default: null
    },
    size: {
      required: false,
      default: 50
    },
    showAvatarReplacement: {
      require: false,
      default: true
    }
  },

  data() {
    return {
      teamMembers: null,
      isLoading: true,
      error: false
    };
  },

  async created() {
    this.teamMembers = await this.teamIdentityClient.getTeamMembers();
    try {
      if (this.avatar) {
        await axios.get(this.avatar);
        this.error = false;
      }
    } catch (error) {
      this.error = true;
    }
    this.isLoading = false;
  },

  computed: {
    showAvatar() {
      return !this.isLoading && this.avatar && !this.error;
    },

    avatar() {
      let member = this.teamMembers.find(m => m.userId === this.userId);
      let urlPath = this.url || (member && member.avatar && member.avatar.links && member.avatar.links.self && member.avatar.links.self.href);
      if (!urlPath) {
        return null;
      }
      let url = new URL(urlPath);
      if (!url.searchParams) {
        url.searchParams = new URLSearchParams();
      }
      url.searchParams.set('s', this.size);
      return url;
    },

    replacementStyle() {
      return {
        'font-size': `${this.size}px`,
        'line-height': `${this.size}px`
      };
    }
  }
};
</script>
