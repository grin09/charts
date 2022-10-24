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
  console.log(chartJS)

  const dataset = chartDataGenarator(10)
  const dataset1 = chartDataGenarator(15)
  const dataset2 = chartDataGenarator(10)
  const ctx = chartJS.value.getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'scatter',
      data: {
        // labels: dataset2.map((point) => format(point.x, 'MMM d yyyy')),
        datasets: [{
          label: 'Data 1',
          data: dataset,
          borderColor: '#23BE53',
          backgroundColor: '#23BE53',
          borderWidth: 2,
          showLine: true,
          tension: .5,
          fill: true,
        }, {
          label: 'Data 2',
          data: dataset1,
          borderColor: '#8BC514',
          backgroundColor: '#8BC514',
          borderWidth: 2,
          showLine: true,
          tension: .5,
          fill: true,
        }, {
          label: 'Data 3',
          data: dataset2,
          borderColor: '#FFC700',
          backgroundColor: '#FFC700',
          borderWidth: 2,
          showLine: true,
          tension: .5,
          fill: true,
        }]
      },
      options: {
        animation: false,
        scales: {
          x: {
            ticks: {
              callback: function(value, index, ticks) {
                return format(value, 'MMM d yyyy');
              },
              color: 'grey'
            },
            grid: {
              display: false
            }
          },
          y: {
            stacked: true,
            beginAtZero: true,
            grid: {
              borderDash: [5, 5]
            }
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