<template>
    <v-container>
        <v-card width="800">
            <v-card-title>
                Chat
            </v-card-title>
            <v-card-text>
                {{name}}
            </v-card-text>
            <v-card-text>
                <v-list>
                    <v-list-item>
                        <v-list-item-content>
                            <span class="teal-text">Name</span>
                            <span class="grey-text text-darken-3">Message</span>
                            <span class="grey-text time">time</span>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card-text>
            <v-card-actions>
                <new-message :name="name"></new-message>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
    import NewMessage from '@/components/chat/NewMessage'
    export default {
        name: "ChatApp.vue",
        props: ['name'],
        components: {
            NewMessage
        }
    }
</script>

<style scoped>
.teal-text{
    font-size:1.4em;
}
</style>