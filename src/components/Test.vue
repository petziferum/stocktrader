<template>
    <v-container>
        <v-card>
            <v-card-title>Inhalt</v-card-title>
            <v-card-subtitle>{{inhalt}}</v-card-subtitle>
            <v-list v-for="inhalt in inhalt[0]" :key="inhalt.id">
                {{inhalt.id}}, {{inhalt.name}}, price: {{inhalt.price}}
            </v-list>

        </v-card>
    </v-container>
</template>

<script>
    import axios from "axios"
    export default {
        name: "Test.vue",
        data:() => ({
            inhalt: []
        }),
        methods: {
            connection() {
                axios.get("http://localhost:8080/data.json")
                    .then(res => {
                        const data = res.data;
                        for (let key in data){
                            const items = data[key];
                            items.id = key;
                            console.log(items)
                            this.inhalt.push(items.stocks)
                        }
                    }).catch(error => {
                    console.log(error)
                }).finally(function () {
                    console.log("Alles fertig")
                })
            }
        },
        mounted(){
            this.connection()
        }
    }
</script>

<style scoped>

</style>