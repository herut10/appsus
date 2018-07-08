'use strict'

import appPreview from '../appsus-cmps/app-preview-cmp.js'


export default {
    template: `
    <section class="appsus">
        <div class="welcomeScreen center">
            <h1 class="logo">appsus</h1>
            <div v-if="apps" class="apps-container flex flex-wrap">
            <app-preview v-for="app in apps" :key="app.appName" :appData="app"></app-preview>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            apps: [{
                    appLogoSrc: './img/logos/mail-logo.png',
                    appLink: '/misterEmail',
                    appName: 'mister email'
                },
                {
                    appLogoSrc: './img/logos/mail-logo.png',
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