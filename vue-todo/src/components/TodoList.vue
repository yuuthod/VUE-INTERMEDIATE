<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
                <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
                    v-on:click="toggleComplete(todoItem, index)">
                </i>
                <span v-bind:class="{textCompleted : todoItem.completed}">{{todoItem.item}}</span>
                <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
            
        </ul>
    </div>
</template>

<script>
export default {
    data: function() {
        return{
            todoItems: []
        }
    },
    methods: {
        removeTodo: function(todoItem, index) {
            localStorage.removeItem(todoItem.item);
            this.todoItems.splice(index, 1)
        },
        toggleComplete: function(todoItem, index) {
            todoItem.completed = !todoItem.completed;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        }
    },
    // vue lifecycle
    // 인스턴스가 생성되자마자 호출되는 라이프사이클 훅(훅: created function 실행)
    created: function() {
        if(localStorage.length > 0) {
            for (let i=1; i<localStorage.length; i++) {
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server' && localStorage.key(i) !== 'csCursors') {
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
    }
}
</script>

<style>
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }
    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .checkBtn {
        line-height: 50px;
        color: #62acde;
        margin-right: 5px;
    }
    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
    .checkBtnCompleted {
        color: #b3adad;
    }
    .textCompleted {
        text-decoration: line-through;
        color: #b3adad;
    }   
</style>