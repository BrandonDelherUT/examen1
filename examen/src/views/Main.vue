<!-- src/components/Main.vue -->
<template>
    <div class="home">
      <h1>Bienvenido al Sitio Principal</h1>
      <router-link to="/formulario" class="btn">Ir al Formulario</router-link>
      <router-link to="/paginacion" class="btn">Ir a la Paginación</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Main',
  }
  </script>
  
  <style>
  .btn {
    margin: 10px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    display: inline-block;
    border-radius: 5px;
  }
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  