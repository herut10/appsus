'use strict'

export default {
    name: 'btn-add',

    template: `
<section class="btn-add">
<button class="btn-add far fa-plus-square fa-1x" @click="emitAdd"></button>
</section>
`,
    methods: {
        emitAdd() {
            this.$emit('add')
        },
    },

}