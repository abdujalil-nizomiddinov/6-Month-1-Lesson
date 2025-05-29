import style from "./css/Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={style.nav}>
      <a className={style.logo} href="#">
        <img src="../../public/Logo.svg" alt="logo" />
      </a>
      <div className={style.nav_item}>
        <div className={style.icon}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <button className={style.btn1}>Sign Up</button>
        <button className={style.btn2}>Sign In</button>
      </div>
      <div className={style.nav_bars}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
