<template>
    <div>
      <form @submit.prevent="submitForm">
        <div>
          <label for="marca">Marca:</label>
          <input id="marca" v-model="vehiculo.marca" type="text" />
          <span v-if="!esAlfanumerico(vehiculo.marca)">La marca debe ser alfanumérica.</span>
        </div>
  
        <div>
          <label for="modelo">Modelo:</label>
          <input id="modelo" v-model="vehiculo.modelo" type="text" />
          <span v-if="!esAlfanumerico(vehiculo.modelo)">El modelo debe ser alfanumérico.</span>
        </div>
  
        <div>
          <label for="anio">Año de Fabricación:</label>
          <input id="anio" v-model.number="vehiculo.anio" type="number" />
          <span v-if="!esAnioValido(vehiculo.anio)">El año de fabricación no puede ser mayor al año actual.</span>
        </div>
  
        <div>
          <label for="serie">Número de Serie:</label>
          <input id="serie" v-model="vehiculo.serie" type="text" />
          <span v-if="!esNumeroDeSerieValido(vehiculo.serie)">El formato debe ser XXXX000-00XX.</span>
        </div>
  
        <button type="submit">Registrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        vehiculo: {
          marca: '',
          modelo: '',
          anio: null,
          serie: '',
        },
      };
    },
    methods: {
      esAlfanumerico(texto) {
        return /^[a-zA-Z0-9]+$/.test(texto);
      },
      esAnioValido(anio) {
        const anioActual = new Date().getFullYear();
        return anio && anio <= anioActual;
      },
      esNumeroDeSerieValido(serie) {
        return /^[A-Za-z]{4}\d{3}-\d{2}[A-Za-z]{2}$/.test(serie);
      },
      submitForm() {
        alert('Formulario enviado');
      },
    },
  };
  
  </script>
  