'use strict'
import emailPreview from './email-preview-cmp.js'
import buttonAdd from '../general-cmps/add-button-cmp.js'


export default {
    props: ['emails'],
    template: `
    <section  class="email-list">
        <div class="flex justify-left">
            <button-add @add="$emit('add')"></button-add>
        </div>
            <email-preview  v-for="(email, idx) in emails"
                            :email="email" 
                            @selected="onselected"
                            :key="email.id"
                            >
            </email-preview>
    </section>
    `,

    methods: {
        onselected(selectedEmail) {
            selectedEmail.isRead = !selectedEmail.isRead
        },
    },
    components: {
        emailPreview,
        buttonAdd
    },
}