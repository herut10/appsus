'use strict'

import btnDelete from '../general-cmps/btn-delete-cmp.js'
import btnBack from '../general-cmps/back-button-cmp.js'
import emailService from '../services/misterEmail-service.js'

export default {
    props: ['email'],
    template: `
    <section  v-if="email" class="email-details flex column">
        <div class="btns-email flex justify-between" >
            <btn-back @back="$emit('back')"></btn-back>
            <btn-delete  @delete="removeEmail" ></btn-delete>
            <button class="fas fa-reply" @click="$emit('add')"></button>
        </div>
        <h2>subject: {{email.subject}}</h2>
        <hr>
        <h2>time: {{timeRecieved}} </h2>
        <h1>{{email.body}}</h1>
    </section>
    `,
    components: {
        btnDelete,
        btnBack
    },
    methods: {
        removeEmail() {
            this.$emit('delete')
        }
    },
    computed: {
        timeRecieved() {
            var dateString = new Date(this.email.sentAt).toTimeString()
            return dateString.slice(0, dateString.length - 2)
        }
    }
}