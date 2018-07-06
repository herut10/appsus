'use strict'

export default {
    name: 'btn-delete',

    template: `
<section class="btn-delete">
<button  @click="emitDelete">X</button>
</section>
`,
    methods: {
        emitDelete() {
            this.$emit('delete')
        },
    },

}