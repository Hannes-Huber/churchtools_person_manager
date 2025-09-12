import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useStore = defineStore('main', {
   
});

export const useAuthStore = defineStore(
  "auth",
  () => {
    // state
    const username = ref<string | null>(null);

    // actions
    const login = (newUsername: string | null) => {
      username.value = newUsername;
    };

    const logout = () => {
      username.value = null;
    };

    return { username, login, logout };
  }, { persist: true }
);

// interface AuthState {
//   username: string | null;
// }

// export const useAuthStore = defineStore('user', {
//   state: (): AuthState => ({
//     username: null,
//   }),
//   actions: {
//     changeUser(newUsername: string) {
//       this.username = newUsername;
//     },
//   },
//   getters: {

//   },
//   persist: {
//     enabled: true,
//     strategies: [
//       {
//         storage: localStorage,
//       },
//     ],
//   },
// });

