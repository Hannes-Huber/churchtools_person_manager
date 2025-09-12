<template>
  <Button @click="userLogout">Logout</Button>
</template>
<script setup lang="ts">
  import Button from './ui/button/Button.vue';
  import { logout } from '@/churchtools_api/churchtools-api-functions';
  import { useChurchtools } from '@/churchtools_api/useChurchtools';
  import { useAuthStore } from '@/global/pinia/store';

  const auth = useAuthStore();

  const handleLogoutSuccess = () => {
    auth.logout();
  }

  const userLogout = () => {
    // useChurchtools(() => logout());
    useChurchtools(logout);
    handleLogoutSuccess();
  }
</script>
<style lang="">
  
</style>