<template>
  <div>
    <section>
      <user-profile v-bind:info="item">
        <span slot="username">{{ item.user }}</span>
        <sapn slot="time">{{ 'posted ' + item.time_ago }}</sapn>
      </user-profile>
    </section>
    <section>
      <h2>{{item.title}}</h2>
      <p v-html="item.content"></p>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserProfile from '../components/UserProfile.vue'

export default {
  components: {
    UserProfile
  },
  computed:{
    ...mapGetters({
      item: 'fetchedItem'
    })
  },
  created() {
    this.$store.dispatch('FETCH_ITEM', this.$route.params.id);
  }
}
</script>

<style scoped>
</style>