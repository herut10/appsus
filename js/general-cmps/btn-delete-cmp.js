'use strict'

export default {
    name: 'btn-delete',

template: `
<section class="btn-delete">
<button  @click.native="delete">X</button>
</section>
`,
    methods: {
        delete(idx) {
            this.$emit('delete', idx)
        },
    },

}