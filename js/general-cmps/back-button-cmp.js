'use strict'

export default {
    name: 'btn-back',

    template: `
<section class="btn-back">
<button  @click="emitback"><-</button>
</section>
`,
    methods: {
        emitback() {
            this.$emit('back')
        },
    },

}