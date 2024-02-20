<template>
  <div class="congrats-page">
    <div class="congrats-page__container">
      <div class="congrats-page__title">
        <h2>
          Поздравляем, теперь <br />
          ваш телефон защищен
        </h2>
      </div>
      <div class="congrats-page__img-container">
        <img src="../assets/panda.png" alt="panda" />
      </div>
      <router-link to="/login" rel="noopener">
        <ActionButton label="Перейти в личный кабинет" customStyle="black" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import ActionButton from "../components/ActionButton.vue";
</script>

<style scoped>
.congrats-page {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.congrats-page__title {
  max-width: 268px;
}

.congrats-page__title h2 {
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
  margin: 0;
}
.congrats-page__img-container {
  margin: 27px 0;
}
.congrats-page__img-container img {
  max-width: 144px;
}

.congrats-page__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
