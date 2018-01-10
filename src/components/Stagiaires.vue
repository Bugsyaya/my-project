<template>
  <div id="showStagiaires" class="col-md-11 show">
    <table id="stagiaires" class="row">
      <thead id="header">
      <tr>
        <th v-for="column in columns">
          <a href="/#/stagiaires" v-on:click="sortBy(column)">
            {{ column }}
          </a>
        </th>
      </tr>
      </thead>
      <tbody id="body">
      <tr class="line" v-for="stagiaire in stagiaires">
        <td v-on:click="$router.push('/stagiaires/' + stagiaire.stagiaire.infoStagiaire.id)">
          {{ stagiaire.stagiaire.infoStagiaire.nom }}
        </td>
        <td v-on:click="$router.push('/stagiaires/' + stagiaire.stagiaire.infoStagiaire.id)">
          {{ stagiaire.stagiaire.infoStagiaire.prenom }}
        </td>
        <td v-on:click="$router.push('/stagiaires/' + stagiaire.stagiaire.infoStagiaire.id)">
          {{ stagiaire.stagiaire.infoStagiaire.telFix }}
        </td>
        <td v-on:click="$router.push('/stagiaires/' + stagiaire.stagiaire.infoStagiaire.id)">
          {{ stagiaire.stagiaire.infoStagiaire.adresse.numero }}
        </td>
        <td v-on:click="$router.push('/stagiaires/' + stagiaire.stagiaire.infoStagiaire.id)">
          {{ stagiaire.stagiaire.infoStagiaire.adresse.rue }}
        </td>
        <td v-on:click="$router.push('/stagiaires/' + stagiaire.stagiaire.infoStagiaire.id)">
          {{ stagiaire.stagiaire.infoStagiaire.adresse.ville }}
        </td>
        <td v-on:click="$router.push('/stagiaires/' + stagiaire.stagiaire.infoStagiaire.id)">
          {{ stagiaire.stagiaire.infoStagiaire.adresse.codePostal }}
        </td>
        <td v-on:click="$router.push('/entreprises/' + stagiaire.entreprise.id)">
          {{ stagiaire.entreprise.nomEntreprise }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'stagiaires',

    data: () => ({
      sortKey: 'nom',
      reverse: false,
      columns: ['nom',
        'prenom',
        'téléphonne',
        'numéro',
        'rue',
        'ville',
        'code postal',
        'entreprise',
      ],
      search: '',
      stagiaires: [],
    }),

    created () {
      this.getStagiaires()
    },

    methods: {
      getStagiaires () {
        axios
          .get('http://localhost:9000/stagiaire')
          .then(response => {
            console.log('Product update ', response.data)
            this.stagiaires = response.data
          }).catch((error) => console.log(error))
      },
      sortBy: function (sortKey) {
        this.reverse = (this.sortKey === sortKey) ? !this.reverse : false

        this.sortKey = sortKey
      },
    },
  }
</script>

<style>
  #stagiaires {
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
