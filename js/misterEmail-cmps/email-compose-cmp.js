import utilService from '../services/util.service.js';
import backBtn from '../general-cmps/back-button-cmp.js'

'use strict'

export default {
    props: ['email'],
    template: `
    <section  class="email-compose">
        <back-btn @back="$emit('back')"></back-btn>
        <form>
            <template v-if="email">
                <h2>subject</h2>
                <input type="text" v-model="subject" disabled>
            </template>
            <template v-else>
                <h2>subject</h2>
                <input type="text" v-model="subject" placeholder="your subject..">
            </template>
            <h2>body</h2>
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
    },
    components: {
        backBtn
    }
}