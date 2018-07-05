'use strict'

import noteTxt from '../misterKeeper-cmps/note-txt-cmp.js'
import noteImg from '../misterKeeper-cmps/note-img-cmp.js'
import noteList from '../misterKeeper-cmps/note-list-cmp.js'
import misterKeepService from '../services/misterKeep-service.js'
// import noteListEdit from '../misterKeeper-cmps/note-list-edit-cmp.js'

export default {
    name: 'misterKeep',
    template: `
    <section class="misterKeeper">
        <h1>
            mister keeper

            <!-- <note-txt :data="{title: 'yaron'}"></note-txt>
           <component is="note-txt" :data="{title: 'yaron'}"></component> 
         @click.native="setEditNote(note)" -->
           <component :is="note.type"
                 :data="note.data"
                 v-for="note in notes" :key="note.id" @click.native="selected(note)" >
                 <!-- <router-link :to="'/book/edit/' + note.id">Edit</router-link> -->
                </component>
                <!-- <noteListEdit ></noteListEdit> -->
           
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
            notes: []
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

        }

    },


}