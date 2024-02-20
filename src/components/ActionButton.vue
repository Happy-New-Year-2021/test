<template>
  <div class="action-button__container">
    <Button
      :class="customStyle"
      :label="label"
      type="submit"
      class="action-button"
      severity="secondary"
      rounded
    ></Button>
    <div v-if="agreementText" class="action-agreement">
      <p>{{ agreementText }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  label: String,
  agreementText: String,
  customStyle: String,
});
</script>

<style scoped>
.action-button__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.action-agreement {
  margin-top: 9px;
  max-width: 222px;
}

.action-button {
  height: 48px;
}

.action-agreement p {
  margin: 0;
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  color: rgba(143, 147, 153, 1);
}
.action-button.light {
  background-color: rgba(255, 255, 255, 1);
  color: rgba(31, 34, 41, 1);
}

.action-button.black {
  background-color: rgba(31, 34, 41, 1);
  color: rgba(255, 255, 255, 1);
}
</style>
