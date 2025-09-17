<template>
  <div>
    <DataTable :value="props.personList" removableSort paginator @row-click="onRowClick" showGridlines :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
      <Column field="imageUrl" header="Bild" style="width: 5%">
        <template #body="slotProps">
          <Avatar
            :image="slotProps.data.imageUrl"
            class="mr-2"
            size="large"
            shape="circle"
          />
        </template>
      </Column>
      <Column field="firstName" header="Name" sortable style="width: 10%"></Column>
      <Column field="lastName" header="Nachname" sortable style="width: 10%"></Column>
      <Column header="Kontakt" style="width: 25%">
        <template #body="slotProps">
          <div>
            <div><b>Email:</b> {{ slotProps.data.email }}</div>
            <div><b>Tel:</b> {{ slotProps.data.phonePrivate }}</div>
          </div>
        </template>
      </Column>
     <Column header="Adresse" style="width: 20%">
        <template #body="slotProps">
          <span>
            {{ slotProps.data.street }},
            {{ slotProps.data.zip }} {{ slotProps.data.city }}
          </span>
        </template>
      </Column>
      <Column field="sexId" header="Geschlecht" sortable style="width: 10%">
        <template #body="slotProps">
          <div v-if="slotProps.data.sexId == 1" class="rounded-2xl bg-blue-400 text-gray-900 w-min p-0.5 px-2" >
            Männlich
          </div>
          <div v-else-if="slotProps.data.sexId == 2" class="rounded-2xl bg-pink-400 text-gray-900 w-min p-0.5 px-2" >
            Weiblich
          </div>
          <div v-else-if="slotProps.data.sexId == 3" class="rounded-2xl bg-yellow-300 text-gray-900 w-min p-0.5 px-2 whitespace-nowrap" >
            Divers
          </div>
          <div v-else class="rounded-2xl bg-gray-300 text-gray-900 w-min p-0.5 px-2 whitespace-nowrap" >
            Nicht angegeben
          </div>
        </template>
      </Column>
      <Column field="statusId" header="Status" sortable style="width: 10%">
        <template #body="slotProps">
          <div v-if="slotProps.data.statusId == 0" class="rounded-2xl bg-amber-300 text-gray-900 w-min p-0.5 px-2" >
            Potential
          </div>
          <div v-else-if="slotProps.data.statusId == 1" class="rounded-2xl bg-green-300 text-gray-900 w-min p-0.5 px-2" >
            Freund
          </div>
          <div v-else-if="slotProps.data.statusId == 2" class="rounded-2xl bg-blue-300 text-gray-900 w-min p-0.5 px-2" >
            Mitglied
          </div>
          <div v-else class="rounded-2xl bg-red-400 text-gray-900 w-min p-0.5 px-2 whitespace-nowrap" >
            Zu löschen
          </div>
        </template></Column>
    </DataTable>
  </div>
</template>
<script setup lang="ts">

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import Avatar from 'primevue/avatar';

const props = defineProps({
  personList: {
    type: Array,
    required: true,
    default: () => [],
  }
})

function onRowClick(event: any) {
  const person = event.data;
  console.log("Clicked row:", person);

  // router.push(`/persons/${person.id}`)
}



</script>
<style lang="">
  
</style>