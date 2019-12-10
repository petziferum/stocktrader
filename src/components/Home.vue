<template>
  <v-container>
    <v-hover>
      <template v-slot="{ hover }">
        <v-card class="pa-0" :elevation="hover ? 12 : 1">
          <v-img class="white--text align-end ma-0" height="200px" src="../assets/bgimg.jpg">
            <v-card-title>Trade or View your Portfolio</v-card-title>
            <v-card-subtitle class="white--text">You may save or Load you Data</v-card-subtitle>
            <br />
            <hr />
            <v-card-title primary-title>
              <p>Your Funds: {{ funds | currency }}</p>
            </v-card-title>
          </v-img>
        </v-card>
      </template>
    </v-hover>

<v-card>
  <v-btn @click="save">Save</v-btn>
  <v-btn>load</v-btn>
  <v-card-actions>
    <v-sheet elevation="1" class="pa-1" color="warning">{{inhalt}}</v-sheet>

  </v-card-actions>
  <v-card-text v-for="item in inhalt[0].stocks" :key="item.id">
    <v-card-subtitle dense class="pa-1" v-html="item.id +'_'+ item.name+' Price: '+item.price"></v-card-subtitle>
  </v-card-text>
</v-card>
    {{inhalt.length}}
  </v-container>
</template>

<script>
  import axios from 'axios'
  export default {
    data: () => ({
      bgImage: require("../assets/bgimg.jpg"),
      erfolg: Boolean,
      inhalt: [],

    }),
    methods: {
      save: function(){
        let newId = this.inhalt.length +1;
        const save = {
          name: 'Name'+newId,
          id: newId,
          inhalt:[]
        };
          axios.post('http://localhost:8080/save.json', save)
            .then(res =>{
              console.log("gespeichert");
              console.log(res);
              this.erfolg = "Erfolgreich gespeichert!"
            })
        },
      loadStocks: function(){
        axios.get("http://localhost:8080/data.json")
                .then(res =>{
                  const resdata = res.data;
                  for (let key in resdata){
                    const inhalt = resdata[key];
                    inhalt.id = key;
                    console.log("Home inhalt:",inhalt)
                    this.inhalt.push(inhalt);
                  }
                })
      }
  },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
    },
    mounted(){
      this.loadStocks()
    }
  };
</script>
<style scoped>
</style>