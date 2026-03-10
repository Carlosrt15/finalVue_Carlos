import { createRouter, createWebHistory } from 'vue-router'


import InicioView from '@/views/InicioView.vue'
import MarcasView from '@/views/MarcasView.vue'
import NuevaMarcaView from '@/views/NuevaMarcaView.vue'
import ModelosView from '@/views/ModelosView.vue'
import NuevoModeloView from '@/views/NuevoModeloView.vue'
import VehiculosView from '@/views/VehiculosView.vue'
import NuevoVehiculoView from '@/views/NuevoVehiculoView.vue'
import AlquilerView from '@/views/AlquilerView.vue'
import ClientesView from '@/views/ClientesView.vue'

const routes = [
  { path: "/", component: InicioView},
  { path: "/marcas", component: MarcasView },
  { path: "/nueva-marca", component: NuevaMarcaView },
  { path: "/modelos", component: ModelosView },
  { path: "/nuevo-modelo", component: NuevoModeloView },
  { path: "/vehiculos", component: VehiculosView },
  { path: "/nuevo-vehiculo", component: NuevoVehiculoView },
  { path: "/alquiler", component: AlquilerView },
  { path: "/clientes", component: ClientesView }
]



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
