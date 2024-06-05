import styles from "./aboutUS.module.css";
import cuate from "../../assets/cuate.png";

export default function AboutUs() {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.mainHead}>Real Estate-Focused Digital Mastery</h1>
      <div className={styles.subDiv}>
        <img src={cuate} alt="" className={styles.image} />
        <div className={styles.contentDiv}>
          <h2 className={styles.subHead}>
            Unlock the Potential of Digital Real Estate Excellence
          </h2>
          <p className={styles.para}>
            At Osumare, we understand that the real estate landscape demands a
            digital presence that aligns with the intricacies of property
            marketing. Our range of specialized services is meticulously
            designed to catapult your brand's success in the ever-evolving
            digital property market.
          </p>
          <button className={styles.btn}>Get Started</button>
        </div>
      </div>
    </div>
  );
}
