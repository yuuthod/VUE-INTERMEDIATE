<template>
  <div id="app" class="container">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="this.loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';

export default {
  components: {
    ToolBar,
    Spinner
  },
  data() {
    return {
      loadingStatus: false
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    // event 객체는 계속 쌓이기 때문에 앱을 종료할때 이벤트를 모두 종료해줘야 한다. 
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
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
  .page-enter-active {
    transition: opacity 1s;
  }
  .page-enter {
    opacity: 0;
  }
  /* .page-leave-active {
    transition: opacity 10s;
  } */
  .page-leave-to {
    opacity: 0;
  }
</style>

