<template>
  <div class="bg-white shadow rounded p-4 flex items-center gap-4">
    <div class="text-2xl text-blue-500">
      <slot name="icon" />
    </div>
    <div>
      <h3 class="text-sm text-gray-500">{{ title }}</h3>
      <p class="text-lg font-bold">{{ value }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
})
</script>
