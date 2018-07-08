'use strict'

import emailService from '../services/misterEmail-service.js'


export default {
    props: ['email', 'idx'],
    template: `
    <section class="email-preview" :style="styleObject">
        <div class="flex align-center">
            <button @click="$emit('selected',email)"><i class="fa" :class="{'fa-envelope':!email.isRead,'fa-envelope-open':email.isRead}"></i> </button>
            <router-link :to="'/misterEmail/'+email.id"> {{email.subject}} {{timeRecieved}}</router-link>
        </div>
    </section>
    `,
    computed: {
        emailRead() {
            return this.email.isRead;
        }
    },
    data() {
        return {
            timeRecieved: emailService.timeRecieved(this.email.sentAt),
            styleObject: {
                'font-weight': this.email.isRead ? 400 : 900
            }
        }
    },
    watch: {
        emailRead() {
            this.styleObject['font-weight'] = this.email.isRead ? 400 : 900
        }
    }
}