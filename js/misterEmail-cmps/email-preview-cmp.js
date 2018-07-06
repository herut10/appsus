'use strict'


export default {
    props: ['email'],
    template: `
    <section class="email-preview" :style="styleObject">
    <router-link :to="'/misterEmail/'+email.id">misterEmail</router-link>
        {{email.subject}} {{timeRecieved}}
    </section>
    `,
    computed: {
        timeRecieved() {
            var timeDiff = Date.now() - this.email.sentAt
            var dateStr = JSON.stringify(new Date(this.email.sentAt))
            if (timeDiff < 86400000) {
                return dateStr.slice(12, 17)
            } else if (timeDiff < 31536000000) {
                return dateStr.slice(6, 11)
            } else {
                return dateStr.slice(1, 11)
            }
        },
        emailRead() {
            return this.email.isRead;
        }
    },
    data() {

        return {
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