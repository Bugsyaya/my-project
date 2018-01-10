<template>
  <div class="col-md-11">
    <form id="test" action="">
      First name : *<br>
      <input v-model="prenom" required>
      <br>
      Last name : *<br>
      <input v-model="nom" required>
      <br><br>
      Telephon :<br>
      <input v-model="telFix" type="tel">
      <br><br>
      Numero :<br>
      <input v-model="adresse.numero">
      <br><br>
      Rue :<br>
      <input v-model="adresse.rue" type="tel">
      <br><br>
      Ville :<br>
      <input v-model="adresse.ville" type="tel">
      <br><br>
      Code postal :<br>
      <input v-model="adresse.codePostal" type="tel">
      <br><br>
      <input type="submit" value="Submit" v-on:click="sendData()">
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'test',

    data: () => ({
      prenom: '',
      nom: '',
      telFix: '',
      adresse: {
        numero: '',
        rue: '',
        ville: '',
        codePostal: '',
      },
    }),

    methods: {
      sendData () {
        axios
          .post('http://localhost:9000/stagiaire', this.$data)
          .then(response => console.log('Product update ' + response.data))
      },
    },
  }
</script>

<style>
  #test {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
