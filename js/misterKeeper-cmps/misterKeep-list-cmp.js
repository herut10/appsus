
'use strict'

import noteTxt from '../misterKeeper-cmps/note-txt-cmp.js'
import noteImg from '../misterKeeper-cmps/note-img-cmp.js'
// import noteList from '../misterKeeper-cmps/note-list-cmp.js'

import misterKeepService from '../services/misterKeep-service.js'
// import noteListEdit from '../misterKeeper-cmps/note-list-edit-cmp.js'

export default {
    props: ['notes'],

    name: 'misterKeep-list',
    template: `
    <section class="misterKeep-list" v-if="editedNote">
     
    <input v-model="editedNote.data.txt" @input="saveNoteTxt(editedNote)" type="text" placeholder="Take a note..."/>
            <!-- <note-txt :data="{title: 'yaron'}"></note-txt>
           <component is="note-txt" :data="{title: 'yaron'}"></component> 
         @click.native="setEditNote(note)" -->
           <component :is="note.type"
                 :data="note.data"
                 v-for="note in notes" :key="note.id" @click.native="selected(note)"
           
                 >
                 <!-- <router-link :to="'/book/edit/' + note.id">Edit</router-link> -->
                 <!-- <input type="color" v-model="note.color"  /> -->
                </component>
                <!-- <noteListEdit ></noteListEdit> -->
                <!-- @change="changeBackgroundColor($event)" -->
           
        </h1>
    </section>
    `,
    data(){
        return{
            editedNote: misterKeepService.emptyTxtNote(),
        }
    },
    components: {
        noteTxt,
        noteImg,
   

    },
    methods: {

        selected(note) {
            // if (note.type !== 'note-list') {
            this.$router.push(`misterKeeper/edit/${note.id}`);
            // }
        },

        saveNoteTxt(note) {
            misterKeepService.saveNoteTxt(note)
                .then(note => {
                    this.selected(note);
                })
        }

    },
}
