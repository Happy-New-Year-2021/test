<template>
  <div class="app-container">
    <div class="app-header">
      <AppMenu></AppMenu>
    </div>
    <div class="app-page">
      <Suspense>
        <router-view />
      </Suspense>
    </div>
  </div>
</template>

<script setup>
import AppMenu from "./components/AppMenu.vue";
</script>

<style>
@import "./assets/custom.css";

.app-container {
  width: 100%;
  height: 100dvh;
}

.app-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "app-header"
    "app-page";
}
.app-header {
  grid-area: app-header;
}
.app-page {
  grid-area: app-page;
  overflow-y: auto;
}
</style>
