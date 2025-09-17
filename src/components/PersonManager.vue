<template>
  <div class="py-4">
    <div class="flex w-full justify-center my-4">
      <input v-model="limit" placeholder="Personen limit" class="border-2 border-gray-950 rounded-2xl px-5 mx-2"></input>
      <Button class="!p-3 text-lg rounded-2xl" @click="getPersons">Zeige alle Personen</Button>
    </div>
    <div v-if="personsLoading">Loading persons...</div>
    <AllPersonsTable v-else :personList />
    <PersonSingleView />
  </div>
</template>
<script setup lang="ts">
import { useChurchtools } from '@/churchtools_api/useChurchtools';
import AllPersonsTable from './AllPersonsTable.vue';
import Button from 'primevue/button';
import { getAllPersons } from '@/churchtools_api/churchtools-api-functions';
import { ref, watch } from 'vue';
import PersonSingleView from './PersonSingleView.vue'

const limit = ref<number>(100)

const { data: personList, error: personsError, refetch: refetchPersons, isLoading: personsLoading } = useChurchtools<any>(getAllPersons, { limit: limit })


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