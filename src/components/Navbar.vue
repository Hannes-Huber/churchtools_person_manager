<template>
  <nav v-if="auth.username" class="bg-white text-black px-4 py-3 sticky top-0 z-50">
    <div class="flex justify-between items-center">

      <!-- Logo -->
      <div class="font-bold text-xl">Churchtools Lite</div>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-6">
        <li v-for="item in menu" :key="item.name">
          <router-link :to="item.to" class="hover:text-gray-200">{{ item.name }}</router-link>
        </li>
        <Logout_Button/>
      </ul>

      <!-- Mobile Hamburger -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <span v-if="!open">☰</span>
        <span v-else>✕</span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <ul v-if="open" class="md:hidden mt-2 space-y-2 bg-white px-4 py-2 rounded">
      <li v-for="item in menu" :key="item.name">
        <router-link 
          :to="item.to" 
          class="block hover:text-gray-200"
          @click="toggleMenu"
        >
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Logout_Button from './Logout_Button.vue';
import { useAuthStore } from '@/global/pinia/store';

const open = ref(false);
const auth = useAuthStore();

const menu = [
  { name: "Home", to: "/" },
  { name: "Personen Liste", to: "/person-manager" },
  { name: "Personen Suche", to: "/person-search" },
];

const toggleMenu = () => {
  open.value = !open.value;
};

</script>
