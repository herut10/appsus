'use strict'
import progressBar from '../general-cmps/progress-bar-cmp.js'

export default {
    props: ['emails'],
    template: `
    <section  class="email-status" :style="styleObj">
    <progress-bar :total="getTotal" :progress="getProgress"></progress-bar>

    </section>
    `,
    data() {
        return {
            styleObj: {
                position: 'absolute',
                bottom: '0',
                width: '98%',
            }
        }
    },
    components: {
        progressBar
    },
    created() {
        // this.progress = this.getProgress()
    },
    watch: {
        // getProgress() {
        //     debugger
        //     this.progress = this.getProgress()
        // }
    },
    computed: {
        getTotal() {
            return this.emails.length
        },
        getProgress() {
            return this.emails.reduce((acc, email) => {
                if (email.isRead) {
                    return acc + 1
                } else {
                    return acc
                }
            }, 0)
        }
    }
}