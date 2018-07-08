'use strict'

import emailService from '../services/misterEmail-service.js'
import emailList from '../misterEmail-cmps/email-list-cmp.js'
import emailDetails from '../misterEmail-cmps/email-details-cmp.js'
import emailStatus from '../misterEmail-cmps/email-status-cmp.js'
import emailFilter from '../misterEmail-cmps/email-filter-cmp.js'
import emailSort from '../misterEmail-cmps/email-sort-cmp.js'
import emailCompose from '../misterEmail-cmps/email-compose-cmp.js'



export default {
    template: `
<transition
        name="custom-classes-transition"
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated bounceOutRight">

    <section v-if="emails" class="misterEmail">

        <main style="height: 76vh;">

            <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInUp"
                leave-active-class="animated bounceOutDown">


                <email-details v-if="selectedEmail" @back="unselect" @add="onAdd(selectedEmail); unselect()"  @delete="removeEmail(); unselect()" :email="selectedEmail"></email-details>
                
                <email-compose @back="composing=false"  @add="addNewMail" v-if="composing" :email="emailReply"></email-compose>
            
            </transition>
                 
                <div style="height: 100%;" >
                    <email-sort @dosort="onDoSort"></email-sort>
                    <email-filter @dofilter="onDoFilter"></email-filter>
                    <email-list @add="unselect();onAdd(null)" :emails="emailsForDisplay"></email-list>
                </div>

        </main>
        <footer>
        <email-status :emails="emails"></email-status>
        </footer>

    </section>




</transition>

    `,
    computed: {
        emailsForDisplay() {
            var dispEmails;
            if (!this.filter) {
                dispEmails = this.emails.slice()
            } else {
                dispEmails = this.emails.filter(email => {
                    return email.subject.includes(this.filter.txt) &&
                        (this.filter.filterBy === 'all' ||
                            ((this.filter.filterBy === 'read') === email.isRead))
                })
            }
            if (!this.sort) {
                return dispEmails
            }
            if (this.sort.sortBy === 'date') {
                dispEmails.sort(emailService.compareByDate)
            } else if (this.sort.sortBy === 'subject') {
                dispEmails.sort(emailService.compareBySubject)
            }
            if (this.sort.reversed) {
                dispEmails = dispEmails.reverse()
            }
            return dispEmails

        }
    },
    created() {
        emailService.query()
            .then(emails => {
                this.emails = emails
                emailService.saveEmails(emails)
                return this.$route.params.id
            })
            .then(id => {
                this.updateUrl(id)
            })
    },
    methods: {
        unselect() {
            this.selectedEmail = null

            this.$router.push('/misterEmail')
        },
        addNewMail(email) {
            this.emails.push(email)
            this.emailReply = null
            this.composing = false
        },
        onAdd(email) {
            this.emailReply = email
            this.composing = true
        },
        onDoFilter(filter) {
            this.filter = filter
        },
        onDoSort(sort) {
            this.sort = sort
        },
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
            if (id) {
                var foundEmail = this.emails.find(email => email.id === id)
                if (foundEmail) {
                    this.selectedEmail = foundEmail
                } else {
                    this.selectedEmail = this.emails[0]

                    this.$router.push(this.selectedEmail.id)
                }
                this.selectedEmail.isRead = true
            }
        }
    },
    watch: {
        '$route.params.id': {
            handler: function (id) { // watch it
                this.updateUrl(id)
            },
            deep: true,
        },
        emails: {

            handler: function (newemails) { // watch it
                emailService.saveEmails(newemails)
            },
            deep: true,
        }
    },

    data() {
        return {
            emails: null,
            selectedEmail: null,
            filter: null,
            sort: null,
            composing: false,
            emailReply: null
        }
    },
    components: {
        emailList,
        emailDetails,
        emailStatus,
        emailFilter,
        emailSort,
        emailCompose,
    }

}