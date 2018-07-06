'use strict'

import emailService from '../services/misterEmail-service.js'
import emailList from '../misterEmail-cmps/email-list-cmp.js'
import emailDetails from '../misterEmail-cmps/email-details-cmp.js'
import emailStatus from '../misterEmail-cmps/email-status-cmp.js'


export default {
    template: `
    <section v-if="emails" class="misterEmail">
    <main>
        <h1>mister email</h1>
        <email-list :emails="emails"></email-list>
        <email-details v-if="selectedEmail" @delete="removeEmail" :email="selectedEmail"></email-details>
    </main>
    <footer>
    <email-status :emails="emails"></email-status>
    </footer>
    </section>

    `,
    created() {
        emailService.query()
            .then(emails => {
                this.emails = emails
                return this.$route.params.id
            })
            .then(id => {
                this.updateUrl(id)
            })
    },
    methods: {
        removeEmail() {
            var emailIdx = this.emails.findIndex(email => email === this.selectedEmail)
            this.emails.splice(emailIdx, 1)
            if (this.emails.length) {
                this.updateUrl(this.emails[0].id)
            } else {
                this.selectedEmail = null
            }
        },
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
        emailDetails,
        emailStatus
    }

}