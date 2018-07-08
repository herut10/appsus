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