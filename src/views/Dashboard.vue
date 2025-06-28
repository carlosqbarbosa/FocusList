<template>
  <div class="flex">
    <Sidebar />
    <main class="p-6 bg-gray-100 flex-1">
      <TheHeader />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatusCard />
        <GithubChart />
        <BarChart />
      </div>
    </main>
  </div>
</template>

<script setup>
import Sidebar from '../components/layout/Sidebar.vue'
import TheHeader from '../components/layout/TheHeader.vue'
import StatusCard from '../components/charts/StatusCard.vue'
import BarChart from '../components/charts/BarChart.vue'
import GithubChart from '../components/charts/GithubChart.vue'
</script>

