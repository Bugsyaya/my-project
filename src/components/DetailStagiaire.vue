<template>
  <div id="details">
    <h1>
      {{ stagiaire.infoStagiaire.nom }} {{ stagiaire.infoStagiaire.prenom }}
    </h1>
    <p>
      Adresse : {{ stagiaire.infoStagiaire.adresse.numero }} {{ stagiaire.infoStagiaire.adresse.rue }}
      -  {{ stagiaire.infoStagiaire.adresse.ville }} ({{ stagiaire.infoStagiaire.adresse.codePostal }})
    </p>
    <p class="show" v-on:click="$router.push('/plannings/' + stagiaire.infoStagiaire.id)">
      Voir les plannings de {{ stagiaire.infoStagiaire.nom }} {{ stagiaire.infoStagiaire.prenom }}
    </p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'detailstagiaires',

    data: () => ({
      stagiaire: {
        infoStagiaire: {
          adresse: {},
        },
      },
    }),

    created () {
      this.getStagiaire()
    },

    methods: {
      getStagiaire () {
        axios
          .get('http://localhost:9000/stagiaire/' + this.$route.params.id)
          .then(response => {
            console.log('Product update ', response.data)
            this.stagiaire = response.data
          }).catch((error) => console.log(error))
      },
    },
  }
</script>

<style>
  #details {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .show a {
    color: #2c3e50;
  }
</style>
