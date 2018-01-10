<template>
  <div class="col-md-11">
    <h1 class="col-md-12">
      Plannings de {{ stagiaire.infoStagiaire.nom }} {{ stagiaire.infoStagiaire.prenom }}
    </h1>
    <div class="col-md-2">
      <ul id="modules" class="col-md-12">
        <li v-for="mod in module.modules">
          {{mod.nomModule}} <p v-for="d in mod.depend"> {{d}}</p>
        </li>
      </ul>
    </div>
      <div class="col-md-10">
      <ul id="planning" class="col-md-12">
        <li v-for="n in 10">Semaine {{n}} <i class="handle"></i></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Sortable from 'sortablejs'

  export default {
    name: 'planning',

    data: () => ({
      stagiaire: {
        infoStagiaire: {
          adresse: {},
        },
      },
      module: {
        modules: [],
      },
    }),

    mounted () {
      this.getStagiaire()
        .then(() => this.getModule())
      const modules = document.getElementById('modules')
      const planning = document.getElementById('planning')
      Sortable.create(planning, {
        group: {
          name: 'planning',
          put: [
            'planning',
            'modules',
          ],
        },
        sort: true,
        animation: 100,
      })
      Sortable.create(modules, {
        animation: 200,
        group: {
          name: 'modules',
          pull: 'clone',
          revertClone: true,
        },
        sort: true,
      })
    },

    methods: {
      getStagiaire () {
        return axios
          .get('http://localhost:9000/stagiaire/' + this.$route.params.id)
          .then(response => {
            console.log('[getStagiaire()] ', response.data)
            this.stagiaire = response.data
          })
          .catch((error) => console.log(error))
      },
      getModule () {
        console.log(this.stagiaire.idFormation)
        return axios
          .get('http://localhost:9000/module/' + this.stagiaire.idFormation)
          .then(response => {
            console.log('[getModule()] ', response.data)
            this.module = response.data
          })
          .catch((error) => console.log(error))
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
