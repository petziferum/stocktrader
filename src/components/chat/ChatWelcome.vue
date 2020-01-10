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
                    <label for="name">Enter your name:</label>
                    <v-input type="text" name="name" v-model="name">
                    </v-input>
                    <v-btn class="btn teal">Enter Chat</v-btn>
                </form>
            </v-card-actions>

        </v-card>
    </div>
</template>

<script>
    export default {
        name: "ChatWelcome.vue"
    }
</script>

<style scoped>

</style>