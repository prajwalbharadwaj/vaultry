<script setup>
import dayjs from 'dayjs';

const state = reactive({
  chartData: null,
  chartData: null,
});
const currentMonthDays = dayjs().daysInMonth();
const shortMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function setChartData() {
  const documentStyle = getComputedStyle(document.documentElement);
  const labels = Array.from({ length: currentMonthDays }, (_, i) => i + 1);
  const data = Array.from({ length: currentMonthDays }, () => Math.random() * 1000);

  return {
    labels,
    datasets: [
      {
        label: 'Balance',
        data,
        fill: true,
        backgroundColor: 'rgba(43, 127, 255, 0.05)',
        borderColor: documentStyle.getPropertyValue('--p-blue-500'),
        // tension: 0.4,
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
    aspectRatio: 0.6,
    plugins: {
      legend: { display: false, labels: { color: textColor } },
      tooltip: {
        callbacks: {
          title(tooltipItems) {
            const month = dayjs().month();
            const xLabel = tooltipItems[0].label;
            return `${xLabel}-${shortMonthNames[month]}-${dayjs().year()}`;
          },
        },
      },
    },
    scales: {
      x: { ticks: { color: textColorSecondary }, grid: { color: surfaceBorder } },
      y: { ticks: { color: textColorSecondary }, grid: { color: surfaceBorder } },
    },
  };
}

onMounted(() => {
  state.chartData = setChartData();
  state.chartOptions = setChartOptions();
});
</script>

<template>
  <div class="card">
    <div class="card-header mb-3">
      Balance Trends
    </div>
    <PChart
      type="line"
      :data="state.chartData"
      :options="state.chartOptions"
      class="h-[24rem]"
    />
  </div>
</template>
