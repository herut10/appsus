'use strict'

import noteTxt from '../misterKeeper-cmps/note-txt-cmp.js'
import noteImg from '../misterKeeper-cmps/note-img-cmp.js'
import noteList from '../misterKeeper-cmps/note-list-cmp.js'
import misterKeepService from '../services/misterKeep-service.js'
import addBtn from '../general-cmps/add-button-cmp.js'
// import noteListEdit from '../misterKeeper-cmps/note-list-edit-cmp.js'

export default {
    name: 'misterKeep',
    template: `
<transition
        name="custom-classes-transition"
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated bounceOutRight">

    <section class="misterKeeper " v-if="editedNote">
   
    <section class="search">
        <add-btn  @add="selectImg"></add-btn>
        <input v-model="searchValue" type="search" placeholder="Search for a note" /> 
        <input v-model.lazy="editedNote.data.txt" @change="saveNoteTxt(editedNote)" type="text" placeholder="Take a note..."/>
    </section>
   

            
            <transition-group class="notes-container flex flex-wrap clean-list space-between"
            name="custom-classes-transition"
            enter-active-class="animated bounceInLeft"
            leave-active-class="animated bounceOutRight">
                    <component :is="note.type"
                            :data="note.data"
                            v-for="note in notesToShow" 
                            :key="note.id"
                            @click.native="selected(note)"
                            @delete="removeNote(note.id)"
                            :style="{background: note.color}" >
                        </component>
            </transition-group>
            
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
        noteList,
        addBtn


    },
    methods: {
        selectImg() {
            let img = misterKeepService.emptyImgNote();
            misterKeepService.saveNote(img)
                .then(img => {
                    this.selected(img);
                })

        },
        removeNote(id) {
            var noteIdx = this.notes.findIndex(note => note.id === id)
            this.notes.splice(noteIdx, 1)
        },

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