<script setup>
import { onMounted, ref } from 'vue';

const chartData = ref();
const chartOptions = ref();

function setChartData() {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Income',
        backgroundColor: documentStyle.getPropertyValue('--p-green-500'),
        borderColor: documentStyle.getPropertyValue('--p-green-500'),
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: 'Expense',
        backgroundColor: documentStyle.getPropertyValue('--p-red-500'),
        borderColor: documentStyle.getPropertyValue('--p-red-500'),
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };
}
function setChartOptions() {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: { labels: { color: textColor } },
    },
    scales: {
      x: {
        ticks: { color: textColorSecondary, font: { weight: 500 } },
        grid: { display: false, drawBorder: false },
      },
      y: {
        ticks: { color: textColorSecondary },
        grid: { color: surfaceBorder, drawBorder: false },
      },
    },
  };
}

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});
</script>

<template>
  <div class="card">
    <div class="card-header">
      Balance Trends
    </div>
    <PChart type="bar" :data="chartData" :options="chartOptions" class="h-[24rem]" />
  </div>
</template>
