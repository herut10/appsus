'use strict'

// {
//     appLogoSrc: './img/logos/mail-logo.png',
//     appLink: '/misterKeeper',
//     appName: 'mister keep'
// }


export default {
    name: 'app-preview',
    props: ['appData'],

    template: `
    <section class="app-preview">
        <router-link class="center" :to="appData.appLink" style="width: 154px; height: 128px;">
            <h2 style="margin: 0; font-size: 12px;">{{appData.appName}}</h2>
            <img :src="appData.appLogoSrc" :alt="appData.appName" style="width:100%; height:96px;" />
        </router-link>
    </section>
`,
}