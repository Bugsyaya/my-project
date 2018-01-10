<template>
  <div id="detailsEntreprise">
    <h1>
      {{ entreprise.nomEntreprise }}
    </h1>
    <p>
      Contact : {{ entreprise.contact.nom }} {{ entreprise.contact.prenom }}
    </p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'detailentreprise',

    data: () => ({
      entreprise: {
        contact: {},
        adresse: {},
      },
    }),

    created () {
      this.getEntreprise()
    },

    methods: {
      getEntreprise () {
        axios
          .get('http://localhost:9000/entreprise/' + this.$route.params.id)
          .then(response => {
            console.log('Product update ', response.data)
            this.entreprise = response.data
          }).catch((error) => console.log(error))
      },
    },
  }
</script>

<style>
  #detailsEntreprise {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  a {
    color: white;
  }
</style>
