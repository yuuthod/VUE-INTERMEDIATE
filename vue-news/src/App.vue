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
  /* Route */
  .page-enter-active, .page-leave-active {
    transition: opacity .5s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
  }

  body {
    padding: 0;
    margin: 0;
  }
  div.container > div {
    margin: 20px;
  }
  div.container > div > p > a:link {
    color: #555;
    text-decoration: none;
    font-weight: bold;
    font-size: 15pt;;
  }
  div.container > div > p > a:hover {
    border-bottom: 2px solid #555;
  }
  div.container > div > p > small {
    padding-left: 10px;
    color: #bbb;
  }
</style>
