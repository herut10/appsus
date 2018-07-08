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

    <section class="misterKeeper " v-if="editedNote">
   
    <section class="search" v-if="notes">
    <input v-model="searchValue" type="search" placeholder="Search for a note" /> 
    </section>
   
    <input v-model="editedNote.data.txt" @input="saveNoteTxt(editedNote)" type="text" placeholder="Take a note..."/>

<div class="notes-container flex flex-wrap clean-list space-between">
           <component :is="note.type"
                 :data="note.data"
                 v-for="note in notesToShow" :key="note.id" @click.native="selected(note)"
                 :style="{background: note.color}" >
            </component>
            </div>
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
            searchValue: ''


        }
    },
    components: {
        noteTxt,
        noteImg,
        noteList


    },
    methods: {

        selected(note) {
            this.$router.push(`misterKeeper/edit/${note.id}`);
        },

        saveNoteTxt(note) {
            misterKeepService.saveNote(note)
                .then(note => {
                    this.selected(note);
                })
        },

    },
    computed: {
        notesToShow() {
            return this.notes.filter(note => {
                return note.data.title.includes(this.searchValue);
            });
        }
    },







}