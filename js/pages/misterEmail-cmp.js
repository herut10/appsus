'use strict'

import emailService from '../services/misterEmail-service.js'

export default {
    template: `
    <section class="about">
        <h1>mister email </h1>
    </section>
    `,
    created() {
        emailService()
            .then(emails => {
                this.emails = emails
            })
    },
    data() {
        return {
            emails: null
        }
    },
    components: {

    }

}