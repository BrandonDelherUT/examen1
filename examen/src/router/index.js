import Vue from 'vue';
import Router from 'vue-router';
import Main from '../views/Main.vue';
import Form from '../views/Form.vue';
import Paginacion from '../views/Paginacion.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/paginacion',
      name: 'paginacion',
      component: Paginacion
    }
  ]
});
