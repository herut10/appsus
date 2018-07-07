'use strict'

export default {
    name: 'btn-add',

    template: `
<section class="btn-add">
<button  @click="emitAdd">+</button>
</section>
`,
    methods: {
        emitAdd() {
            this.$emit('add')
        },
    },

}