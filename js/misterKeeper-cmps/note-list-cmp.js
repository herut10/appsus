'use strict'
import misterKeepService from '../services/misterKeep-service.js'
// import  './note-list-edit-cmp.js'

export default {
  props: ['data'],

  name: 'note-list',

  template: `

<section class="note-list">

  {{data.title}}
  <!-- {{data.todos}} -->
  <ul>
  <li v-for="todo in data.todos">
  {{todo.txt}}
  </li>
</ul>
<!-- <input v-model="newTodo" 
placeholder="What do you need to do?" >
<button @click="addTodo">Add todo</button> -->

<!-- <ul class="list-item" v-if="todo"> -->
<!-- :class="{done: isChecked(task)}" -->
<!-- class="checkbox" @click="check" -->
<!-- v-if="todo === editingTask" v-auto-focus class="text-input" @keyup.enter="endEditing(todo)" @blur="endEditing(todo)" -->
<!-- <li v-for="todo in todos.txt" > -->

  <!-- <input type="checkbox" v-model="todo.isDone">
  
  <input type="text" v-model="todo.txt"> -->

<!-- {{todo.txt}}
{{data}} -->
  <!-- <label for="checkbox" v-if="task !== editingTask" @dblclick="editTask(task)">{{ task.text }}</label> -->
  
  <!-- <button class="delete" @click="removeTask(task)">X</button> -->

</section>
`,
  data() {
    return {}
    // return {

    //   newTodo: "",
    //   todos: this.data,
    //   todo: getTodosObj()

    // }

  },
  created() {
    console.log('tatata')

  },

  methods: {
    // addTodo(){
    //   console.log('todoadded')
    //   misterKeepService.notes
    // },
    // getTodosObj(){
    // debugger;
    //   var obj = this.data.txt.reduce(function(acc, cur, i) {
    //     acc[i] = cur;
    //     return acc;
    //   }, {});

    // }


  },


}



//   <input type="text" id="myInput" >
//   <span onclick="newElement()" class="addBtn">Add</span>
// </div> -->

// <!-- <form v-on:submit.prevent="addNewTodo">
//     <label for="new-todo">Add a todo</label>
//     <input
//       v-model="newTodoText"
//       id="new-todo"
//       placeholder="E.g. Feed the cat"
//     >
//     <button>Add</button>
//   </form>
//   <ul>
//     <li
//       is="todo-edit"
//       v-for="(todo, index) in todos"
//       v-bind:key="todo.id"
//       v-bind:title="todo.title"
//     ></li>
//   </ul> -->


// <!-- <ul v-for="todo in data.txt" >
//   <li v-model="text">{{todo}}</li>
// </ul> -->