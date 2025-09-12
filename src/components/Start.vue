<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Button from 'primevue/button';
import Login from './Login.vue';
import { useAuthStore } from '../global/pinia/store';

const auth = useAuthStore();
// const user = ref<string | null>(null)

onMounted(() => {
    
});

const handleLoginSuccess = (loggedInUser: string | null ) => {
    auth.login(loggedInUser);
}

</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div v-if="auth.username" class="flex flex-col w-full max-w-md items-center space-y-6 p-6 rounded-2xl shadow-md bg-gray-700">
      <h1 class="text-2xl font-bold">Willkommen, {{ auth.username }}!</h1>
        <div class="flex w-full justify-center">
        </div>
    </div>

    <div v-else class="flex w-full justify-center">
      <Login @login-success="handleLoginSuccess"/>
    </div>
  </div>
</template>

<style>
.home {
    text-align: center;
}
</style>