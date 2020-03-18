<template>
  <div>
    <p v-for="job in fetchedJobs" v-bind:key="job.id">
      <a v-bind:href="job.url">{{ job.title }}</a>
      <small>{{job.domain}}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['fetchedJobs'])
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>