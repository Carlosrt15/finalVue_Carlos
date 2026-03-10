<template>

<nav class="menu">

<h2>Renting</h2>

<router-link to="/">Inicio</router-link>
<router-link to="/marcas">Marcas</router-link>
<router-link to="/nueva-marca">Nueva Marca</router-link>
<router-link to="/modelos">Modelos</router-link>
<router-link to="/nuevo-modelo">Nuevo Modelo</router-link>
<router-link to="/vehiculos">Vehículos</router-link>
<router-link to="/nuevo-vehiculo">Nuevo Vehículo</router-link>
<router-link to="/alquiler">Alquiler</router-link>
<router-link to="/clientes">Clientes</router-link>

</nav>

</template>

<style>

.menu{
  width:200px;
  background:#eee;
  padding:20px;
  display:flex;
  flex-direction:column;
  gap:10px;
}

</style>