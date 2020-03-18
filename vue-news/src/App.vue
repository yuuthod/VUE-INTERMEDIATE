<template>
  <div id="app" class="container">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar'
export default {
  components: {
    ToolBar,
  }
}
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #202020;
  }
  a:hover {
    color: #42b883;
    text-decoration: underline;
  }

  /* Route */
  .page-enter-active, .page-leave-active {
    transition: opacity .5s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
  }
</style>
