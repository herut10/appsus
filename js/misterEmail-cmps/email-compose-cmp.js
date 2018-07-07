import utilService from "../services/util.service.js";

'use strict'

export default {
    props: ['email'],
    template: `
    <section  class="email-compose">
        <form>
            <template v-if="email">
                <label>subject</label>
                <input type="text" v-model="subject" disabled>
            </template>
            <template v-else>
                <label>subject</label>
                <input type="text" v-model="subject" placeholder="your subject..">
            </template>
            <label>body</label>
            <textarea cols="30" rows="10" v-model="body" placeholder="message body.."></textarea>
            <button @click.prevent="submit">submit</button>
        </form>
    </section>
    `,
    data() {
        return {
            subject: this.email ? 'Re: ' + this.email.subject : '',
            body: ''
        }
    },
    methods: {
        submit() {
            var mailObj = {
                subject: this.subject,
                body: this.body,
                isRead: false,
                sentAt: Date.now(),
                id: utilService.makeid()
            }
            this.$emit('add', mailObj)
        }
    }
}