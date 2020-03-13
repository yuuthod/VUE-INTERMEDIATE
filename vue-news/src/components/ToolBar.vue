<template>
  <Header>
      <router-link to="/news">News</router-link>
      <router-link to="/ask">Ask</router-link>
      <router-link to="/jobs">Jobs</router-link>
  </Header>
</template>

<script>
export default {

}
</script>

<style scoped>
  Header {
    color: white;
    background-color: #42b883;
    display: flex;
    padding: 15px 8px;
  }
  Header > a {
    margin-right: 20px;
    color: white;
  }
  Header > a:-webkit-any-link {
    text-decoration: none;
  }
  Header > .router-link-exact-active {
    color: #35495e;
    border-bottom: 3px solid #35495e;
  }
</style>