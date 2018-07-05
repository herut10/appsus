'use strict'

import noteTxt from '../misterKeeper-cmps/note-txt-cmp.js'
import noteImg from '../misterKeeper-cmps/note-img-cmp.js'
import misterKeepService from '../services/misterKeep-service.js'

export default {
    template: `
    <section class="misterKeeper">
        <h1>
            mister keeper

            <!-- <note-txt :data="{title: 'yaron'}"></note-txt>
           <component is="note-txt" :data="{title: 'yaron'}"></component> -->
           <component :is="note.type"
                 :data="note.data"
                 v-for="note in notes" :key="note.id">
                </component>
           
        </h1>
    </section>
    `,
    created(){
        misterKeepService.query()
        .then(notes =>{
            this.notes = notes;
        })
    },
    data() {
        return {

            notes: []
        }
    },
    components: {
        noteTxt,
        noteImg

    }

}