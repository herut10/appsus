'use strict'
import progressBar from '../general-cmps/progress-bar-cmp.js'

export default {
    props: ['emails'],
    template: `
    <section  class="email-status">
    <progress-bar :total="total" :progress="progress"></progress-bar>

    </section>
    `,
    data() {
        return {
            total: this.emails.length,
            progress: 0,
        }
    },
    components: {
        progressBar
    },
    created() {
        this.updateProgress()
    },
    methods: {
        updateProgress() {
            this.progress = this.emails.reduce((acc, email) => {
                if (email.isRead) {
                    return acc + 1
                } else {
                    return acc
                }
            }, 0)
        }
    }
}