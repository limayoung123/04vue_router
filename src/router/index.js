import { createRouter, createWebHistory } from 'vue-router';
import home from '../views/Home.vue'
import company from '../components/company.vue'
import product from '../components/product.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: home,
  },
  {
    path: '/company',
    name: 'company',
    component:company,
  },
  {
    path: '/product',
    name: 'product',
    component:product,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
