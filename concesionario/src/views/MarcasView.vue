<script setup>

import { ref, onMounted } from "vue"
import ListaMarcas from "../components/ListaMarcas.vue"

const marcas = ref([])

const marcaSeleccionada = ref(null)

onMounted(async ()=>{

 const res = await fetch("http://localhost:3000/marcas")

 marcas.value = await res.json()

})

const seleccionarMarca = (marca)=>{

 marcaSeleccionada.value = marca

}

</script>


<template>

<div>

<h1>Marcas</h1>

<ListaMarcas 
:marcas="marcas"
@seleccionar="seleccionarMarca"
/>

<div v-if="marcaSeleccionada">

<h2>Marca seleccionada:</h2>

<p>{{marcaSeleccionada.nombre}}</p>

</div>

</div>

</template>