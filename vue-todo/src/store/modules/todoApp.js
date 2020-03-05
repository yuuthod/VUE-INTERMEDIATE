const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length > 0) {
            for (let i=1; i<localStorage.length; i++) {
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server' && localStorage.key(i) !== 'csCursors') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
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
        let obj = {completed: false, item:todoitem}
        localStorage.setItem(todoitem,JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeOneItem(state, payload){
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1)
    },
    toggleOneItem(state, payload){
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state){
        localStorage.clear();
        state.todoItems = [];
    }
};

// default : 한개의 파일에서 하나만 추출될 수 있다는 의미
export default {
    state,
    getters,
    mutations
}