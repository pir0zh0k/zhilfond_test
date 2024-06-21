<script setup>
import UserCard from "./user-card.vue";

defineProps({
  users: {
    type: Array,
  },
});
</script>

<template>
  <div class="results">
    <div class="results__inner">
      <h2 class="results__title">Результат</h2>
      <div v-if="users.length > 0" class="results__list">
        <user-card v-for="user in users" :key="user.id" :user="user" />
      </div>
      <span v-else class="results__empty">Начните поиск</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.results {
  height: 400px;

  &__inner {
    height: 100%;
  }

  &__title {
    @include Title;
    margin-bottom: 10px;
  }

  &__list {
    height: 100%;
    overflow-y: scroll;
    padding: 10px 10px;

    &::-webkit-scrollbar {
      width: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $gray-light;
    }
  }

  &__empty {
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
    color: $text-gray;
  }
}
</style>
