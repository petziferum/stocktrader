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
      <v-card-actions>
        <v-btn @click="save">Save</v-btn>
        <v-btn @click="chucknorris">Chuck Norris</v-btn>
        <v-btn @click="joke.pop()">löschen</v-btn>
      </v-card-actions>
    </v-card>
    <v-row>
      <v-col>
        <v-row>

              <v-card class="d-inline-flex ma-3">
                  <v-img :src="chuck.icon" max-width="50" contain ></v-img>
                <v-card-text transition="v-expand-transition">
                <v-list v-for="(jokes, id) in joke" :key="id">
                  <transition>
                    <v-slide-x-transition>
                  <v-list-item two-line>
                    <v-list-item-content>{{id}}. {{jokes}}</v-list-item-content>
                  </v-list-item>
                    </v-slide-x-transition>
                    </transition>
                </v-list>
                </v-card-text>
              </v-card>
        </v-row>
        <v-row>
          <div class="col-xs-12">
            <v-btn @click="show =! show">Show</v-btn>

            <v-card class="alert alert-info" width="300" height="200">
              <v-card-title>Titel</v-card-title>
              <transition name="fade">
                <div v-if="show">This is an information</div>
              </transition>
              <transition name="slide">
                <div v-if="show">This is an INformation</div>
              </transition>
            </v-card>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios'
  export default {
    data: () => ({
      show:false,
      erfolg: false,
      inhalt: [{inhalt:[{name:"inhalt",preis:"90"}]}],
      chuck:[{value:[],icon:""}],
      joke:[]

    }),
    methods: {
      chucknorris: function() {
        axios({
          "method":"GET",
          "url":"https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
          "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
            "x-rapidapi-key":"eb08c155a9msh0a16aabaad3fd21p1c7fbbjsn1065d440920e",
            "accept":"application/json"
          }
        })
                .then(response=>
                {
                  const data = response.data;
                  console.log(data.icon_url);
                  const icon = data.icon_url
                  this.erfolg = true;
                  this.chuck.icon = icon;
                  this.joke.push(data.value);
                })
                .catch((error)=>{
                  console.log(error)
                })
      },
      save: function(){
        let newId = this.inhalt.length +1;
        const save = {
          id: newId,
          name: 'Name'+ newId,
          inhalt:[newId,"hallo das ist der Inhalt"]
        };
        axios.post('http://localhost:8080/save.json', save)
                .then(res =>{
                  console.log("data: ",res.data,"save:", save);
                  this.erfolg = "Erfolgreich gespeichert!"
                })
      },
      // loadStocks: function(){
      //   axios.get("http://localhost:8080/data.json")
      //           .then(res =>{
      //             const resdata = res.data;
      //             for (let key in resdata){
      //               const inhalt = resdata[key];
      //               inhalt.id = key;
      //               console.log("Home inhalt:",inhalt)
      //               this.inhalt.push(inhalt);
      //             }
      //           })
      // }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      }

    },
    mounted(){
      // this.loadStocks()
    }
  };
</script>
<style>
  .fade-enter {
    opacity: 0 ;

  }
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-leave {

  }
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 1s;
  }
  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity .5s;
    opacity: 0;
  }
  @keyframes slide-in {
    from {
      transform:translateY(100px);
    }
    to { transform:translateY(0)}
  }
  @keyframes slide-out {
    from {
      transform:translateY(0);
    }
    to {
      transform: translateX(20px);
    }
  }
</style>