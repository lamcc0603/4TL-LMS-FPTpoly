<template>
  <div class="wrap-login100">
    <div
      class="login100-pic js-tilt"
      data-tilt=""
      style="
        transform: perspective(300px) rotateX(0deg) rotateY(0deg);
        will-change: transform;
      "
    >
      <img src="../assets/images/img-01.webp" alt="IMG" />
    </div>
    <form class="login100-form validate-form">
      <span class="login100-form-title"> ĐĂNG NHẬP </span>
      <div
        class="wrap-input100 validate-input"
        data-validate="Valid email is required: ex@abc.xyz"
      >
        <input
          class="input100"
          type="text"
          name="username"
          placeholder="Tên đăng nhập"
        />
        <span class="focus-input100"></span>
        <span class="symbol-input100">
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </span>
      </div>
      <div
        class="wrap-input100 validate-input"
        data-validate="Password is required"
      >
        <input
          class="input100"
          type="password"
          name="pass"
          placeholder="Mật khẩu"
        />
        <span class="focus-input100"></span>
        <span class="symbol-input100">
          <i class="fa fa-lock" aria-hidden="true"></i>
        </span>
      </div>
      <div class="container-login100-form-btn">
        <button class="login100-form-btn">Đăng nhập</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
html {
  height: 100%;
  font-family: Poppins-Regular, sans-serif;
}
a {
  font-family: Poppins-Regular;
  font-size: 14px;
  line-height: 1.7;
  color: #666;
  margin: 0;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
}
a:focus {
  outline: none !important;
}
a:hover {
  text-decoration: none;
  color: #57b846;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
p {
  font-size: 14px;
  line-height: 1.7;
  color: #666;
  margin: 0;
}
ul,
li {
  margin: 0;
  list-style-type: none;
}
input {
  outline: none;
  border: none;
}
textarea {
  outline: none;
  border: none;
}
textarea:focus,
input:focus {
  border-color: transparent !important;
}
input:focus::-webkit-input-placeholder {
  color: transparent;
}
input:focus:-moz-placeholder {
  color: transparent;
}
input:focus::-moz-placeholder {
  color: transparent;
}
input:focus:-ms-input-placeholder {
  color: transparent;
}
textarea:focus::-webkit-input-placeholder {
  color: transparent;
}
textarea:focus:-moz-placeholder {
  color: transparent;
}
textarea:focus::-moz-placeholder {
  color: transparent;
}
textarea:focus:-ms-input-placeholder {
  color: transparent;
}
input::-webkit-input-placeholder {
  color: #999;
}
input:-moz-placeholder {
  color: #999;
}
input::-moz-placeholder {
  color: #999;
}
input:-ms-input-placeholder {
  color: #999;
}
textarea::-webkit-input-placeholder {
  color: #999;
}
textarea:-moz-placeholder {
  color: #999;
}
textarea::-moz-placeholder {
  color: #999;
}
textarea:-ms-input-placeholder {
  color: #999;
}
button {
  outline: none !important;
  border: none;
  background: 0 0;
}
button:hover {
  cursor: pointer;
}
iframe {
  border: none !important;
}
.txt1 {
  font-size: 13px;
  line-height: 1.5;
  color: #999;
}
.txt2 {
  font-size: 13px;
  line-height: 1.5;
  color: #666;
}
.limiter {
  width: 100%;
  margin: 0 auto;
}
.container-login100 {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #9053c7;
  background: -webkit-linear-gradient(-135deg, #c850c0, #4158d0);
  background: -o-linear-gradient(-135deg, #c850c0, #4158d0);
  background: -moz-linear-gradient(-135deg, #c850c0, #4158d0);
  background: linear-gradient(-135deg, #c850c0, #4158d0);
}
.wrap-login100 {
  width: 960px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  margin: 100px auto;
  justify-content: space-between;
  padding: 177px 130px 177px 95px;
  box-shadow: 3px 3px 40px 3px;
}
.login100-pic {
  width: 316px;
}
.login100-pic img {
  max-width: 100%;
}
.login100-form {
  width: 290px;
}
.login100-form-title {
  font-size: 24px;
  color: #333;
  line-height: 1.2;
  text-align: center;
  width: 100%;
  display: block;
  padding-bottom: 54px;
}
.wrap-input100 {
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 10px;
}
.input100 {
  font-size: 15px;
  line-height: 1.5;
  color: #666;
  display: block;
  width: 100%;
  background: #e6e6e6;
  height: 50px;
  border-radius: 25px;
  padding: 0 30px 0 68px;
}
.focus-input100 {
  display: block;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  box-shadow: 0 0;
  color: rgba(87, 184, 70, 0.8);
}

.input100:focus + .focus-input100 {
  -webkit-animation: anim-shadow 0.5s ease-in-out forwards;
  animation: anim-shadow 0.5s ease-in-out forwards;
}

@-webkit-keyframes anim-shadow {
  to {
    box-shadow: 0 0 70px 25px;
    opacity: 0;
  }
}
@keyframes anim-shadow {
  to {
    box-shadow: 0 0 70px 25px;
    opacity: 0;
  }
}
.symbol-input100 {
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
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}
.input100:focus + .focus-input100 + .symbol-input100 {
  color: #57b846;
  padding-left: 28px;
}
.container-login100-form-btn {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
}
.login100-form-btn {
  font-size: 15px;
  line-height: 1.5;
  color: #fff;
  text-transform: uppercase;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background: #57b846;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}
.login100-form-btn:hover {
  background: #333;
}
@media (max-width: 992px) {
  .wrap-login100 {
    padding: 177px 90px 33px 85px;
  }
  .login100-pic {
    width: 35%;
  }
  .login100-form {
    width: 50%;
  }
}
@media (max-width: 768px) {
  .wrap-login100 {
    padding: 100px 80px 33px;
    width: 90%;
  }
  .login100-pic {
    display: none;
  }
  .login100-form {
    width: 100%;
  }
}
@media (max-width: 576px) {
  .wrap-login100 {
    padding: 100px 15px 33px;
  }
}
@media (max-width: 992px) {
  .alert-validate::before {
    visibility: visible;
    opacity: 1;
  }
}
</style>
