<template>
  <section class="preview">
    <div class="preview-wrapper">
      <div class="preview-title">
        <h2>{{ data.title }}</h2>
      </div>
      <div class="preview-description">
        <p>{{ data.description }}</p>
      </div>

      <div class="preview__img-container">
        <img :src="data.imageSrc" alt="sofa" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  data: Object,
});
</script>

<style scoped>
.preview-wrapper {
  padding: 0 18px;
  display: flex;
  flex-direction: column;
}

.preview-title {
  max-width: 250px;
}

.preview-title h2 {
  font-size: 28px;
  font-weight: 700;
  line-height: 28px;
  margin: 18px 0;
}

.preview-description p {
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin: 0 0 18px 0;
}

.preview__img-container {
  max-width: 560px;
  align-self: center;
}

.preview__img-container img {
  width: 100%;
}
</style>
