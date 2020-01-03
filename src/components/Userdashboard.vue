<template>
    <v-container>
        <h1>User Dashboard</h1>
        <v-card><app-Login /></v-card>
        <v-card>
            <v-list v-for="user in getUsers" :key="user.id">
                <v-list-item>{{user}}</v-list-item>
            </v-list>
        </v-card>
    </v-container>
</template>

<script>
    import login from './Login'
    import axios from 'axios'
    export default {
        name: "Userpanel.vue",
        components:{
          appLogin: login
        },
        data: () => ({
           users: []
        }),
        mounted() {
                axios.get('https://stocktrader-fcc4e.firebaseio.com/users.json')
                    .then(res => {
                        console.log(res.data)
                        for (let key in res.data) {
                            const user = res.data[key]
                            user.id = key
                            this.users.push(user)
                        }
                        console.log(this.users)
                    })

        },
        computed: {
            getUsers() {
                return this.users
            }
        }
    }
</script>

<style scoped>

</style>