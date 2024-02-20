import { shallowRef } from "vue";
import ActionButton from "../../components/ActionButton.vue";

const button = "Подключить";

export const data = {
  title: "Полная защита от любых повреждений за 9 рублей в день",
  list: ["– Разбился экран", "– Залили водой", "– Треснул корпус", "– Сломался от замыкания"],
  buttonText: button,
  style: "light",
  route: "/activation",
  agreementText: `Нажимая кнопку «${button}», вы соглашаетесь с условиями оферты`,
  template: shallowRef(ActionButton),
};
