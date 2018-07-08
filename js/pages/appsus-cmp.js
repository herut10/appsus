'use strict'

import appPreview from '../appsus-cmps/app-preview-cmp.js'


export default {
    template: `
<transition
        name="custom-classes-transition"
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated bounceOutRight">

        <section v-if="apps" class="appsus">
            <div class="welcomeScreen center">
                <h1 class="logo">appsus</h1>
                <div  class="apps-container flex flex-wrap">
                <app-preview v-for="app in apps" :key="app.appName" :appData="app"></app-preview>
                </div>
            </div>
        </section>
</transition>
    `,
    data() {
        return {
            apps: [{
                    appLogoSrc: './img/logos/mail-logo.png',
                    appLink: '/misterEmail',
                    appName: 'mister email'
                },
                {
                    appLogoSrc: './img/logos/keep-logo.png',
                    appLink: '/misterKeeper',
                    appName: 'mister keep'
                }

            ]
        }
    },
    methods: {},
    components: {
        appPreview
    }
}