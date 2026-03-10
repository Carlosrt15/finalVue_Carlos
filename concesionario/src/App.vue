<script setup>
import Menu from './components/Menu.vue'
</script>

<template>

<div class="layout">

  <Menu />

  <main class="contenido">
    <router-view />
  </main>

</div>

</template>

<style>

.layout{
  display:flex;
}

.contenido{
  padding:20px;
  width:100%;
}

</style>