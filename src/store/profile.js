import { ref } from "vue";
import { defineStore } from "pinia";
import apiClient from "../services/api";

export const useProfileStore = defineStore("profile", () => {
  const loading = ref(false);

  async function read() {
    loading.value = true;
    await apiClient
      .get(`/api/test/get`)
      .then((response) => {
        if (response.status == 200) {
          console.log(response.data);
        }
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => (loading.value = false));
  }

  async function send(data) {
    loading.value = true;

    return await apiClient
      .post("/api/test/post", data)
      .catch((error) => {
        throw error;
      })
      .finally(() => (loading.value = false));
  }

  return {
    read,
    send,
  };
});
