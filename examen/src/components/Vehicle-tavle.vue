<template>
    <div>
      <table>
        <thead>
          <tr>
            <th @click="sortBy('marca')">Marca</th>
            <th @click="sortBy('modelo')">Modelo</th>
            <th @click="sortBy('anioFabricacion')">Año de Fabricación</th>
            <th @click="sortBy('numeroSerie')">Número de Serie</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="vehicle in paginatedData" :key="vehicle.id">
            <td>{{ vehicle.marca }}</td>
            <td>{{ vehicle.modelo }}</td>
            <td>{{ vehicle.anioFabricacion }}</td>
            <td>{{ vehicle.numeroSerie }}</td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <button @click="prevPage" :disabled="page === 1">Anterior</button>
        <span>Página {{ page }} de {{ totalPages }}</span>
        <button @click="nextPage" :disabled="page === totalPages">Siguiente</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['vehicles'],
    data() {
      return {
        page: 1,
        perPage: 10,
        currentPageData: [],
        sortKey: '',
        sortOrder: 'asc'
      };
    },
    computed: {
      sortedData() {
        return this.vehicles.sort((a, b) => {
          let modifier = 1;
          if (this.sortOrder === 'desc') modifier = -1;
          if (a[this.sortKey] < b[this.sortKey]) return -1 * modifier;
          if (a[this.sortKey] > b[this.sortKey]) return 1 * modifier;
          return 0;
        });
      },
      paginatedData() {
        const start = (this.page - 1) * this.perPage;
        const end = start + this.perPage;
        return this.sortedData.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.vehicles.length / this.perPage);
      }
    },
    methods: {
      sortBy(sortKey) {
        this.sortOrder = this.sortKey === sortKey && this.sortOrder === 'asc' ? 'desc' : 'asc';
        this.sortKey = sortKey;
      },
      nextPage() {
        if (this.page < this.totalPages) this.page++;
      },
      prevPage() {
        if (this.page > 1) this.page--;
      }
    }
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  th {
    cursor: pointer;
  }
  .pagination {
    margin-top: 20px;
    text-align: center;
  }
  </style>
  