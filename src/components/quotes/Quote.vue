<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel panel-default quote">
            <v-hover v-slot:default="{ hover }">
                <v-alert :elevation="hover ? 4 : 0" colored-border border="left" color="primary">
                <slot></slot>
            </v-alert>
            </v-hover>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Quote.vue",
        props: ['quotes']
    }
</script>

<style scoped>

    .quote {
        cursor:pointer;
        font-family: "Imprint MT Shadow";

    }
    .quote:hover {
        background-color: indianred;
    }
</style>