<template>
    <v-card width="300" class="mx-auto ma-3">
        <v-subheader>Quotes</v-subheader>
        <v-list dense elevation="1">
            <v-list-item-group>
                <v-list-item v-for="(item, i) in quotes" :key="i">
                    <v-list-item-content>
                        <v-list-item-title v-text="item"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script>
    export default {
        name: "Quotelist",
        props: ['quotes']
    }
</script>

<style scoped>

</style>