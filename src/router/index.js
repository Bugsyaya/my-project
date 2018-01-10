import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Stagiaires from '@/components/Stagiaires'
import Planning from '@/components/Planning'
import DetailEntreprise from '@/components/DetailEntreprise'
import DetailStagiaire from '@/components/DetailStagiaire'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Test,
    },
    {
      path: '/stagiaires',
      name: 'Stagiaires',
      component: Stagiaires,
    },
    {
      path: '/stagiaires/:id',
      name: 'DetailStagiaires',
      component: DetailStagiaire,
    },
    {
      path: '/entreprises/:id',
      name: 'DetailEntreprises',
      component: DetailEntreprise,
    },
    {
      path: '/plannings/:id',
      name: 'Planning',
      component: Planning,
    },
  ],
})
