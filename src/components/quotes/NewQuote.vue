<template>
    <v-row>
        <v-col>
            <v-card class="mx-auto pa-0" width="50%">
                <v-img
                        class="white--text align-end ma-0"
                        height="200px"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                    <v-card-title>Quotes</v-card-title>
                </v-img>

                <v-text-field
                        class="ma-3"
                        outlined
                        shaped
                        label="Quote"
                        v-model="quoteinput"
                        v-on:keyup.enter="saveQuote"></v-text-field>
                <v-card-actions class="justify-center">
                    <v-btn @click.prevent="saveQuote">Add Quote</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import axios from "axios";

    export default {
        name: "NewQuote.vue",

        data: function () {
            return {
                quoteinput: '',
                bgImage: require("../../assets/bgimg02.jpg")
            }
        },
        methods: {
            createNew() {
                if (this.quoteinput != '') {
                    this.$emit('quoteAdded', this.quoteinput);
                    this.quoteinput = '';
                }
            },
            saveQuote() {
                const quotedata = {

                    quote: this.quoteinput

                };
                axios.post("https://stocktrader-fcc4e.firebaseio.com/quotes.json", quotedata)
                    .then(res => {
                        console.log(res);
                        this.$emit('quoteAdded', quotedata.quote)
                    })
                    .catch(error => console.log(error))
                this.quoteinput = '';
            },
        }
    }
</script>

<style scoped>

</style>