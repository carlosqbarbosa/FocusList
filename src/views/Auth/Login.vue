<template>
  <div class="min-h-screen flex">
<!-- Lado Esquerdo (Formulário estilizado) -->
<div class="w-full md:w-1/2 flex items-center justify-center bg-white min-h-screen">
  <div class="w-full max-w-sm p-6">
    
    <!-- Logo vertical -->
    <div class="flex flex-col items-center mb-8">
      <svg xmlns="http://www.w3.org/2000/svg"
           class="h-10 w-10 text-blue-600 mb-2"
           fill="none"
           viewBox="0 0 24 24"
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 13l4 4L19 7" />
      </svg>
      <h1 class="text-3xl font-bold text-blue-700">FocusList</h1>
    </div>

    <!-- Título -->
    <h2 class="text-xl font-semibold text-gray-800 mb-6 text-center">Sign In</h2>

    <!-- Formulário -->
    <form @submit.prevent="handleLogin" class="space-y-4">
      <!-- Campo Email com ícone -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Enter email</label>
        <div class="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
          <svg class="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M16 12H8m8 0H8m8 0H8m0 0v6m0-6V6m0 6h8" />
          </svg>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            placeholder="Enter email"
            class="w-full focus:outline-none"
          />
        </div>
      </div>

      <!-- Campo Senha com ícone -->
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Enter password</label>
        <div class="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
          <svg class="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2 2 4 2 4 2-2.896 2-4zm6 0a6 6 0 11-12 0 6 6 0 0112 0z" />
          </svg>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            placeholder="Enter Password"
            class="w-full focus:outline-none"
          />
        </div>
      </div>

      <!-- Lembrar e Registro -->
      <div class="flex items-center justify-between text-sm text-gray-600">
        <label class="flex items-center">
          <input type="checkbox" class="mr-2" />
          Remember Me
        </label>
        <router-link to="/register" class="text-blue-600 hover:underline">
          Create One
        </router-link>
      </div>

      <!-- Botão -->
      <button
        type="submit"
        class="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
      >
        Login
      </button>
    </form>
  </div>
</div>

        <!-- Lado Direito (Imagem preenchendo toda a área cinza) -->
    <div class="hidden md:block md:w-1/2 h-screen overflow-hidden bg-gray-100">
      <img
        :src="imgLogin"
        alt="Login illustration"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import imgLogin from '@/assets/img/img-login.png'

const handleLogin = () => {
  if (email.value && password.value) {
    // Armazena temporariamente o usuário
    localStorage.setItem('user', JSON.stringify({ email: email.value }))

    // Redireciona para /dashboard
    router.push('/dashboard')
  } else {
    alert('Preencha todos os campos!')
  }
}
</script>
