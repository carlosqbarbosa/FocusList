<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <h1 class="text-2xl font-bold mb-6">Dashboard de Tarefas</h1>

    <!-- Indicadores -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <StatusCard title="Tarefas Hoje" :value="5">
        <template #icon>✔️</template>
      </StatusCard>
      <StatusCard title="Pendentes" :value="12">
        <template #icon>⏳</template>
      </StatusCard>
      <StatusCard title="Atrasadas" :value="3">
        <template #icon>⚠️</template>
      </StatusCard>
    </div>

    <!-- Gráficos -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="bg-white p-4 rounded shadow">
        <BarChart />
      </div>
      <div class="bg-white p-4 rounded shadow">
        <PieChart />
      </div>
      <div class="lg:col-span-2 bg-white p-4 rounded shadow">
        <LineChart />
      </div>
    </div>
  </div>
</template>

<script setup>
import StatusCard from '../tasks/StatusCard.vue'
import BarChart from '../components/charts/BarChart.vue'
import PieChart from '../components/charts/PieChart.vue'
import LineChart from '../components/charts/LineChart.vue'
</script>

