'use strict'


export default {
    template: `
    <section class="email-filter">
        <form>
            <input placeholder="search subject.." type="text" v-model="filter.txt"  @keyup.enter="submit"/>
            <input 
                id="all"
                type="radio"
                value="all"
                v-model="filter.filterBy"
                @change="submit"
                checked/>
            <label for="all" >all</label>
            <input 
                id="read"
                type="radio" 
                value="read" 
                v-model="filter.filterBy"
                @change="submit"
             />
            <label for="read">read</label>
            <input 
                id="unread"
                type="radio" 
                value="unread"
                v-model="filter.filterBy"
                @change="submit"
            />
            <label for="unread">unread</label>
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
            var filterCopy = JSON.parse(JSON.stringify(this.filter))
            this.$emit('dofilter', filterCopy)
        }
    }

}