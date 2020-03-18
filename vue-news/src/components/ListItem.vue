<template>
  <div>
    <ul class="list-container">
      <li v-for="item in listItems" v-bind:key="item.id">
        <!-- point 점수 -->
        <div>
          {{ item.points || 0 }}
        </div>
        <!-- 기타정보 -->
        <div>
          <p>
            <a v-bind:href="item.url">{{ item.title }}</a>
          </p>
          <small>
            by <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
  created() {
    if(this.$route.name === "news") {
      this.$store.dispatch('FETCH_NEWS');
    }else if(this.$route.name === "ask") {
      this.$store.dispatch('FETCH_ASK');
    }else if(this.$route.name === "jobs") {
      this.$store.dispatch('FETCH_JOBS');
    }
  },
  computed: {
    // ...mapGetters(['fetchedNews', "fetchedAsk", "fetchedJobs"]),
    listItems() {
      console.log(this)
      if(this.$route.name === "news") {
        return this.$store.state.news;
      }else if(this.$route.name === "ask") {
        return this.$store.state.ask;
      }else {
        // jobs
        return this.$store.state.jobs;
      }
    },
  }
}
</script>

<style scoped>
.list-container {
list-style: none;
margin: 0;
padding: 0;
}
.list-container > li {
display: flex;
align-items: center;
border-bottom: 1px solid #eee;
}
/* point */
.list-container > li > div:nth-of-type(1) {
width: 80px;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
color: #42b883;
}
/* 정보 */
.list-container > li > div:nth-of-type(2) p {
margin: 0;
}
.list-container > li > div:nth-of-type(2) small,
.list-container > li > div:nth-of-type(2) small a {
color: #828282;
}
</style>