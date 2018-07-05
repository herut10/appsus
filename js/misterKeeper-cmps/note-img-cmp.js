'use strict'



export default {
    props: ['data'],
    name: 'note-img',

    template: `
<section class="note-img">
<img :src="data.src" >

</section>
`,



}
