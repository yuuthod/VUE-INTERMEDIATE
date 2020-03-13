<template>
    <div>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem) in this.todoItems.slice().reverse()" v-bind:key="todoItem.id" class="shadow">
                <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
                    v-on:click="toggleComplete(todoItem)">
                </i>
                <span v-bind:class="{textCompleted : todoItem.completed}">{{todoItem.item}}</span>
                <span class="removeBtn" v-on:click="removeTodo(todoItem)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </transition-group>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    methods: {
        ...mapMutations({
            removeTodo: 'removeOneItem',
            toggleComplete: 'toggleOneItem'
        })
    },
    computed: {
        // ...mapGetters(['storedTodoItems'])
        // 메서드명을 변경하려면
        ...mapGetters({
            todoItems: 'storedTodoItems'
        })
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

    /* 리스트 아이템 트렌지션 효과 */
    .list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }
</style>