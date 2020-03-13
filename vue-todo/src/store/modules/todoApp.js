const vueTodoDataName = "vue-todo-data"

const storage = {
    fetch() {
        const vueArr = localStorage.getItem(vueTodoDataName);
        if (vueArr != null && vueArr != "") {
            return JSON.parse(vueArr);
        }else {
            return [];
        }
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
        const todoArr = state.todoItems;
        todoArr.push({ id: todoArr.length == 0 ? 0 : todoArr[todoArr.length - 1].id+1, completed: false, item:todoitem});
        localStorage.setItem(vueTodoDataName, JSON.stringify(todoArr));
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