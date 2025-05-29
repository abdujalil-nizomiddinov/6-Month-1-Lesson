import Navbar from "./Navbar.jsx";
import style from "./css/Head.module.css";
import HeadImages from "../assets/head.png";

const Head = () => {
  return (
    <div>
      <Navbar />
      <header className={style.header}>
        <div className={style.hero}>
          <img className={style.img} src={HeadImages} alt="foto" />
        </div>
        <div className={style.title}>
          <h1>
            Kembang <br /> Flower Mantap
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In sed nam
            rem quos pariatur architecto corrupti enim, earum cum temporibus
            excepturi quia perspiciatis est similique alias consequatur a quas
            impedit!
          </p>
          <div className={style.next}>
            <div className={style.left}>
              <p>
                <i className="fa-solid fa-arrow-left"></i>
                <span>Previous</span>
              </p>
              <h4>Rahasia Plant</h4>
            </div>
            <div className={style.right}>
              <p>
                <span>Next</span>
                <i className="fa-solid fa-arrow-right"></i>
              </p>
              <h4>Kaktus Plant</h4>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Head;
