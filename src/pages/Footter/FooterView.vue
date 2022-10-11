<template>
  <footer class="footer">
    <div class="footer__logo">
      <router-link to="/">
        <img src="@/assets/images/4TL_Logo_png.png" alt="logo_fpt" />
      </router-link>
    </div>
    <!-- <div class="footer__about"></div> -->
    <div class="footer__contact">
      <h3>Contact</h3>
      <ul class="menu">
        <li class="menu__item">
          <p class="menu__link">
            <i class="fa-solid fa-house"></i> 778/B1 Nguyễn Kiệm, P.4, Q. Phú
            Nhuận, TP. Hồ Chí Minh.
          </p>
        </li>
        <li class="menu__item">
          <p class="menu__link">
            <i class="fa-solid fa-phone"></i> 02873088800
          </p>
        </li>
        <li class="menu__item">
          <p class="menu__link">
            <i class="fa-solid fa-envelope"></i> dvsvpoly.hcm@poly.edu.vn
            <br />
            <i class="fa-solid fa-envelope"></i>
            Đào tạo:daotaofpoly.hcm@fe.edu.vn
            <br />
            <i class="fa-solid fa-envelope"></i> khaothi.fplhcm@fe.edu.vn
            <br />
            <i class="fa-solid fa-envelope"></i> taichinhfplhcm@fe.edu.vn
            <br />
            <i class="fa-solid fa-envelope"></i> qhdn.fplhcm@fe.edu.vn
          </p>
        </li>
      </ul>
    </div>
    <div class="footer__contact">
      <h3>Contact</h3>
      <ul class="menu">
        <li class="menu__item">
          <p class="menu__link">
            <i class="fa-solid fa-house"></i> 778/B1 Nguyễn Kiệm, P.4, Q. Phú
            Nhuận, TP. Hồ Chí Minh.
          </p>
        </li>
        <li class="menu__item">
          <p class="menu__link">
            <i class="fa-solid fa-phone"></i> 02873088800
          </p>
        </li>
        <li class="menu__item">
          <p class="menu__link">
            <i class="fa-solid fa-envelope"></i> dvsvpoly.hcm@poly.edu.vn
            <br />
            <i class="fa-solid fa-envelope"></i>
            Đào tạo:daotaofpoly.hcm@fe.edu.vn
            <br />
            <i class="fa-solid fa-envelope"></i> khaothi.fplhcm@fe.edu.vn
            <br />
            <i class="fa-solid fa-envelope"></i> taichinhfplhcm@fe.edu.vn
            <br />
            <i class="fa-solid fa-envelope"></i> qhdn.fplhcm@fe.edu.vn
          </p>
        </li>
      </ul>
    </div>
    <div class="footer__contact">
      <h3>Contact</h3>
      <ul class="menu">
        <li class="menu__item">
          <p class="menu__link">
            <i class="fa-solid fa-house"></i> 778/B1 Nguyễn Kiệm, P.4, Q. Phú
            Nhuận, TP. Hồ Chí Minh.
          </p>
        </li>
        <li class="menu__item">
          <p class="menu__link">
            <i class="fa-solid fa-phone"></i> 02873088800
          </p>
        </li>
        <li class="menu__item">
          <p class="menu__link">
            <i class="fa-solid fa-envelope"></i> dvsvpoly.hcm@poly.edu.vn
            <br />
            <i class="fa-solid fa-envelope"></i>
            Đào tạo:daotaofpoly.hcm@fe.edu.vn
            <br />
            <i class="fa-solid fa-envelope"></i> khaothi.fplhcm@fe.edu.vn
            <br />
            <i class="fa-solid fa-envelope"></i> taichinhfplhcm@fe.edu.vn
            <br />
            <i class="fa-solid fa-envelope"></i> qhdn.fplhcm@fe.edu.vn
          </p>
        </li>
      </ul>
    </div>
    <!-- <div class="footer__direct"></div> -->
  </footer>
  <div class="copyright">Hệ thống quản lý học tập do nhóm 4TL thực hiện</div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.footer {
  max-height: 300px;
  height: 300px;
  background: var(--white);
  color: var(--black);
  display: grid;
  grid-template-columns: 300px repeat(3, 1fr);
  gap: 3rem;
  padding: 50px 50px 3rem 50px;
  box-shadow: 0px -3px 8px var(--fds-black-alpha-05);
  margin-top: 20px;
  &__logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 200px;
    height: auto;
  }
  &__about {
    background: #000;
  }
  &__direct {
    background: red;
  }
  &__contact {
    & h3 {
      font-size: 2rem;
      font-family: "roboto500";
      line-height: 30px;
      margin-bottom: 20px;
    }
  }
}
.menu {
  &__item {
    font-size: 1.6rem;
    line-height: 1.5;
  }
  &__link {
    & i {
      color: var(--fds-gray-30);
      margin-right: 10px;
    }
  }
}

.copyright {
  background: var(--white);
  border-top: 5px solid var(--bg-color);
  padding: 1rem;
  text-align: center;
  font-size: 1.4rem;
  font-family: "roboto500";
}
@media screen and (max-width: 1366px) {
  .footer {
    max-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    &__logo {
      margin: 0 auto;
    }
  }
}
@media screen and (max-width: 767.98px) {
}
</style>
