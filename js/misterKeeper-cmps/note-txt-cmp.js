import utilService from '../services/util.service.js'
import btnDelete from '../general-cmps/btn-delete-cmp.js'

export default {
    props: ['data'],
    name: 'note-txt',

    template: `
<section class="note-txt"  >
<li>{{data.title}}</li>
<li>{{data.txt}}</li>
<btn-delete @delete="removeNote"></btn-delete>
</section>
`,
    data() {
        return {

        }
    },
    methods: {
        removeNote() {
            // debugger
            this.$emit('delete')
        }

    },
    components: {
        btnDelete,
    },
}
