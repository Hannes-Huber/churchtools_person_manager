<script setup lang="ts">
import { computed } from 'vue';
import Navbar from './components/Navbar.vue';
import { initChurchToolsClient } from '@/churchtools_api/churchtools-api-functions'

const isDev = computed(() => import.meta.env.MODE === 'development');
const baseUrl: string = 'https://jobs.church.tools';

initChurchToolsClient(baseUrl, true);
</script>

<template>
    <div class="bg-background text-foreground min-h-screen">
        <Navbar />
        <RouterView />
    </div>
</template>
<style scoped>
.navbar {
    height: 56px;
    background: #0e204b;
}
</style>

