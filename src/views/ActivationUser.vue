<template>
  <div class="activation-form">
    <h2>
      Для активации подписки <br />
      заполните форму
    </h2>
    <form @submit.prevent="handleSubmitPassword(!v$.$invalid)">
      <div class="input-field" :class="{ invalid: v$.username.$invalid && v$.username.$dirty }">
        <FloatLabel>
          <InputText
            id="username"
            class="full-width"
            v-model="v$.username.$model"
            :class="{ 'p-invalid': v$.username.$invalid && v$.username.$dirty }"
          />
          <label for="username">Введите имя</label>
        </FloatLabel>
      </div>
      <small v-for="error of v$.username.$errors" :key="error.$uid" class="error-message">
        {{ error.$message }}
      </small>
      <div class="input-field" :class="{ invalid: v$.email.$invalid && v$.email.$dirty }">
        <FloatLabel>
          <InputText
            id="email"
            class="full-width"
            v-model="v$.email.$model"
            :class="{ 'p-invalid': v$.email.$invalid && v$.email.$dirty }"
          />
          <label for="email">Email</label>
        </FloatLabel>
      </div>
      <small v-for="error of v$.email.$errors" :key="error.$uid" class="error-message">
        {{ error.$message }}
      </small>
      <div class="input-field" :class="{ invalid: v$.phone.$invalid && v$.phone.$dirty }">
        <FloatLabel>
          <InputText
            id="phone"
            class="full-width"
            v-model="v$.phone.$model"
            v-mask="' +7 ### ### ## ##'"
            :class="{ 'p-invalid': v$.phone.$invalid && v$.phone.$dirty }"
          />
          <label for="phone">Введите телефон</label>
        </FloatLabel>
      </div>
      <small v-for="error of v$.phone.$errors" :key="error.$uid" class="error-message">
        {{ error.$message }}
      </small>
      <div class="form-actions">
        <ActionButton label="Подключить" customStyle="black" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import useValidate from "@vuelidate/core";
import { required, helpers, email } from "@vuelidate/validators";
import ActionButton from "../components/ActionButton.vue";
import { useProfileStore } from "../store/profile.js";
import router from "../router";

const profileStore = useProfileStore();

const phoneRegex = /^\s*\+7\s*(\d{3})\s*(\d{3})\s*(\d{2})\s*(\d{2})$/;

const state = reactive({
  username: "",
  email: "",
  phone: "",
});

const validations = {
  username: {
    required: helpers.withMessage("Поле не заполнено", required),
  },
  email: {
    required: helpers.withMessage("Поле не заполнено", required),
    email: helpers.withMessage("Некорректный email", email),
  },
  phone: {
    required: helpers.withMessage("Поле не заполнено", required),
    phoneFormat: helpers.withMessage("Некорректный номер телефона", helpers.regex(phoneRegex)),
  },
};

const v$ = useValidate(validations, state);

function handleSubmitPassword(status) {
  if (!status) {
    v$.value.$touch();
    return;
  }

  profileStore
    .send({
      name: state.username,
      email: state.email,
      phone: state.phone,
    })
    .then(() => {
      router.push("congratulations");
    })
    .catch(() => {
      router.push("error");
    });
}
</script>

<style scoped>
.activation-form {
  padding: 18px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.full-width {
  width: 100%;
}

.p-float-label {
  height: 100%;
}

.p-float-label:has(input:focus) label,
.p-float-label:has(input.p-filled) label {
  top: 0.8rem;
}
.p-inputtext,
.p-inputtext:enabled:focus {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  position: relative;
  bottom: -20px;
}

.input-field:has(.p-inputtext:enabled:focus) {
  border: 1px solid rgba(63, 203, 255, 1);
  box-shadow: 0px 0px 0px 4px rgba(63, 203, 255, 0.2);
}

.input-field {
  border: 1px solid rgba(211, 217, 223, 1);
  border-radius: 8px;
  height: 60px;
  margin-top: 10px;
}

.input-field.invalid {
  border-color: rgba(215, 47, 75, 1);
}

.error-message {
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 9px;
  color: rgba(215, 47, 75, 1);
}

.form-actions {
  margin-top: 27px;
}
</style>
