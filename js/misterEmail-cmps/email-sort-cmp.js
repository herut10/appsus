'use strict'


export default {
    template: `
    <section class="email-filter">
        <form>
            <input 
                id="none"
                type="radio"
                value="none"
                v-model="sort.sortBy"
                @change="submit"
                checked/>
            <label for="none" >none</label>
            <input 
                id="date"
                type="radio" 
                value="date" 
                v-model="sort.sortBy"
                @change="submit"
             />
            <label for="date">date</label>
            <input 
                id="subject"
                type="radio" 
                value="subject"
                v-model="sort.sortBy"
                @change="submit"
            />
            <label for="subject">subject</label>
            <button @click="sort.reversed=!sort.reversed; submit()"> reverse</button>
        </form>
    </section>
    `,
    data() {
        return {
            sort: {
                reversed: true,
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