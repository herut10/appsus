'use strict'

import emailService from '../services/misterEmail-service.js'
import emailList from '../misterEmail-cmps/email-list-cmp.js'
import emailDetails from '../misterEmail-cmps/email-details-cmp.js'


export default {
    template: `
    <section v-if="emails" class="about">
        <h1>mister email</h1>
        <email-list :emails="emails"></email-list>
        <email-details :email="selectedEmail"></email-details>
    </section>
    `,
    created() {
        emailService.query()
            .then(emails => {
                this.emails = emails
                return this.$route.params.id
            }).then(id => {
                this.updateUrl(id)
            })

    },
    methods: {
        updateUrl(id) {
            {
                if (id) {
                    var foundEmail = this.emails.find(email => email.id === id)
                    if (foundEmail) {
                        this.selectedEmail = foundEmail
                    } else {
                        this.selectedEmail = this.emails[0]

                        this.$router.push(this.selectedEmail.id)
                    }
                } else {
                    this.selectedEmail = this.emails[0]
                    this.$router.push('misterEmail/' + this.selectedEmail.id)
                }
                
                this.selectedEmail.isRead = true
            }

        }
    },
    beforeRouteUpdate(to, from, next) {
        this.updateUrl(to.params.id)
        next()
    },

    data() {
        return {
            emails: null,
            selectedEmail: null,
        }
    },
    components: {
        emailList,
        emailDetails
    }

}