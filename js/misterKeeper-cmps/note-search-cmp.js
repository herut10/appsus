
import misterKeepService from '../services/misterKeep-service.js'

export default {

    props:['data'],

    name: 'note-search',

    template: `

    <section class="note-search">
    {{data}}
    <input v-model="input" type="search" placeholder="Search for a note" @input="setNote"/>
    <li v-for="note in notes">
        {{note.txt}}
    </li>
    </section>

    `,
    data() {
        return {
            input: '',
            notes: []
        }
    },
    computed: {
        notesToShow() {
            
            let notesToShow = this.notes;

            notesToShow = notesToShow.filter(note => {
                return note.txt.includes(this.searchValue);
            });

        }
    }
}