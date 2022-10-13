<template>
  <div class="container">
    <div class="auth">
      <div class="authDescription">
        <img src="https://i.imgur.com/wSpPzBw.png" alt="" />
        <p class="description">HỆ THỐNG QUẢN TRỊ HỌC TẬP 4TL LMS</p>
      </div>
      <form class="authForm">
        <span class="authForm__title">
          <h2>ĐĂNG NHẬP</h2>
        </span>
        <div class="authForm__group">
          <input
            class="authForm__group--control"
            name="username"
            placeholder="Tên đăng nhập"
          />
          <span class="authForm__group--icon">
            <i class="fa fa-envelope"></i>
          </span>
        </div>
        <div class="authForm__group">
          <input
            required
            class="authForm__group--control"
            type="password"
            name="pass"
            placeholder="Mật khẩu"
          />
          <span class="authForm__group--icon">
            <i class="fa fa-lock"></i>
          </span>
        </div>
        <div class="authForm__group">
          <button class="authForm__group--btn">Đăng nhập</button>
          <a href="#" class="authForm__group--btn danger">
            <i class="fab fa-google"></i> Đăng nhập bằng Google
          </a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.authDescription {
  grid-column: 1/3;
  margin: auto 0;
  img {
    user-select: none;
    width: 90%;
    // height: 300px;
    object-fit: contain;
  }
  .description {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin-top: 2rem;
  }
}
.authForm {
  grid-column: 3/4;
  margin: auto 1rem;
  box-sizing: border-box;

  &__title {
    color: var(--fds-blue-60);
    h2 {
      font-size: 40px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 3rem;
    }
  }
}
.auth {
  background: transparent;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100vh;
  position: relative;
  &::before {
    content: "";
    width: 200px;
    height: 200px;
    background: var(--fds-blue-40);
    position: absolute;
    border-radius: 50%;
    top: 15%;
    left: 0%;
    filter: blur(20rem);
  }
}
hr {
  margin: 2rem;
}
.authForm__group {
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 10px;
  &--control {
    font-size: 17px;
    background: var(--white);
    width: 100%;
    height: 50px;
    border-radius: 7px;
    padding: 0 30px 0 68px;
  }
  &--icon {
    font-size: 15px;
    display: flex;
    align-items: center;
    position: absolute;
    border-radius: 25px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-left: 35px;
    pointer-events: none;
    color: #666;
  }
  &--btn {
    color: #ffffff;
    font-size: 15px;
    text-transform: uppercase;
    width: 100%;
    margin-top: 1rem;
    border-radius: 5px;
    padding: 1.5rem 0;
    background: var(--fds-blue-60);
    transition: all 0.4s;
    display: block;
    text-align: center;
    &:hover {
      background: var(--fds-blue-70);
    }
    i {
      margin-right: 1rem;
    }
    &.danger {
      background-color: #c61717;
    }
  }
}

@media (max-width: 992px) {
  .auth {
    padding: 177px 15px 177px 15px;
    width: 95%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
