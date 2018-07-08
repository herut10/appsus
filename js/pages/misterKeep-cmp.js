'use strict'

import noteTxt from '../misterKeeper-cmps/note-txt-cmp.js'
import noteImg from '../misterKeeper-cmps/note-img-cmp.js'
import noteList from '../misterKeeper-cmps/note-list-cmp.js'
import misterKeepService from '../services/misterKeep-service.js'
// import noteListEdit from '../misterKeeper-cmps/note-list-edit-cmp.js'

export default {
    name: 'misterKeep',
    template: `
<transition
        name="custom-classes-transition"
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated bounceOutRight">
    <section class="misterKeeper" v-if="editedNote">
        <h1>
            mister keeper
    <input v-model="editedNote.data.txt" @input="saveNoteTxt(editedNote)" type="text" placeholder="Take a note..."/>

           <component :is="note.type"
                 :data="note.data"
                 v-for="note in notes" :key="note.id" @click.native="selected(note)" >
            </component>
           
        </h1>
    </section>
</transition>
    `,
    created() {
        misterKeepService.query()
            .then(notes => {
                this.notes = notes;
            })
    },
    data() {
        return {
            selectedNote: null,
            notes: [],
            editedNote: misterKeepService.emptyTxtNote(),


        }
    },
    components: {
        noteTxt,
        noteImg,
        noteList,
        // noteListEdit

    },
    methods: {

        selected(note) {
                this.$router.push(`misterKeeper/edit/${note.id}`);
            },

            saveNoteTxt(note){
                misterKeepService.saveNoteTxt(note)
                .then(note => {
                    this.selected(note);
                })
        }

        },




        // focus(){
        //     this.$router.push(misterKeeper/edit)
        // }

   


}