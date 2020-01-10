<template>
    <v-content class="justify-center" align="center">
        <v-card max-width="500" class="mx-auto mt-5 pa-2">
            <v-card-title class="success">Login</v-card-title>

            <v-form class="px-3" ref="form">
                <v-text-field v-model="title" label="Name" prepend-icon="mdi-account" :rules="inputRules"></v-text-field>
                <v-text-field v-model="email" label="Mail" prepend-icon="mdi-email" :rules="emailRules"></v-text-field>
                <v-menu v-model="menu" :close-on-content-click="true" max-width="290">
                    <template v-slot:activator="{on}">
                    <v-text-field v-on="on" slot="activator" :rules="inputRules"
                                  :value="due" clearable label="Date" prepend-icon="mdi-calendar-range">
                    </v-text-field>
                    </template>
                    <v-date-picker v-model="due" @change="menu = true"></v-date-picker>
                </v-menu>

                <v-spacer></v-spacer>

                <v-btn text @click="submit" class="success mx-0 mt-3">Add Project</v-btn>
            </v-form>

        </v-card>
    </v-content>
</template>

<script>
    import format from 'date-fns/format'
    import parseISO from 'date-fns/parse'
    export default {
        name: "Login.vue",
        data() {
            return {
                title: '',
                content: '',
                due: null,
                menu: false,
                email:'',
                inputRules: [
                    v => !!v || 'This field is required',
                    v => v && v.length >= 3 || 'Minimum length is 3 characters'
                ],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid']
            }
        },
        methods: {
            submit() {
                const content = {
                    title: this.title,
                    email: this.email,
                    date: this.due

                }
                if(this.$refs.form.validate()) {
                    console.log(content)
                }
            }
        },
        computed: {
            formattedDates () {
                return this.due ? format(parseISO(this.due), 'DD.MM.YYYY') : ''
            }
        }
    }
</script>

<style scoped>

</style>