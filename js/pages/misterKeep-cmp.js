'use strict'
import noteSearch from '../misterKeeper-cmps/note-search-cmp.js'
import noteTxt from '../misterKeeper-cmps/note-txt-cmp.js'
import noteImg from '../misterKeeper-cmps/note-img-cmp.js'
import noteList from '../misterKeeper-cmps/note-list-cmp.js'
// import noteSearch from '../misterKeeper-cmps/note-search-cmp.js'
import misterKeepService from '../services/misterKeep-service.js'
// import noteListEdit from '../misterKeeper-cmps/note-list-edit-cmp.js'

export default {
    name: 'misterKeep',
    template: `
    <section class="misterKeeper" v-if="editedNote">
 
        <h1>
            mister keeper
    <note-search></note-search>
        
    <input v-model="editedNote.data.txt" @input="saveNoteTxt(editedNote)" type="text" placeholder="Take a note..."/>
            <!-- <note-txt :data="{title: 'yaron'}"></note-txt>
           <component is="note-txt" :data="{title: 'yaron'}"></component> 
         @click.native="setEditNote(note)" -->
           <component :is="note.type"
                 :data="note.data"
                 v-for="note in notes" :key="note.id" @click.native="selected(note)" >
                 <!-- <router-link :to="'/book/edit/' + note.id">Edit</router-link> -->
                 <input type="color" v-model="note.color"  />
                </component>
                <!-- <noteListEdit ></noteListEdit> -->
                <!-- @change="changeBackgroundColor($event)" -->
           
        </h1>
    </section>
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
            searchValue: ''

        }
    },
    computed: {

        
    },
        components: {
            noteTxt,
            noteImg,
            noteList,
            noteSearch
            // noteListEdit

        },
        methods: {

            selected(note) {
                if (note.type !== 'note-list') {
                    this.$router.push(`misterKeeper/edit/${note.id}`);
                }
            },

            saveNoteTxt(note) {
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