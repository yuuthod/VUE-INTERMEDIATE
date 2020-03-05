const vueTodoDataName = "vue-todo-data"

const storage = {
    fetch() {
        return JSON.parse(localStorage.getItem(vueTodoDataName));
    }
};

const state = {
    todoItems: storage.fetch()
};

const getters = {
    storedTodoItems(state){
        return state.todoItems;
    }
};

const mutations = {
    addOneItem(state, todoitem){
        state.todoItems.push({completed: false, item:todoitem});
        localStorage.setItem(vueTodoDataName,JSON.stringify(state.todoItems));
    },
    removeOneItem(state, todoItem){
        state.todoItems.splice(state.todoItems.indexOf(todoItem), 1)
        localStorage.setItem(vueTodoDataName,JSON.stringify(state.todoItems));
    },
    toggleOneItem(state, todoItem){
        let index = state.todoItems.indexOf(todoItem);
        state.todoItems[index].completed = !state.todoItems[index].completed;
        localStorage.setItem(vueTodoDataName,JSON.stringify(state.todoItems));
    },
    clearAllItems(state){
        state.todoItems = [];
        localStorage.clear();
        
    }
};

// default : 한개의 파일에서 하나만 추출될 수 있다는 의미
export default {
    state,
    getters,
    mutations
}