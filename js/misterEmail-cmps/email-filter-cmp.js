'use strict'


export default {
    template: `
    <section class="email-filter">
        <form>
            <input placeholder="search subject.." type="text" v-model="filter.txt"  @keyup.enter="submit"/>
            <label for="filter">filter:</label>
            <select id="filter" @change="submit" v-model="filter.filterBy">
                <option value="all">all</option>
                <option value="read" >read</option>
                <option value="unread" >unread</option>
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