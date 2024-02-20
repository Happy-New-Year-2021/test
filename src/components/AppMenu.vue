<template>
  <div class="header-menu">
    <div class="header-logo">
      <router-link to="/"><h1>Simple Trade</h1></router-link>
      <span>Портал честных цен</span>
    </div>
    <div class="header-profile">
      <router-link to="/login"><img src="../assets/user.svg" alt="user icon" /></router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.header-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 18px;
  min-height: 49px;
}

.header-logo {
  display: flex;
  flex-direction: column;
}

.header-logo h1 {
  margin: 0;
  font-family: Roboto Slab;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
}

.header-logo span {
  font-family: Tele2 TextSans SHORT;
  font-size: 6px;
  font-weight: 400;
  line-height: 7px;
  letter-spacing: 0em;
  text-align: right;
}
</style>
