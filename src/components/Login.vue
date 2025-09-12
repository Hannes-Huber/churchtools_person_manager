<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod"
import { useForm } from "vee-validate"
import { h } from "vue"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from 'vue-sonner'
import { login, handleError } from '@/churchtools_api/churchtools-api-functions'
import { churchtoolsClient } from "@churchtools/churchtools-client"

const emit = defineEmits<{ (e: 'login-success', username: string ): void }>()

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
}))

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
  const username = values.username;
  const password = values.password;

  login(username, password).then(() => {
      toast({
        title: "You submitted the following values:",
        description: h("pre", { class: "mt-2 w-[340px] rounded-md bg-slate-950 p-4" }, h("code", { class: "text-white" }, JSON.stringify(values, null, 2))),
      })
      emit('login-success', username);
      return churchtoolsClient.get('/whoami').then(whoAmI => {
          console.dir(whoAmI);
          // document.getElementById('loginform').style.display = 'none';
          // document.getElementById('greeting').style.display = 'block';
          // document.getElementById('name').innerText = whoAmI.firstName;
      });
  }).catch(handleError);
})

</script>

<template>
  <form class="w-2/3 space-y-6" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="username" :validate-on-blur="!isFieldDirty">
      <FormItem>
        <FormLabel>Nutzername</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Max Meising" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password" :validate-on-blur="!isFieldDirty">
      <FormItem>
        <FormLabel>Passwort</FormLabel>
        <FormControl>
          <Input type="password" placeholder="***" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit">
      Submit
    </Button>
  </form>
</template>