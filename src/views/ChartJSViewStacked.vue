<template>
  <div class="p-4 pt-0">
    <div class="flex">
      <h2 class="text-2xl">chartjs</h2>
      <button class="">Add series</button>
    </div>
    
    <canvas ref="chartJS" class="w-full" height="400"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { format } from 'date-fns'
import Chart from 'chart.js/auto';
import { chartDataGenarator } from '@/helpers/helpers.js'

const chartJS = ref(null)

onMounted(() => {
  const DATA_COUNT = 7;
  const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

  const dataset = chartDataGenarator(10)
  const dataset1 = chartDataGenarator(10)
  const dataset2 = chartDataGenarator(10)
  const ctx = chartJS.value.getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
          label: 'Data 1',
          data: [60, 50, 70, 30, 40, 50, 60, 70, 50, 100],
          borderColor: "#00b489",
          backgroundColor: "#00b489",
          borderWidth: 2,
          fill: true,
        }]
      },
      options: {
        animation: false,
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            stacked: true,
            beginAtZero: true,
          }
        },
        interaction: {
          intersect: false,
          mode: 'x',
        },
        plugins: {
          tooltip: {
            position: 'nearest',
            padding: 8,
            boxPadding: 4,
            callbacks: {
              label: (context) => {
                return `${context.dataset.label}: ${context.parsed.y}`
              }
            },
            usePointStyle: true,
            bodyFont: {
              size: 15
            }
          },
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              padding: 32,
              font: {
                size: 13
              }
            }
          }
        }
      }
  });
})

</script>