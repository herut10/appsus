'use strict'


export default {
    template: `
    <section class="email-filter">
        <form>
            <input placeholder="Search subject.." type="text" v-model="filter.txt"  @keyup.enter="submit"/>
            <label for="filter">filter:</label>
            <select id="filter" @change="submit" v-model="filter.filterBy">
                <option value="all">All</option>
                <option value="read" >Read</option>
                <option value="unread" >Unread</option>
            </select>
        </form>
    </section>
    `,
    data() {
        return {
            filter: {
                txt: '',
                filterBy: 'all'
            }
        }
    },
    methods: {
        submit() {
            debugger
            var filterCopy = JSON.parse(JSON.stringify(this.filter))
            this.$emit('dofilter', filterCopy)
        }
    }

}