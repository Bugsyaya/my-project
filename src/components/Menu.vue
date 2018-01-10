<template>
  <div id="menuLayout">
    <ul>
      <li v-for="item in items">
        <a :href="item.url">
          {{ item.nom }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'menu',

    data: () => ({
      items: [
        {nom: 'accueil', url: '/#/'},
        {nom: 'stagiaires', url: '/#/stagiaires'},
        {nom: 'entreprises', url: '/#/stagiaires'},
        {nom: 'planning', url: '/#/stagiaires'},
        {nom: 'deconnection', url: '/#/stagiaires'},
      ],
    }),
  }
</script>

<style>
  #menuLayout {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    background-color: #2c3e50;
    height: 100%;
  }
  a {
    color: white;
  }
</style>
