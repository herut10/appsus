'use strict'

export default {
    name: 'progress-bar',
    props: ['total', 'progress'],

    template: `
<section class="progress-bar" style="height: 30px">
<ul class="flex justify-center align-center">
    <li v-for="prog in progresion" :style="prog.styleObj"></li>
</ul>
    <h1 style="position:relative; width: 0; top: -45px; color: white; left: 48%;font-weight: 500;
    letter-spacing: 1px;">{{getPercentage}}%</h1>
</section>
`,
    data() {

        var progresion = []
        for (let i = 0; i < this.total; i++) {
            progresion.push({
                styleObj: {
                    'background-color': i < this.progress ? '#FFBB12' : '#454545',
                    width: `${100/this.total}%`,
                    height: `30px`
                }
            })
        }
        return {
            progresion: progresion,
        }
    },
    computed: {
        getPercentage() {
            return new Number(100 * this.progress / this.total).toFixed(2).valueOf()
        },
        getProgress() {
            return this.progress
        },
        getTotal() {
            return this.total
        }
    },
    watch: {

        getProgress() {
            var progresion = []
            for (let i = 0; i < this.total; i++) {
                progresion.push({
                    styleObj: {
                        'background-color': i < this.progress ? '#FFBB12' : '#454545',
                        width: `${100/this.total}%`,
                        height: `30px`
                    }
                })
            }
            this.progresion = progresion
        },
        getTotal() {
            var progresion = []
            for (let i = 0; i < this.total; i++) {
                progresion.push({
                    styleObj: {
                        'background-color': i < this.progress ? '#FFBB12' : '#454545',
                        width: `${100/this.total}%`,
                        height: `30px`
                    }
                })
            }
            this.progresion = progresion
        }
    }


}