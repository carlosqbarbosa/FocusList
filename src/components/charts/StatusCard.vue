<template>
  <div class="bg-white p-4 rounded-lg shadow flex items-center gap-4">
    <div :class="['p-3 rounded-full', iconColor]">
      <slot name="icon" />
    </div>
    <div>
      <p class="text-sm text-gray-500">{{ label }}</p>
      <p class="text-2xl font-bold text-gray-800">{{ value }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: [String, Number],
  iconColor: String,
});
</script>
