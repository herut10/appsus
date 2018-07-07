'use strict'

import btnDelete from '../general-cmps/btn-delete-cmp.js'
import emailService from '../services/misterEmail-service.js'

export default {
    props: ['email'],
    template: `
    <section  v-if="email" class="email-details">
        <btn-delete  @delete="removeEmail"></btn-delete>
        <button @click="$emit('add')">reply</button>
        {{timeRecieved}}
        {{email.subject}}
    </section>
    `,
    components: {
        btnDelete,
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