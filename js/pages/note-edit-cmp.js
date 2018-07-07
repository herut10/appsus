import misterKeepService from '../services/misterKeep-service.js'




export default {

   

    name: 'note-list-edit',

    template: `
    
       <section class="note-list-edit"  >

{{editedNote}}
    <h1>EDIT</h1>

    <section class="note-txt" v-if="editedNote"  >
    <div class="editArea" ref="editArea" v-if="editedNote.type==='note-txt'" >
    <input type="text" v-model="editedNote.data.title"></input>
    <input  type="text" v-model="editedNote.data.txt" autofocus></input>
    <button @click="returnToList()">Return</button>
    </div>



    <div v-else-if="editedNote.type==='note-img'" >
    {{editedNote.type}}

    <input type="file" @change="imageUpdate">


    <img ref="img" :src="editedNote.data.src" >
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
            editedTodo: null,
            

            
        }

    },
    created() {

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
            this.$refs.img.src = `img/${event.target.files[0].name}`
            this.editedNote.data.src = `img/${event.target.files[0].name}`;
        },
        // editList(event){
        //     //  editedTodo = event.target.text
        //     // console.log(this.$refs.todo)
        //     event.target.setAttribute("type", "input");
        // }



    },





}