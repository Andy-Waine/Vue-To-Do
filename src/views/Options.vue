<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>You Have {{ todosCount }} To-Do Items on Your List</h3>
    <div>
      <input 
        v-model="newTodoName"
        @keyup.enter="addTodo"
        placeholder="Add To-Do"
        type="text">
    </div>
    <div>
      <ul>
        <li v-for="(todo, i) in todos" :key="todo.id">
          <span>{{ todo.name }}</span>
          <button @click="deleteTodo(i)">Delete</button>
        </li>

     </ul>
    </div>
  </div>
</template>

<script>
export default {
  //data, methods, and computed are all OPTIONS
  data() {
    return {
      newTodoName: 'Add a To-Do',
      todos: [
        {
          id: 1,
          name: 'Item One'
        },
        {
          id: 2,
          name: 'Item Two'
        },
        {
          id: 3,
          name: 'Item Three'
        }
      ]
    }
  },
  computed: {
    todosCount(){
      return this.todos.length
    }
  },
  methods: {
    addTodo() {
      let newTodo = {
        //Date used as random ID
        id: Date.now(),
        name: this.newTodoName
      }
      this.todos.push(newTodo);
      //removes entry upon enter
      this.newTodoName = ''
    },
    deleteTodo(i) {
      //second parameter indicates # of objects to splice
      this.todos.splice(i, 1)
    }
  }
}
</script>

<style>
  ::placeholder { /* Chromium, Firefox, Opera, Safari 10.1+ */
    color: #f52789;
    opacity: 1; /* Firefox */
    margin-left: px;
  }

  input {
    color:#f52789;
    background-color: transparent;
    border: 1px solid #f52789;
    border-radius: 5px;
    height: 30px;
  }
  
  input:hover {
    border: 1px solid #f569ad;
  }


 ul {
  list-style: none;
  padding: 0;
  width: 200px;
  margin: 20px auto 0;
 }

 li {
  display: flex;
  margin-top: 5px;
  margin-bottom: 10px;
 }

 li span {
  flex-grow: 1;
  border: 1px solid #1685f8;
  border-radius: 5px;
 }

 li span:hover {
    border: 1px solid #63abf7;
 }

 li button {
  border-radius: 10px;
  margin-left: 10px;
  background-color: transparent;
  font-weight: bold;
  color: #f52789;
  border: 1px solid #f52789;
 }

 li button:hover{
  background-color: #f569ad;
  color: white;
 }
</style>
