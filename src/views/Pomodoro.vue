<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white rounded shadow p-8 w-full max-w-md text-center">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">Modo Pomodoro</h1>
      <p class="text-xl">{{ formatTime(timer) }}</p>
      <div class="mt-6 flex justify-center gap-4">
        <button
          @click="startTimer"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Iniciar
        </button>
        <button
          @click="resetTimer"
          class="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Resetar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const timer = ref(25 * 60)
let intervalId = null

function startTimer() {
  if (intervalId) return
  intervalId = setInterval(() => {
    if (timer.value > 0) {
      timer.value--
    } else {
      clearInterval(intervalId)
      intervalId = null
    }
  }, 1000)
}

function resetTimer() {
  clearInterval(intervalId)
  intervalId = null
  timer.value = 25 * 60
}

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0')
  const s = String(seconds % 60).padStart(2, '0')
  return `${m}:${s}`
}
</script>
