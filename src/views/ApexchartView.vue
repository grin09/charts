<template>
  <div class="p-4 pt-0">
    <div class="flex">
      <h2 class="text-2xl">apexchart</h2>
      <button class="">Add series</button>
    </div>
    
    <VueApexCharts height="350" :options="chartOptions" :series="chartData.series" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { chartDataGenarator } from '@/helpers/helpers.js'

let chartData = reactive({
  series: [{
    name: 'data 1',
    data: chartDataGenarator(10)
  }, {
    name: 'data 2',
    data: chartDataGenarator(15)
  }, {
    name: 'data 3',
    data: chartDataGenarator(25)
  }]
})

const chartOptions = reactive({
  chart: {
    type: 'line',
    toolbar: { show: false },
    zoom: { enabled: false },
    animations: { enabled: false },
  },
  colors: ['#23BE53', '#8BC514', '#FFC700', '#FF7A00', '#E72121'],
  grid: {
    show: true,
    strokeDashArray: 5,
    position: 'back',
    yaxis: { lines: { show: true } },
  },
  dataLabels: { enabled: false },
  noData: {
    text: 'No data for this date range',
    style: {
      fontSize: '16px'
    }
  },
  xaxis: {
    axisTicks: { show: false },
    axisBorder: { show: true, color: '#000' },
    type: 'datetime',
    labels: {
      show: true,
      style: {
        colors: '#85899C',
        fontSize: '12px'
      }
    }
  },
  yaxis: {
    axisBorder: { show: false },
    axisTicks: { show: false },
    crosshairs: { show: false },
    tooltip: { enabled: false },
    labels: {
      style: {
        colors: '#85899C',
        fontSize: '12px'
      }
    }
  },
  stroke: {
    curve: 'smooth',
    width: 1
  },
  legend: {
    fontSize: '12px',
    fontWeight: 500,
    labels: {
      colors: ['#000']
    },
    markers: {
      radius: 12
    },
    itemMargin: {
      horizontal: 32,
      vertical: 4
    },
  },
  tooltip: {
    x: {
      format: 'd MMM yyyy'
    }
  },
})

</script>