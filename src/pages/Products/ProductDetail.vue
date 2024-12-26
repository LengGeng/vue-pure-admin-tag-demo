<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="page-container">
    <div class="title">ProductDetail</div>
    <div>query: {{ route.query }}</div>
    <div>params: {{ route.params }}</div>
  </div>
</template>
