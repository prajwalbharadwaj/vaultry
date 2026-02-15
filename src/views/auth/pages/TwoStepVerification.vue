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
    <div class="my-8">
      <div class="text-2xl/9 tracking-tight text-gray-900 dark:text-gray-100">
        Check your email
      </div>
      <div class="text-sm tracking-tight text-gray-500 dark:text-gray-400">
        We sent a verification code to test@example.com
      </div>
    </div>
    <div class="grid gap-5">
      <div class="flex justify-center">
        <PInputOtp v-model="value">
          <template #default="{ attrs, events }">
            <input type="text" v-bind="attrs" class="custom-otp-input" v-on="events">
          </template>
        </PInputOtp>
      </div>

      <PButton label="Verify email" @click="router.push({ name: 'dashboard' })" />
    </div>
    <div class="my-6 space-y-2">
      <p class="text-sm text-gray-600 dark:text-gray-400">
        Didn't receive the email?
        <a class="text-primary-500 hover:text-black dark:hover:text-white cursor-pointer">Click to Resend</a>
      </p>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        Already have an account?
        <a class="text-primary-500 hover:text-black dark:hover:text-white cursor-pointer" @click="router.push({ name: 'login' })">Login</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.custom-otp-input {
    width: 40px;
    font-size: 36px;
    border: 0 none;
    appearance: none;
    text-align: center;
    transition: all 0.2s;
    background: transparent;
    border: 2px solid var(--p-gray-300);
    border-radius: 8px;
}

.custom-otp-input:focus {
    outline: 0 none;
    border-color: var(--p-primary-color);
}
</style>
