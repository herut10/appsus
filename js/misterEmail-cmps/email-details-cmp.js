'use strict'

import btnDelete from '../general-cmps/btn-delete-cmp.js'

export default {
    props: ['email'],
    template: `
    <section v-if="email" class="email-details">
        <btn-delete></btn-delete>
        {{email.sentAt}}
        {{email.subject}}
        <pre>{{email.body}}</pre>
    </section>
    `,
    components: {
        btnDelete,
    }
}