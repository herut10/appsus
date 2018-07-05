'use strict'



export default {
    props: ['data'],
    name: 'note-img',

    template: `

<img :src="data.src" :alt="data.altSrc">

`,



}
