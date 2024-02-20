<template>
  <div class="home-page">
    <Preview :data="previewData"/>
    <About :data="aboutData"/>
  </div>
</template>

<script setup>
import Preview from "../components/HomePreview.vue";
import About from "../components/HomeAbout.vue";
import { data as aboutData } from "../configs/HomePage/about.js";
import { data as previewData } from "../configs/HomePage/preview.js";
</script>

<style scoped>
.home-page {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
}
</style>
