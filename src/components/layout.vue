<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <h2 class="header__logo">Жилфонд</h2>
        <span class="header__signature"> Пользователь </span>
      </div>
    </div>
  </header>
  <main class="main">
    <div class="container">
      <div class="main__inner">
        <slot />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.header {
  padding: 50px 0 26px;

  &__inner {
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    display: inline-block;
    font-size: 32px;
    line-height: 39px;
    font-weight: 700;
    color: $primary-red;
  }

  &__signature {
    font-size: 16px;
    line-height: 19.5px;
    font-weight: 400;
    color: $text-black;
  }
}

.main {
  &__inner {
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    height: 589px;
    background: $white;
    box-shadow: 0 0 10px 0 #0000001a;
    border-radius: 10px;
  }
}
</style>
