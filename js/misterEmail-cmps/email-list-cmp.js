'use strict'
import emailPreview from './email-preview-cmp.js'
import buttonAdd from '../general-cmps/add-button-cmp.js'


export default {
    props: ['emails'],
    template: `
    <section  class="email-list">
    <button-add @add="$emit('add')"></button-add>
    <button @click="mark(true)">mark read</button>
    <button @click="mark(false)">mark unread</button>
    <email-preview  v-for="(email, idx) in emails"
                    :email="email" 
                    @selected="onselected"
                    :key="email.id"
                    >
    </email-preview>
    </section>
    `,
    data() {
        return {
            selectedEmails: []
        }
    },
    watch: {
        emails: function (newVal) { // watch it
            this.selectedEmails = this.selectedEmails.filter(email => {
                return newVal.includes(email)
            })
        }
    },
    methods: {
        mark(read) {
            this.selectedEmails.forEach(email => {
                email.isRead = read
            });
        },
        onselected(selectedEmail) {
            var selectedIdx = this.selectedEmails.findIndex(email => {
                return email.id === selectedEmail.id
            })
            if (selectedIdx === -1) {
                this.selectedEmails.push(selectedEmail)
            } else {
                this.selectedEmails.splice(selectedIdx, 1)
            }
        }
    },
    components: {
        emailPreview,
        buttonAdd
    },
}