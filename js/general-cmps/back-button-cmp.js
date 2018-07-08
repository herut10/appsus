'use strict'


export default {
    name: 'btn-back',

    template: `
<section >
<button class="btn-back fas fa-arrow-left fa-1x" @click="emitback"></button>
</section>
`,
    methods: {
        emitback() {
            this.$emit('back')
        },
    },

}