import Vue from 'vue'
import Router from 'vue-router'
import CatalogMain from '@/components/CatalogMain'

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'CatalogMain',
      component: CatalogMain
    }
  ]
});