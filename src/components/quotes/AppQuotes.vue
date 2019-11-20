<template>
    <v-app>

        <v-content class="mx-auto">
            <app-NewQuote @quoteAdded="newQuote"></app-NewQuote>
            <app-Quotegrid :quotes="quotes" @quoteDeleted="deleteQuote"></app-Quotegrid>
            <app-quotelist :quotes="quotes" @quoteDeleted="deleteQuote"></app-quotelist>
            <v-alert>Klick on a Quote to delete</v-alert>
            <app-Header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-Header>
        </v-content>


    </v-app>
</template>

<script>
    import quotegrid from "./QuoteGrid"
    import NewQuote from "./NewQuote";
    import progress from "./Header"
    import quotelist from "./Quotelist"
    import axios from "axios"

    export default {
        name: "AppQuotes.vue",
        data: () => ({
            quotes: ['Friss und Furz, dass Leben ist kurz'],
            info: '',
            maxQuotes: 10,

        }),
        components: {
            appQuotegrid: quotegrid,
            appNewQuote: NewQuote,
            appHeader: progress,
            appQuotelist: quotelist
        },
        methods: {
            loadData() {
                return axios
                    .get('https://stocktrader-fcc4e.firebaseio.com/quotes.json')
                    .then(response => {
                        console.log(response)
                        const quotes = response.data; //response.data ist der Buchstabensalat, also key
                        for( let key in quotes) {
                            const quote = quotes[key];  ////von diesem key aus wird weiter gegangen zum quote
                            this.quotes.push(quote.quote); // und der quote and den quotes array angehängt
                        }
                    });
            },
            newQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    return alert('please Delete Quotes')
                } else {
                    this.quotes.push(quote);
                }

            },
            deleteQuote(index) {
                this.quotes.splice(index, 1);
            }
        },
        created() {
            this.loadData()
        },

    }
</script>

<style scoped>

</style>