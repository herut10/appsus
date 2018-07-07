'use strict'



export default {
    props: ['data'],
    name: 'note-img',

    template: `
<section class="note-img">
<div>{{data.title}}
<img :src="data.src" >
</div>

</section>
`,



}
