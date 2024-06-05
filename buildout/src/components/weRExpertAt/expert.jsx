import styles from "./expert.module.css";
import rafiki from "../../assets/rafiki.png";
import img1 from "../../assets/bard-fill.png";
import img2 from "../../assets/flashlight-fill.png";
import img3 from "../../assets/shield-check-fill.png";
import img4 from "../../assets/phone-find-fill.png";

export default function Expert() {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.mainHeading}>
        Navigating Real Estate's Digital Landscape
      </h1>
      <p className={styles.subHeading}>
        {" "}
        Insights for Real Estate Marketing Advantage
      </p>
      <div className={styles.contentDiv}>
        <div className={styles.menuItemDiv}>
          <div className={styles.menuItem}>
            <div className={styles.imgDiv}>
              <img src={img1} alt="" />
            </div>
            <div className={styles.textDiv}>
              <h1>Market Trends Analysis</h1>
              <p>Market Trends Analysis</p>
            </div>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.imgDiv}>
              <img src={img2} alt="" />
            </div>
            <div className={styles.textDiv}>
              <h1>Targeted Buyer Persona</h1>
              <p>Understand and connect with your ideal property buyers.</p>
            </div>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.imgDiv}>
              <img src={img3} alt="" />
            </div>
            <div className={styles.textDiv}>
              <h1>Competitor Insights</h1>
              <p>Stand out in the property market with informed strategies.</p>
            </div>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.imgDiv}>
              <img src={img4} alt="" />
            </div>
            <div className={styles.textDiv}>
              <h1>Visual Content Appeal</h1>
              <p>Visual Content Appeal</p>
            </div>
          </div>
        </div>
        <div className={styles.teacherImg}>
          <img src={rafiki} alt="" />
        </div>
      </div>
    </div>
  );
}
