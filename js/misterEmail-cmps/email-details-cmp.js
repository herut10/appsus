'use strict'

import btnDelete from '../general-cmps/btn-delete-cmp.js'
import btnBack from '../general-cmps/back-button-cmp.js'
import emailService from '../services/misterEmail-service.js'

export default {
    props: ['email'],
    template: `
    <section  v-if="email" class="email-details flex column">
        <div class="flex justify-between" >
            <btn-back @back="$emit('back')"></btn-back>
            <btn-delete  @delete="removeEmail" ></btn-delete>
            <button @click="$emit('add')">reply</button>
        </div>

        <h1>{{timeRecieved}} {{email.subject}}</h1>
        <pre>{{email.body}}</pre>
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
            return emailService.timeRecieved(this.email.sentAt)
        }
    }
}