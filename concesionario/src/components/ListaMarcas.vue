<script setup>
const props = defineProps(["marcas"]);

const emit = defineEmits(["seleccionar"]);

const seleccionar = (marca) => {
  emit("seleccionar", marca);
};
</script>

<template>
  <ul>
    <li v-for="marca in marcas" :key="marca.id" @click="seleccionar(marca)">
      {{ marca.nombre }} - {{ marca.origen }}
    </li>
  </ul>
</template>
