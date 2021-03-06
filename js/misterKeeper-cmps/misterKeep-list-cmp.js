
'use strict'

import noteTxt from '../misterKeeper-cmps/note-txt-cmp.js'
import noteImg from '../misterKeeper-cmps/note-img-cmp.js'
import noteList from '../misterKeeper-cmps/note-list-cmp.js'


import misterKeepService from '../services/misterKeep-service.js'
// import noteListEdit from '../misterKeeper-cmps/note-list-edit-cmp.js'

export default {
    props: ['notes'],

    name: 'misterKeep-list',
    template: `
    <section class="misterKeep-list" v-if="editedNote">
   
    <div class="txt-input">
    <input class="txt-input" v-model="editedNote.data.txt" @input="saveNoteTxt(editedNote)" type="text" placeholder="Take a note..."/>
    </div>
    
            <!-- <note-txt :data="{title: 'yaron'}"></note-txt>
           <component is="note-txt" :data="{title: 'yaron'}"></component> 
         @click.native="setEditNote(note)" -->
         <!-- <div v-if="notes.length !== 0" >
         notes length : {{notes.length}}
                    <note-list :data="notes[1].data">
                    </note-list>
         </div> -->
         
         <!-- <button @click="selectList">Add list</button> -->
         <div class="list-container  ">
           <component 
                 v-for="note in notes" :key="note.id" @click.native="selected(note)"
                 :is="note.type"
                 :data="note.data"
                 @delete="removeNote(note.id)"
                 :style="{background: note.color}"
                 >

                 <!-- <router-link :to="'/book/edit/' + note.id">Edit</router-link> -->
                 <!-- <input type="color" v-model="note.color"  /> -->
                </component>
                </div>
                <!-- {{editedNote}} -->
                <!-- <noteListEdit ></noteListEdit> -->
                <!-- @change="changeBackgroundColor($event)" -->
           
        </h1>
    </section>
    `,
    data() {
        var emptyTxtNode = misterKeepService.emptyTxtNote()
        return {
            editedNote: emptyTxtNode,
            // styleObj: {
            //     'background-color': emptyTxtNode.color
            // }
        }
    },
    components: {
        noteTxt,
        noteImg,
        noteList,
        // addBtn


    },
    methods: {

        selected(note) {
            // if (note.type !== 'note-list') {
            this.$router.push(`misterKeeper/edit/${note.id}`);
            // }
        },
        saveNoteTxt(note) {

            misterKeepService.saveNote(note)
                .then(note => {
                    this.selected(note);
                })
        },
        removeNote(noteId) {
            this.$emit('delete', noteId)
        },
        selectList() {
            let list = misterKeepService.emptyListNote();
            misterKeepService.saveNote(list)
                .then(list => {
                    this.selected(list);
                })

        },


    },
}
