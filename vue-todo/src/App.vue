<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearItem="clearAllItem"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem(todoitem) {
      let obj = {completed: false, item:todoitem}
      localStorage.setItem(todoitem,JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1)
    },
    toggleOneItem(todoItem, index) {

      // 안티 패턴 ( props로 내렸던 data를 다시 event로 올려서 재접근 하는것은 좋지 않은 패턴 )
      // todoItem.completed = !todoItem.completed;
      // 해당 컴포넌트에 선언된 todoItems를 접근해서 조작하는 것이 좋다.
      this.todoitems[index].completed = !this.todoitems[index].completed;

      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItem() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created() {
      if(localStorage.length > 0) {
          for (let i=1; i<localStorage.length; i++) {
              if(localStorage.key(i) !== 'loglevel:webpack-dev-server' && localStorage.key(i) !== 'csCursors') {
                  this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
              }
          }
      }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F6;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>