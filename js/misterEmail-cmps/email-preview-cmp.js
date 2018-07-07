'use strict'

import emailService from '../services/misterEmail-service.js'


export default {
    props: ['email', 'idx'],
    template: `
    <section class="email-preview" :style="styleObject">
        <input type="checkbox" :id="email.id"  @change="$emit('selected',email)"/>
        <router-link :to="'/misterEmail/'+email.id"> {{email.subject}} {{timeRecieved}}</router-link>
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