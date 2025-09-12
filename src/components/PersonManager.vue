<template>
  <div class="py-4">
    <div class="flex w-full justify-center my-4">
      <Button class="!p-3 text-lg" @click="getPersons">Zeige alle Personen</Button>
    </div>
    <div v-if="personsLoading">Loading persons...</div>
    <AllPersonsTable v-else :personList />
  </div>
</template>
<script setup lang="ts">
import { useChurchtools } from '@/churchtools_api/useChurchtools';
import AllPersonsTable from './AllPersonsTable.vue';
import Button from 'primevue/button';
import { getAllPersons } from '@/churchtools_api/churchtools-api-functions';
import { watch } from 'vue';


const { data: personList, error: personsError, refetch: refetchPersons, isLoading: personsLoading } = useChurchtools<any>(getAllPersons)


const getPersons = async () => {
  await refetchPersons();
  console.log(personList.value)
  console.log("Test")
}

watch(personList, () => {
  
});
</script>
<style lang="">
  
</style>