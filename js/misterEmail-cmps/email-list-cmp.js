'use strict'
import emailPreview from './email-preview-cmp.js'

export default {
    props: ['emails'],
    template: `
    <section  class="email-list">
    <email-preview  v-for="email in emails"
                    :email="email" 
                    :key="email.id"
                    >
    </email-preview>
    </section>
    `,
    components: {
        emailPreview,
    },
}