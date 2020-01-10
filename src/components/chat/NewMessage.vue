<template>
    <v-container>
    <v-form >
        <v-text-field v-model="newMessage" name="new-message" type="text" label="Message"></v-text-field>
        <p v-if="feedback">{{feedback}}</p>
        <v-btn @click.prevent="addMessage">Send it</v-btn>
    </v-form>
    </v-container>
</template>

<script>
   // import db from '@/firebase/init'
    export default {
        name: "NewMessage.vue",
        props: ['name'],
        data() {
            return {
                newMessage: null,
                feedback: null
            }
        },
        methods: {
            addMessage() {
                //if(this.newMessage){
                    console.log(this.newMessage, this.name, Date.now())
                    //{db.collection('messages').add({
                      //  content: this.newMessage,
                        //name: this.name,
                       // timestamp: Date.now()
                    //}).catch(error =>{
                      //  console.log(error)
                    //})}
                    this.newMessage = null
                    this.feedback = null
              //  }else {
                //    this.feedback = "Enter a Message"
              //  }
            }
        }
    }
</script>

<style scoped>

</style>