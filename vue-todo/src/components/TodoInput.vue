<template>
  <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>

        <Modal v-if="showModal">
            <h3 slot="header">경고!!</h3>
            <p slot="body">경고의 바디~~오예~~</p>
            <span slot="footer">
                <button @click="showModal = false">okok</button>
            </span>
        </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'
import { mapMutations } from 'vuex'
export default {
    data (){
        return {
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        addTodo() {
            if(this.newTodoItem !== '') {
                // this.$emit('addTodoItem', this.newTodoItem)
                this.$store.commit('addOneItem', this.newTodoItem.trim());
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput() {
            this.newTodoItem = '';
        }
    },
    components: {
        Modal
    }
}
</script>

<style scoped>
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
        height: 80%;
        width: calc(100% - 5rem);
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
</style>