'use strict'

// import noteTxt from '../misterKeeper-cmps/note-txt-cmp.js'
// import noteImg from '../misterKeeper-cmps/note-img-cmp.js'
// import noteList from '../misterKeeper-cmps/note-list-cmp.js'
import misterKeepList from '../misterKeeper-cmps/misterKeep-list-cmp.js';

import misterKeepService from '../services/misterKeep-service.js'
// import noteListEdit from '../misterKeeper-cmps/note-list-edit-cmp.js'

export default {
    name: 'misterKeep',
    template: `
    <section class="misterKeeper" >
 
        <h1>
            mister keeper
    <section class="search" v-if="notes">
   <input v-model="searchValue" type="search" placeholder="Search for a note" @input="notesToShow" /> 
   </section>
   

<misterKeep-list @delete="removeNote" :notes="notesToShow" ></misterKeep-list>
           
        </h1>
    </section>
    `,
    created() {
        misterKeepService.query()
            .then(notes => {
                this.notes = notes
            })
    },
    data() {
        return {
            selectedNote: null,
            notes: [],
            searchValue: ''

        }
    },
    computed: {


    },
    components: {
        misterKeepList

    },
    methods: {
        removeNote(id) {
    
            var noteIdx = this.notes.findIndex(note => note.id === id)
            this.notes.splice(noteIdx, 1)
        }
    },

    computed: {
        notesToShow() {

            return this.notes.filter(note => {
                return note.data.title.includes(this.searchValue);
            });
        }
    },


}










// <!--         
//     <input v-model="editedNote.data.txt" @input="saveNoteTxt(editedNote)" type="text" placeholder="Take a note..."/>
//             <!-- <note-txt :data="{title: 'yaron'}"></note-txt>
//            <component is="note-txt" :data="{title: 'yaron'}"></component> 
//          @click.native="setEditNote(note)" -->
//            <!-- <component :is="note.type"
//                  :data="note.data"
//                  v-for="note in notes" :key="note.id" @click.native="selected(note)"

//                  > -->
//                  <!-- <router-link :to="'/book/edit/' + note.id">Edit</router-link> -->
//                  <!-- <input type="color" v-model="note.color"  /> -->
//                 <!-- </component> --> -->
//                 <!-- <noteListEdit ></noteListEdit> -->
//                 <!-- @change="changeBackgroundColor($event)" -->