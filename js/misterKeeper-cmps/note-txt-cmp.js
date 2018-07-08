import utilService from '../services/util.service.js'


export default {
    props: ['data'],
    name: 'note-txt',

    template: `
<section class="note-txt"  >
<li>{{data.title}}</li>
<li>{{data.txt}}</li>
</section>
`,
data(){
    return{
       
    }
}
}
