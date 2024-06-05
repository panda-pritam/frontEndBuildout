import NavBar from "../navbar/navbar";
import styles from "./homePage.module.css";
import headerImg from "../../assets/headerImg.png";
import ellipse from "../../assets/Ellipse_190.svg";
import Ellipse from "./ellices";
export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      {/* <NavBar /> */}
      <Ellipse />
      <div className={styles.container}>
        <div className={styles.TextDiv}>
          <div className={styles.mainText}>
            Elevate <span className={styles.BlueText}>Real Estate Success</span>
            with Osumare's Digital Expertise
          </div>
          <p className={styles.subText}>
            Tailored Solutions for Thriving in the Digital Real Estate Landscape
          </p>
        </div>
        <div className={styles.MobileTextDiv}>
          <div className={styles.mainText}>
            Elevate <span className={styles.BlueText}>Real Estate Success</span>
            <br />
            with Osumare's Digital Expertise
          </div>
          <p className={styles.subText}>
            Tailored Solutions for Thriving in <br />
            the Digital Real Estate Landscape
          </p>
        </div>
        <button className={styles.getStartedBtn}>Get started</button>
      </div>
      <img src={headerImg} alt="" className={styles.headerImg} />
    </div>
  );
}
