'use strict'

export default {
    name: 'btn-delete',

    template: `
<section class="btn-delete">
<button class="btn-delete fas fa-trash fa-1x" @click.stop="emitDelete"></button>
</section>
`,
    methods: {
        emitDelete() {
            this.$emit('delete')
        },
    },

}