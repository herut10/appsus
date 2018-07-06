'use strict'

export default {
    name: 'progress-bar',
    props: ['total', 'progress'],

    template: `
<section class="progress-bar flex justify-center align-center" >

</section>
`,
    data() {
        debugger
        var progresion = []
        for (let i = 0; i < this.total; i++) {
            progresion.push({
                progressed: i < this.progress
            })
        }
        return {
            progresion
        }
    },
    methods: {

    },

}