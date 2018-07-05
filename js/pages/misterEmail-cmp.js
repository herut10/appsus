'use strict'

import emailService from '../services/misterEmail-service.js'
import emailList from '../misterEmail-cmps/email-list-cmp.js'

export default {
    template: `
    <section v-if="emails" class="about">
        <h1>mister email</h1>
        <email-list :emails="emails"></email-list>
    </section>
    `,
    created() {
        emailService.query()
            .then(emails => {
                this.emails = emails
                this.selectedEmail = emails[0]
            })
    },
    data() {
        return {
            emails: null,
            selectedEmail: null,
        }
    },
    components: {
        emailList
    }

}