<template>
  <section class="about">
    <div class="about-wrapper">
      <div class="about-title">
        <h2>{{ data.title }}</h2>
      </div>
      <ul>
        <li v-for="item in data.list" :key="item">{{ item }}</li>
      </ul>
      <div v-if="data.template.value" class="about-actions">
        <router-link :to="data.route" rel="noopener">
          <component
            :is="data.template.value"
            :label="data.buttonText"
            :customStyle="data.style"
            :agreementText="data.agreementText"
          ></component>
        </router-link>
      </div>
    </div>

    <div class="about-img-container">
      <img src="../assets/waves.svg" alt="waves" />
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
.about-wrapper {
  padding: 21px;
  display: flex;
  flex-direction: column;
}

.about-title {
  max-width: 333px;
}
.about-actions {
  align-self: center;
}
.about-title h2 {
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  color: rgba(255, 255, 255, 1);
  margin: 0;
}

.about ul {
  margin: 18px 0 27px 0;
}

.about ul li {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: rgba(255, 255, 255, 1);
}

.about p {
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
}

.about-img-container {
  width: 100%;
}

.about-img-container img {
  width: 100%;
}

.about {
  background-color: rgba(31, 34, 41, 1);
}
</style>
