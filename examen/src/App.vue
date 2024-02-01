<!-- src/App.vue -->
<template>
  <div id="app">
    <nav>
      <router-link to="/main">Inicio</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
nav {
  padding: 16px;
}

nav a {
  padding: 10px;
  margin-right: 10px;
  text-decoration: none;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
