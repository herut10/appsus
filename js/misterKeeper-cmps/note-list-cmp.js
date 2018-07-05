'use strict'

// import  './note-list-edit-cmp.js'

export default {
    props: ['data'],
    name: 'note-list',

    template: `
<section class="note-list">

<!-- //   <input type="text" id="myInput" >
//   <span onclick="newElement()" class="addBtn">Add</span>
// </div> -->

<ul v-for="todo in data.todos" >
  <li >{{todo}}</li>
</ul>
</section>
`,
methods:{


},


}