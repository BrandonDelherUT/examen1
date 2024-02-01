<template>
    <div>
      <vehicle-table :vehicles="vehicles"></vehicle-table>
    </div>
  </template>
  
  <script>
  import VehicleTable from '@/components/VehicleTable.vue';
  
  export default {
    components: {
      VehicleTable
    },
    data() {
      return {
        vehicles: [
            
        ]
      };
    }
  };
  </script>
  