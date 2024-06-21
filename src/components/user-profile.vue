<script setup>
import { useStore } from "vuex";

const { state } = useStore();
</script>

<template>
  <div class="user-profile">
    <div class="user-profile__inner">
      <div v-if="state.currentUser" class="user-profile__information">
        <div class="user-profile__image">
          <img src="/preview.png" :alt="state.currentUser.username" />
        </div>
        <div class="user-profile__info">
          <h2 class="user-profile__name">{{ state.currentUser.name }}</h2>
          <div class="user-profile__email">
            <span>email:</span>
            {{ state.currentUser.email }}
          </div>
          <div class="user-profile__phone">
            <span>phone:</span>
            {{ state.currentUser.phone }}
          </div>
          <div class="user-profile__about">
            <h2 class="about__title">О себе:</h2>
            <p class="about__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <span v-else class="user-profile__empty">
        Выберите сотрудника, чтобы посмотреть его профиль
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-profile {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 21px;

  &__inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__empty {
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
    color: $text-gray;
  }

  &__information {
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 100%;
    height: 100%;
  }

  &__image {
    max-width: 424px;
    max-height: 286px;
    width: 424px;
    height: 100%;
    border: 1px solid $gray-light;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__info {
    margin-left: 61px;
  }

  &__name {
    @include Title;
    color: #000;
    margin-bottom: 10px;
  }

  &__email {
    font-size: 14px;
    line-height: 19px;
    font-weight: 400;
    margin-bottom: 10px;
    color: $text-gray;

    span {
      font-weight: 600;
      color: $text-black;
    }
  }

  &__phone {
    font-size: 14px;
    line-height: 19px;
    font-weight: 400;
    margin-bottom: 20px;
    color: $text-gray;

    span {
      font-weight: 600;
      color: $text-black;
    }
  }

  &__about {
    .about {
      &__title {
        @include Title;
        color: $text-black;
        margin-bottom: 25px;
      }

      &__text {
        font-size: 14px;
        font-weight: 400;
        line-height: 17.07px;
        color: $text-gray;
      }
    }
  }
}
</style>
