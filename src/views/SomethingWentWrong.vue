<template>
  <div class="wrong-page">
    <div class="wrong-page__container">
      <div class="wrong-page__title">
        <h2>
          Что-то пошло <br />
          не так
        </h2>
      </div>
      <div class="wrong-page__img-container">
        <img src="../assets/oups.png" alt="panda" />
      </div>
      <router-link to="/" rel="noopener">
        <ActionButton label="Вернуться назад" customStyle="black" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import ActionButton from "../components/ActionButton.vue";
</script>

<style scoped>
.wrong-page {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrong-page__title {
  max-width: 268px;
}

.wrong-page__title h2 {
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
  margin: 0;
}
.wrong-page__img-container {
  margin: 27px 0;
}
.wrong-page__img-container img {
  max-width: 144px;
}

.wrong-page__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
