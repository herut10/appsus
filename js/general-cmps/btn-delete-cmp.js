'use strict'

export default {
    name: 'btn-delete',
    props: ['id'],

    template: `
<section class="btn-delete">
<button  @click="emitDelete">X</button>
</section>
`,
    methods: {
        emitDelete() {
            this.$emit('delete', this.id)
        },
    },

}