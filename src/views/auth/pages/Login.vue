<script setup>
import { useCommonImports } from '~/common/composables/common-imports.composable.js';

const { router } = useCommonImports();
const state = reactive({
  form: {
    email: '',
    password: '',
  },
});
</script>

<template>
  <div class="mx-auto w-full max-w-sm lg:w-96">
    <div class="my-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
      Vaultry
    </div>
    <div class="my-8 text-2xl/9 tracking-tight text-gray-900 dark:text-gray-100">
      Sign in to your account
    </div>
    <div class="grid gap-5">
      <div class="flex flex-col gap-2">
        <label for="email">Email</label>
        <PInputText id="email" v-model="state.form.email" aria-describedby="email-help" placeholder="Email" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password">Password</label>
        <PPassword id="password" v-model="state.form.password" aria-describedby="Password" fluid aria-placeholder="Password" placeholder="Password" />
      </div>
      <PButton label="Login" @click="router.push({ name: 'dashboard' })" />
    </div>
    <div class="my-6 space-y-2">
      <p class="text-sm text-gray-600 dark:text-gray-400">
        Don't have an account?
        <a class="text-primary-500 hover:text-black dark:hover:text-white cursor-pointer" @click="router.push({ name: 'register' })">Create an account</a>
      </p>
    </div>
  </div>
</template>
