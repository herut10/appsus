'use strict'


export default {
    template: `
    <section class="email-filter">
        <form>
        <lable for="sort">sort:</lable>
            <select id="sort" @change="submit" v-model="sort.sortBy">
                <option value="none">none</option>
                <option value="date" >date</option>
                <option value="subject" >subject</option>
            </select>
            <button @click="sort.reversed=!sort.reversed; submit()"> <i class="fa" v-bind:class="{ 'fa-sort-amount-up': sort.reversed, ' fa-sort-amount-down': !sort.reversed }"></i></button>
        </form>
    </section>
    `,
    data() {
        return {
            sort: {
                reversed: false,
                sortBy: 'none'
            }
        }
    },
    created() {
        this.submit()
    },
    methods: {
        submit() {

            var sortCopy = JSON.parse(JSON.stringify(this.sort))
            this.$emit('dosort', sortCopy)
        }
    }

}