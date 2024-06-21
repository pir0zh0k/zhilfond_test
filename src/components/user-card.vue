<script setup>
import { useStore } from "vuex";

const props = defineProps({ user: Object });
const store = useStore();

function setCurrentUser() {
  store.dispatch("setCurrentUser", props.user);
}

const isActive = () => {
  if (store.state.currentUser) {
    return store.state.currentUser.id === props.user.id;
  }
};
</script>

<template>
  <div
    class="user-card"
    :class="{ _active: isActive() }"
    @click="setCurrentUser"
  >
    <div class="user-card__image">
      <img src="/preview.png" :alt="user.username" />
    </div>
    <div class="user-card__info">
      <h2 class="user-card__username">{{ user.username }}</h2>
      <span class="user-card__email">{{ user.email }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-card {
  width: 100%;
  box-shadow: 0 0 10px 0 #0000001a;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 10fr;
  margin-bottom: 18px;
  cursor: pointer;
  overflow: hidden;

  &._active {
    .user-card__info {
      background: $gray-light;
    }
  }

  &__info {
    width: 100%;
    padding: 15px 34px 18px 15px;
  }

  &__username {
    font-size: 14px;
    font-weight: 600;
    line-height: 17.07px;
    color: $text-black;
  }

  &__email {
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
    color: $text-gray;
  }

  &__image {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-right: 1px solid $border-primary;

    img {
      width: 100%;
    }
  }
}
</style>
