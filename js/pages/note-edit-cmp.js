import misterKeepService from '../services/misterKeep-service.js'

export default {

    // props: ['noteToEdit'],

    name: 'note-list-edit',

    template: `
    
       <section class="note-list-edit" >

{{editedNote}}
    <h1>EDIT</h1>
    <!-- v-if="editedNote.type==='note-txt'" -->
<section class="note-txt" v-if="editedNote" >
    <div v-if="editedNote.type==='note-txt'" >
    <input type="text" v-model="editedNote.data.title"></input>
<input  type="text" v-model="editedNote.data.txt"></input>
<button @click="saveNote()">Save</button>
    </div>
<div v-else-if="editedNote.type==='note-img'" >
    
{{editedNote.type}}
<img :src="editedNote.data.src" >
</div>
<div v-else-if="editedNote.type==='note-list'" >
<ul v-for="todo in editedNote.data.todos" >
  <li >{{todo}}</li>
</ul>
</div>
</section>
           <!-- <button v-on:click="$emit('back')">close</button>

            <h3>Add Car</h3>
            {{}}
            <input type="text" 
                v-model="newCar.vendor" 
                placeholder="Vendor name" />

            <input type="number" v-model.number="newCar.year" placeholder="Car year" />
            <button v-on:click="saveCar">Save</button>
            <button v-on:click="$emit('back')">Cancel</button> -->
        </section>
    
    `,
    data() {
        return {
            editedNote: null,
            // title: editedNote.data.title,
            // txt: editedNote.data.txt

            // noteType: null,
            // noteToEdit: this.noteToEdit,

        }
        // var toEdit = (this.carToEdit)? {...this.carToEdit} : carService.emptyCar();

        // return {
        //     newCar: toEdit,
        // }
    },
    created() {

        console.log(this.$route.params.noteId)
        const { noteId } = this.$route.params;
        if (noteId) {
            misterKeepService.getNoteById(noteId)
                .then(note => {
                    this.editedNote = note;
                    // JSON.parse(JSON.stringify(note));
                    console.log(this.editedNote)
                })
        }
        // console.log(this.editedNote)
        // this.r = note.type;
        // console.log(noteType)
    },

    methods: {
        saveNote(){
            console.log('Saving', this.editedNote);
            misterKeepService.saveNote(this.editedBook)

        }
        // saveCar() {
        //     this.$emit('save-car', this.newCar);
        //     this.newCar =  carService.emptyCar();
        // }
    }


}