<script setup lang="ts">
import { useChurchtools } from "../churchtools_api/useChurchtools"
import { getPersonById } from "../churchtools_api/churchtools-api-functions"
import { ref } from 'vue';
import Button from "primevue/button";

const personid = ref<any>(1)
const {data: person, isLoading: personLoading, refetch: refetchPerson, error: personError } = useChurchtools<any>(getPersonById, personid.value);

const getPerson = async (id: number) => {
    await refetchPerson(id)
    console.log("erhalten: " + JSON.stringify(person.value, null, 2))
}
</script>

<template>
  <div class="flex w-full space-x-2">
    <h3>Person id:</h3>
    <input 
      v-model="personid" 
      placeholder="Person ID" 
      type="number"
      class="flex-1 border rounded-lg p-2 text-lg"
    />
    <Button class="!p-3 text-lg" @click="getPerson(personid)">Suchen</Button>
  </div>

  <div class="text-center">
    <p v-if="personLoading" class="text-gray-500">Loading person…</p>
    <p v-else-if="personError" class="text-red-500">{{ personError.message }}</p>
    <p v-else-if="person" class="text-xl font-medium">
      {{ person?.firstName }} {{ person?.lastName }}
    </p>
  </div>
</template>