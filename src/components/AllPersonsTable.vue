<template>
  <div>
    <DataTable :value="props.personList" removableSort paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
      <Column field="firstName" header="Name" sortable style="width: 25%"></Column>
      <Column field="lastName" header="Nachname" sortable style="width: 25%"></Column>
      <Column field="email" header="E-mail" sortable style="width: 25%"></Column>
      <Column field="phonePrivate" header="Telefon" sortable style="width: 25%"></Column>
      <Column field="street" header="Adresse" sortable style="width: 25%"></Column>
      <Column field="imageUrl" header="Bild" sortable style="width: 25%"></Column>
      <Column field="sexId" header="Geschlecht" sortable style="width: 25%"></Column>
      <Column field="statusId" header="Status" sortable style="width: 25%"></Column>
    </DataTable>
  </div>
</template>
<script setup lang="ts">

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';

const props = defineProps({
  personList: {
    type: Array,
    required: true,
    default: () => [],
  }
})



</script>
<style lang="">
  
</style>