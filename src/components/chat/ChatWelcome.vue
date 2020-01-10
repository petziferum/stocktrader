<template>
    <div class="welcome container">
        <v-card max-width="600" style="border:1px solid" class="mx-auto">
            <v-card-title class="d-flex justify-center">Welcome</v-card-title>
                <v-form class="pa-4">
                        <v-text-field label="name" type="text" v-model="name" v-on:keyup.enter="enterChat"></v-text-field>
                        <p v-if="feedback" style="color:red">{{feedback}}</p>
                        <v-btn class="btn teal" @click="enterChat">Enter Chat</v-btn>
                </v-form>
        </v-card>
    </div>
</template>

<script>

    export default {
        name: "ChatWelcome.vue",
        data() {
            return{
                name: null,
                feedback: null
            }
        },
        methods:{
            enterChat() {
                if(this.name){
                    this.$router.push({
                        name: 'Chat',
                        params: {name: this.name},
                    })
                }else {
                    this.feedback = "you must enter a name"
                }
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