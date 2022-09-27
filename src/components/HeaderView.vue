<template>
  <header class="header">
    <div class="header__logo">
      <router-link to="">
        <img src="@/assets/images/logo_fpt.png" alt="logo_fpt" />
      </router-link>
    </div>

    <nav-view class="nav" />

    <div class="user__box" v-if="isLogin">
      <div class="user__image" @click="isShow = !isShow">
        <img src="@/assets/images/user1.jpg" alt="" />
        <p class="user__image--name">Chung chí lâm</p>
      </div>
      <div class="user__notification">
        <i class="fa-solid fa-bell"></i>
        <div class="notification__circle">1</div>
      </div>
      <ul class="user__setting" v-show="isShow">
        <li class="user__setting--item">
          <router-link to="" class="user__setting--link">
            <i class="fa-solid fa-user"></i> Trang cá nhân</router-link
          >
        </li>
        <li class="user__setting--item">
          <router-link to="" class="user__setting--link">
            <i class="fa-solid fa-message"></i> Nhắn tin</router-link
          >
        </li>
        <li class="user__setting--item">
          <p @click="toggleLogin" to="" class="user__setting--link">
            <i class="fa-solid fa-right-from-bracket"></i> Thoát
          </p>
        </li>
      </ul>
    </div>

    <div class="btn__login" v-else>
      <router-link @click="toggleLogin" class="btn__login--text" to="login"
        >Đăng nhập</router-link
      >
    </div>
  </header>
</template>

<script>
import NavView from "@/components/NavView.vue";

import { ref } from "@vue/runtime-core";

export default {
  components: { NavView },
  setup() {
    const isLogin = ref(false);
    const isShow = ref(false);

    const toggleLogin = () => {
      isLogin.value = !isLogin.value;
      isShow.value = false;
    };
    return { isLogin, isShow, toggleLogin };
  },
};
</script>

<style scoped lang="scss">
.header {
  display: grid;
  grid-template-columns: 15% 1fr 30%;
  background: var(--darkest-green);
  padding: 0 5rem;
  max-height: 10rem;
  margin-bottom: 1rem;
  &__logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 20rem;
    height: auto;

    & a {
      height: 80%;
      max-height: 10rem;
      display: block;
    }
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
.user {
  &__box {
    display: flex;
    flex-direction: row-reverse;
    margin: auto 0;
    gap: 2rem;
  }
  &__image {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    gap: 1rem;

    overflow: hidden;
    cursor: pointer;
    & img {
      width: 6rem;
      height: 6rem;
      border-radius: 100rem;
    }
    &--name {
      color: var(--white);
      font-size: 2rem;
      text-align: center;
      text-transform: capitalize;
      line-height: 6rem;
    }
  }
  &__notification {
    margin: auto 0;
    font-size: 2.5rem;
    color: var(--light-gray);
    position: relative;
    cursor: pointer;
  }
  &__setting {
    position: absolute;
    top: 9%;

    display: flex;
    flex-direction: column;

    width: 20rem;

    font-size: 1.6rem;

    background: var(--white);
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    &--item {
      display: block;
      word-break: break-all;
      cursor: pointer;
      &:last-child {
        border-top: 2px solid var(--black);
      }
    }
    &--link {
      padding: 1.3rem 2rem;
      display: block;
    }
  }
}

.notification__circle {
  position: absolute;
  top: -30%;
  right: -40%;

  width: 2rem;
  height: 2rem;
  border-radius: 100rem;
  line-height: 2rem;
  background: var(--notification);

  color: var(--white);
  font-family: "roboto500";
  text-align: center;
  font-size: 1.4rem;
}
@media screen and (max-width: 1280px) {
  .header {
    padding: 0 2rem;
    grid-template-columns: 15% 1fr 15%;

    &__logo {
      margin: auto 0;
      max-width: 10rem;
      height: 100%;
    }
  }
  .btn__login {
    margin-left: auto;
  }
  .user {
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
    padding: 0 1rem;
    grid-template-columns: 10% 1fr 30%;
    height: 10rem;
    &__logo {
      max-width: 100%;
      order: 2;
      margin: 0 auto;
    }
  }
  .btn__login {
    margin-left: 0;
    order: 3;
    // display: none;
    // opacity: 0;
    // visibility: hidden;
  }
  .nav {
    order: 1;
  }
  .user {
    &__box {
      order: 3;
    }
    &__setting {
      top: 10%;
    }
  }
}
</style>
