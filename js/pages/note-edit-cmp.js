import misterKeepService from '../services/misterKeep-service.js'

import backBtn from '../general-cmps/back-button-cmp.js'


export default {

    name: 'note-list-edit',

    template: `
    
       <section class="note-list-edit"  >

{{editedNote}}
    <h1>EDIT</h1>
    <!-- background: editedNote.color -->
    <!-- :style="{background: editedNote.color}" -->
    <section :style="{background: editedNote.color}" :class="{noteTxt: isTxt}" v-if="editedNote"  >

    <div  class="editArea" ref="editArea" v-if="editedNote.type==='note-txt'" >
    <input type="text" v-model="editedNote.data.title"></input>
    <input  type="text" v-model="editedNote.data.txt" autofocus></input>
    <input type="color" v-model="editedNote.color"  /> 
    <back-btn class="btn-back" @back="returnToList()"></back-btn>
    </div>

    <div v-else-if="editedNote.type==='note-img'" >
    {{editedNote.type}}

<input type="text" v-model="editedNote.data.title"></input>
    <input type="file" @change="imageUpdate">
    <img ref="img" :src="editedNote.data.src" >
    <input type="color" v-model="editedNote.color"   /> 
    <button @click="returnToList()">Return</button>

    </div>
    <div v-else-if="editedNote.type==='note-list'" >
    <ul v-for="todo in editedNote.data.todos"  >
    <li  @click="editList($event)">{{todo}}</li>
    </ul>
    </div>
  
    </section>

        </section>
    
    `,
    data() {
        return {
            editedNote: null,
            isTxt: true,
            // editedTodo: null,       
        }

    },
    created() {
        // debugger;
        console.log(this.$route.params.noteId)
        const { noteId } = this.$route.params;
        if (noteId) {
            misterKeepService.getNoteById(noteId)
                .then(note => {
                    this.editedNote = note;
                })
        }

    },

    methods: {

        returnToList() {
            this.$router.push('/misterKeeper');
        },
        imageUpdate(event) {
            // debugger
            this.$refs.img.src = `img/${event.target.files[0].name}`
            this.editedNote.data.src = `img/${event.target.files[0].name}`;
        },
        // editList(event){
        //     //  editedTodo = event.target.text
        //     // console.log(this.$refs.todo)
        //     event.target.setAttribute("type", "input");
        // }



    },
    components: {
        backBtn
    }



}