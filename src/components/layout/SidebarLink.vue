<template>
  <div class="flex items-center gap-3 px-3 py-2 rounded hover:bg-blue-700 cursor-pointer">
    <span class="text-lg">{{ icon }}</span>
    <span>{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  text: String
})
</script>
