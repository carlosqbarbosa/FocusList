<template>
  <div class="bg-white rounded-xl p-4 shadow">
    <h3 class="text-md font-semibold mb-4">Horas focadas por mês (Pomodoro)</h3>
    <div class="flex items-end gap-2 h-32">
      <div
        v-for="(bar, i) in bars"
        :key="i"
        class="w-4 rounded-t"
        :class="bar.max ? 'bg-blue-600' : 'bg-gray-400'"
        :style="{ height: bar.height + 'px' }"
      ></div>
    </div>
    <p class="text-xs text-center mt-2">Junho: 23 horas de foco</p>
  </div>
</template>

<script setup>
const bars = [
  { height: 40 }, { height: 30 }, { height: 50 }, { height: 20 },
  { height: 35 }, { height: 60 }, { height: 100, max: true }, { height: 50 },
  { height: 45 }, { height: 30 }, { height: 40 }, { height: 25 },
];
</script>

