'use strict'

export default {
    name: 'btn-add',

    template: `

<button class="btn-add far fa-plus-square fa-1x" @click="emitAdd"></button>

`,
    methods: {
        emitAdd() {
            this.$emit('add')
        },
    },

}



// <transition
//         name="custom-classes-transition"
//         enter-active-class="animated bounceInLeft"
//         leave-active-class="animated bounceOutRight">

//     <section class="misterKeeper" v-if="editedNote">
   
//    <input v-model="searchValue" type="search" placeholder="Search for a note" @input="notesToShow" />   
   
//     <input v-model="editedNote.data.txt" @input="saveNoteTxt(editedNote)" type="text" placeholder="Take a note..."/>

//            <component :is="note.type"
//                  :data="note.data"
//                  v-for="note in notes" :key="note.id" @click.native="selected(note)" >
//             </component>
           
//     </section>
// </transition>



// computed: {
//     notesToShow() {

//         return this.notes.filter(note => {
//             return note.data.title.includes(this.searchValue);
//         });
//     }
// },


// <section class="search" v-if="notes">
// <input v-model="searchValue" type="search" placeholder="Search for a note" @input="notesToShow" /> 
// </section>