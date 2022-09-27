<template>
  <footer class="footer">
    <div class="footer__logo">
      <router-link to="/">
        <img src="@/assets/images/logo_fpt.png" alt="logo_fpt" />
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
  max-height: 30rem;
  height: 30rem;
  background: var(--darkest-green);
  display: grid;
  grid-template-columns: 30rem repeat(3, 1fr);
  gap: 3rem;
  padding: 5rem 5rem 3rem 5rem;
  &__logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 20rem;
    height: auto;
  }
  &__about {
    background: #000;
  }
  &__direct {
    background: red;
  }
  &__contact {
    color: var(--white);
    & h3 {
      font-size: 2rem;
      font-family: "roboto500";
      line-height: 3rem;
    }
  }
}
.menu {
  &__item {
    font-size: 1.6rem;
    line-height: 1.5;
  }
}

.copyright {
  background: var(--darkest-green);
  border-top: 0.2rem solid var(--white);
  padding: 1rem;
  text-align: center;
  color: var(--white);
  font-size: 1.4rem;
  font-family: "roboto500";
}
@media screen and (max-width: 1280px) {
  .footer {
    max-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    &__logo {
      margin: 0 auto;
    }
  }
}
@media screen and (max-width: 767.98px) {
}
</style>
