import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from "../components/Main";
import Admin from "../components/Admin/Admin";
import CreateProduct from "../components/Admin/CreateProduct";
import DeleteProduct from "../components/Admin/DeleteProduct";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/about',
    name: 'about',
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    redirect:
        {
          name: 'create'
        },
    children:[
      {
        path: 'create',
        name: 'create',
        component: CreateProduct
      },
      {
        path: 'delete',
        name: 'delete',
        component: DeleteProduct
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
