<template>
  <div class="news-container">
    <input type="text" hidden>
    <p v-for="item in fetchedNews" v-bind:key="item.id">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>
        {{item.domain}}
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['fetchedNews'])
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style scoped>
</style>