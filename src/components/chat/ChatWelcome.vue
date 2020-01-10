<template>
    <div class="welcome container">
        <div class="card">
            <div class="card-content center-align">
                <h2 class="teal-text">Welcome</h2>


            </div>
        </div>
        <v-card max-width="500" class="mx-auto">
            <v-content>
                <v-card-title>Welcome</v-card-title>
            </v-content>
            <v-card-actions>
                <form @submit.prevent="enterChat">
                        <v-text-field label="name" type="text" v-model="name"></v-text-field>
                    <v-btn class="btn teal" @click="enterChat">Enter Chat</v-btn>
                </form>
            </v-card-actions>

        </v-card>
    </div>
</template>

<script>

    export default {
        name: "ChatWelcome.vue",
        data() {
            return{
                name: null
            }
        },
        methods:{
            enterChat:() => {
                console.log(this.name)
            }
        }
    }
</script>

<style scoped>

    .welcome {
        max-width: 400px;
        margin-top: 100px;

    }
    .welcome h2{
        font-size: 3em;
    }
    .welcome button {
        margin: 30px auto
    }

</style>