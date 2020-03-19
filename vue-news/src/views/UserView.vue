<template>
  <div>
    <user-profile v-bind:info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="time">{{ 'joined ' + userInfo.created }}</span>
      <span slot="karma">{{ userInfo.karma }}</span>
    </user-profile>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import UserProfile from '../components/UserProfile.vue'

export default {
  components: {
    UserProfile,
  },
  computed:{
    // ...mapGetters({
    //   userInfo: 'fetchedUser'
    // })
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    this.$store.dispatch('FETCH_USER', this.$route.params.id);
  }
}
</script>

<style>

</style>