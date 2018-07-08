'use strict'

import misterKeepService from '../services/misterKeep-service.js'
import btnDelete from '../general-cmps/btn-delete-cmp.js'

export default {
    props: ['data'],
    name: 'note-img',

    template: `
<section class="note-img">
<div>{{data.id}}
<img :src="data.src" >
<btn-delete @delete="removeNote"></btn-delete>
</div>

</section>
`,
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
