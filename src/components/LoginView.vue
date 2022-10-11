<template>
  <div class="LoginContainer">
    <div class="loginForm">
      <form class="login">
        <h1>Đăng nhập</h1>
        <div class="line"></div>
        <label for="">Tên đăng nhập</label>
        <input type="text" name="" id="" />
        <label for="">Mật khẩu</label>
        <input type="password" name="" id="" />
        <input type="button" value="Đăng nhập" class="loginBtn" />
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.LoginContainer {
  padding: 10vw;
  width: 100%;
  display: flex;
  justify-content: center;
  font: 16px "Segoe UI Bold";
  .loginForm {
    width: 90%;
    padding-bottom: 1vw;
    background: var(--white);
    border-radius: 16px;
    box-shadow: 0px 0px 8px var(--fds-black-alpha-10);
    .login {
      display: flex;
      flex-direction: column;
      // align-items: center;
      h1 {
        font-size: 2em;
        color: var(--black);
        text-align: center;
        margin: 1vw;
      }
      label {
        margin-left: 2.3vw;
        font-size: 1em;
        color: var(--black);
      }
      input {
        width: 80%;
        background: var(--fds-gray-05);
        border: none;
        padding: 5px;
        margin: 10px auto;
        border-radius: 37px;
      }
      .loginBtn {
        width: 30%;
        height: 2vw;
        margin: 20px auto;
        background: var(--white);
        border: none;
        font-size: 0.8em;
        cursor: pointer;
      }
      .loginBtn:hover {
        background: #84a98c;
        color: var(--black);
      }
    }
  }
}
@media screen and (max-width: 1366px) {
  .LoginContainer {
    font-size: 10px;
  }
}
@media screen and (max-width: 767.98px) {
  .LoginContainer {
    font-size: 8px;
  }
}
</style>
