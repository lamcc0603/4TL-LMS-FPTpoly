<template>
  <header class="header">
    <div class="header__logo">
      <router-link to="/">
        <img src="@/assets/images/4TL_Logo_png.png" alt="logo_fpt" />
      </router-link>
    </div>

    <NavView class="nav" />

    <div class="user__box" v-if="isLogin">
      <div class="user__image center" @click="isShow = !isShow">
        <img src="@/assets/images/user.png" alt="" />
        <p class="user__image--name">Chung chí lâm</p>
      </div>
      <div class="user__notification">
        <i class="fa-solid fa-bell"></i>
        <div class="notification__circle">1</div>
      </div>
      <ul class="user__setting" v-show="isShow">
        <UserSettingItem
          icon=" fa-solid fa-user"
          itemTitle="Trang cá nhân"
          itemLink="/"
        />
        <UserSettingItem
          icon=" fa-solid fa-message"
          itemTitle="Nhắn tin"
          itemLink="/chat"
        />
        <UserSettingItem
          @click="toggleLogin"
          icon="fa-solid fa-right-from-bracket"
          itemTitle="Thoát"
          itemLink="/home"
        />
      </ul>
    </div>
  </header>
</template>

<script>
import NavView from "@/components/Nav/NavView.vue";
import UserSettingItem from "@/components/Header/UserSettingItem.vue";
import { ref } from "@vue/runtime-core";

export default {
  components: { NavView, UserSettingItem },
  setup() {
    const isLogin = ref(true);
    const isShow = ref(false);

    const toggleLogin = () => {
      isLogin.value = !isLogin.value;
      isShow.value = false;
    };
    return { isLogin, isShow, toggleLogin };
  },
};
</script>

<style lang="scss">
.header {
  display: flex;

  background: var(--white);
  box-shadow: 0px 0px 8px var(--fds-black-alpha-05);
  padding: 0 50px;
  max-height: 100px;
  color: var(--black);
  margin-bottom: 20px;

  &__logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 200px;
    height: auto;
    flex: 1;
    & a {
      height: 80%;
      max-height: 100px;
      display: block;
    }
    & img {
      width: 150px;
      height: 100%;
      object-fit: contain;
    }
  }
}
.header .user {
  &__box {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    margin: auto 0;
    gap: 20px;
  }
  &__image {
    // position: relative;
    display: flex;
    flex-direction: row-reverse;
    gap: 10px;

    overflow: hidden;
    cursor: pointer;
    & img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    &--name {
      color: var(--black);
      font-size: 18px;
      text-align: center;
      text-transform: capitalize;
    }
  }
  &__notification {
    margin: auto 0;
    font-size: 2.5rem;
    color: var(--fds-gray-30);
    position: relative;
    cursor: pointer;
  }
  &__setting {
    position: absolute;
    top: 130%;
    right: 0;

    z-index: 5;
    box-shadow: 0px 3px 8px var(--fds-black-alpha-10);
    border-radius: 7px;

    flex: 1;
    flex-direction: column;
    width: 200px;
    font-size: 1.6rem;
    background: var(--white);

    &--item {
      display: block;
      word-break: break-all;
      cursor: pointer;
      &:last-child {
        border-top: 5px solid var(--bg-color);
      }
    }
    &--link {
      padding: 13px 20px;
      display: block;
    }
  }
}

.header .notification__circle {
  position: absolute;
  top: -30%;
  right: -40%;

  width: 20px;
  height: 20px;
  border-radius: 100rem;
  line-height: 20px;
  background: var(--fds-red-55);

  color: var(--white);
  font-family: "Segoe UI Bold";
  text-align: center;
  font-size: 1.4rem;
}
@media screen and (max-width: 1366px) {
  .header {
    padding: 0 20px;

    &__logo {
      margin: auto 0;
      max-width: 100px;
      height: 100%;
    }
  }
  .header .user {
    &__box {
      margin-left: auto;
    }
    &__setting {
      top: 8%;
    }
    &__image {
      &--name {
        display: none;
        overflow: hidden;
        visibility: hidden;
      }
    }
  }
}
@media screen and (max-width: 767.98px) {
  .header {
    padding: 0 10px;
    grid-template-columns: 10% 1fr 30%;
    height: 100px;
    margin-bottom: 20px;
    &__logo {
      max-width: 100%;
      order: 2;
      margin: 0 auto;
    }
  }
  .header .nav {
    order: 1;
  }
  .header .user {
    &__box {
      order: 3;
    }
    &__setting {
      top: 10%;
    }
  }
}
</style>
