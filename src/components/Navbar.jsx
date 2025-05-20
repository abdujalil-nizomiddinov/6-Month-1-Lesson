import style from "./css/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <img src="/Logo.svg" alt="logo" className={style.logo} />

      <ul className={style.menu}>
        <li>
          <i className="fa-solid fa-magnifying-glass"></i>
        </li>
        <li>
          <i className="fa-solid fa-cart-shopping"></i>
        </li>
        <li>
          <span className={style.link}>Sign Up</span>
        </li>
        <li>
          <button className={style.btn}>Sign In</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
