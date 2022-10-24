<template>
  <header class="flex items-center px-4 h-20 border-b">
    <h1 class="text-3xl">Chart Comparison</h1>
  </header>

  <div class="flex flex-wrap gap-4 p-4">
    <RouterLink to="/apexchart" class="border p-6 flex-1 text-center">ApexChart</RouterLink>
    <RouterLink to="/chartjs" class="border p-6 flex-1 text-center">ChartJS</RouterLink>
    <RouterLink to="/chartjsstacked" class="border p-6 flex-1 text-center">ChartJSStacked</RouterLink>
  </div>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>
