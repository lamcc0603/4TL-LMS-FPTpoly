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
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  font: 16px sans-serif;
  .loginForm {
    width: 30%;
    padding-bottom: 1vw;
    background: #52796f;
    border-radius: 15px;
    .login {
      display: flex;
      flex-direction: column;
      // align-items: center;
      h1 {
        font-size: 2em;
        color: white;
        text-align: center;
        margin: 1vw;
      }
      label {
        margin-left: 2.3vw;
        font-size: 1em;
        color: white;
      }
      input {
        width: 80%;
        background: #cad2c5;
        border: none;
        padding: 5px;
        margin: 10px auto;
        border-radius: 3px;
      }
      .loginBtn {
        width: 30%;
        height: 2vw;
        margin: 20px auto;
        background: #cad2c5;
        border: none;
        font-size: 0.8em;
        cursor: pointer;
      }
      .loginBtn:hover {
        background: #84a98c;
        color: white;
      }
    }
  }
}
@media screen and (max-width: 1280px) {
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
