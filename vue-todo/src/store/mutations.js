const addOneItem = (state, todoitem) => {
    let obj = {completed: false, item:todoitem}
    localStorage.setItem(todoitem,JSON.stringify(obj));
    state.todoItems.push(obj);
},
const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1)
},
const toggleOneItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
},
const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export { addOneItem, removeItem, toggleOneItem, clearAllItems}