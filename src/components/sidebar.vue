<script setup>
import Input from "./input.vue";
import ResultsList from "./results-list.vue";
import { ref, watch } from "vue";
import { useDebounce } from "@vueuse/core";
import { useStore } from "vuex";
import { getById, getByUsername } from "../api/index.js";

const value = ref("");
const error = ref("");
const debouncedValue = useDebounce(value, 500);
const loading = ref(false);

const store = useStore();

watch(debouncedValue, async (searchString) => {
  loading.value = true;

  if (searchString.length <= 0) {
    loading.value = false;
    await store.dispatch("setUsers", []);
  }

  const searchArray = searchString.replace(/\s+/g, "").replace(/,\s*$/, "");

  let users;

  if (/^\d+(,\d+)*$/.test(searchArray)) {
    console.log(searchArray.split(",").map(Number));
    users = await getById(searchArray.split(",").map(Number));
  } else if (/^[a-zA-Z]+(,\s*[a-zA-Z]+)*$/.test(searchArray)) {
    console.log(searchArray.split(",").map((name) => name));
    users = await getByUsername(searchArray.split(",").map((name) => name));
  }

  if (users) {
    if (!users.data || users.data.length <= 0) {
      loading.value = false;
      return (error.value = "Пользователь не найден");
    }

    if (users.status !== 200) {
      loading.value = false;
      return (error.value = "Произошла ошибка. Повторите попытку позже");
    }

    await store.dispatch("setUsers", users.data);
    loading.value = false;
  }
});

function clearError() {
  error.value = "";
}

function clearData() {
  store.dispatch("setCurrentUser", null);
  store.dispatch("setUsers", []);
}
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__inner">
      <h2 class="sidebar__title">Поиск сотрудников</h2>
      <div class="sidebar__search">
        <Input
          v-model="value"
          placeholder="Введите id или username"
          @clear-error="clearError"
          @clear-data="clearData"
        />
        <span v-if="error" class="sidebar__error">{{ error }}</span>
      </div>
      <div v-if="loading" class="loader"></div>
      <results-list v-else :users="store.state.users" />
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  width: 100%;
  height: 100%;
  padding: 23px 30px 23px 27px;
  border-right: 1px solid $border-primary;

  &__inner {
    height: 100%;
    position: relative;
  }

  &__error {
    margin-top: 5px;
    font-size: 14px;
    color: red;
  }

  &__title {
    @include Title;
    margin-bottom: 22px;
  }
  &__search {
    margin-bottom: 22px;
  }

  .loader {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      border: 4px solid $gray-light;
      border-bottom: 4px solid transparent;
      border-radius: 50%;
      animation: loading 1s infinite linear;
    }
  }
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
