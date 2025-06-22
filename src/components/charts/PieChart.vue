<template>
  <PieChart :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title, Tooltip, Legend,
  ArcElement,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

const chartData = {
  labels: ['Concluídas', 'Pendentes', 'Atrasadas'],
  datasets: [
    {
      label: 'Tarefas',
      backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
      data: [20, 10, 5],
    },
  ],
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'right' },
    title: { display: true, text: 'Distribuição de Tarefas' },
  },
}
</script>
