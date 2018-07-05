'use strict'

export default {
    props: ['email'],
    template: `
    <section  class="email-details">
        {{email.sentAt}}
        {{email.subject}}
        <pre>{{email.body}}</pre>
    </section>
    `,
}