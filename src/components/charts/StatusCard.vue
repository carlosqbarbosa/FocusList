<template>
  <div class="bg-white rounded-xl p-4 shadow">
    <h3 class="text-md font-semibold mb-4">Tarefas concluídas e pendentes do mês</h3>
    <div v-for="(task, index) in tasks" :key="index" class="mb-4">
      <div class="h-3 bg-blue-600 rounded w-[60%] mb-1"></div>
      <div class="h-3 bg-gray-300 rounded w-[80%]"></div>
    </div>
    <p class="text-sm text-gray-500">Categoria: Faculdade</p>
  </div>
</template>

<script setup>
const tasks = [1, 2, 3]; // Simula 3 tarefas
</script>
