<template>
  <div>
    <section>
      <h2>{{item.title.slice(8)}}</h2>
      <div class="user-container">
        <i class="fas fa-user"></i>
        <router-link v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
      </div>
      <p>{{item.time_ago}}</p>
      <p v-html="item.content"></p>
    </section>
    <section>
      <h2>comment</h2>
      <ul>
        <li v-for="comment in item.comments" v-bind:key="comment.id">
          <div class="user-container">
            <i class="fas fa-user"></i>
            <router-link v-bind:to="`/user/${item.user}`">{{comment.user}}</router-link>
          </div>
          <p v-html="comment.content"></p>
          <ul v-if="comment.comments.length > 0">
            <li v-for="subComment in comment.comments" v-bind:key="subComment.id">
              <p v-html="subComment.content"></p>
            </li>
          </ul>
          
        </li>
      </ul>
    </section>
    <!-- <p v-for="comment in item.comments" v-bind:key="comment.id" v-html="comment.content"></p> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
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
  section:nth-of-type(2) > ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  section:nth-of-type(2) > ul li {
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
  }
  section:nth-of-type(2) > ul li > ul {
    margin: 0 20px;
    padding: 0;
    list-style: none;
  }
  div.user-container {
    color: #555;
    display: inline-block;
  }
  div.user-container > i {
    font-size: 1.2rem;
    padding-right: 7px;
  }
  div.user-container > a:link,
  div.user-container > a:visited {
    text-decoration: none;
    color: #555;
  }
  section:nth-of-type(1) > p:nth-of-type(1)::before {
    content: "|";
    padding-right: 10px;
  }
  section:nth-of-type(1) > p:nth-of-type(1) {
    display: inline-block;
    color: #555;
    padding-left: 15px;
  }
</style>