import styles from "./deriveingProperty.module.css";
import bro from "../../assets/bro.png";

export default function DeriveingProperty() {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.mainHeading}>
        {" "}
        Driving Property Inquiries to Conversions
      </h1>
      <p className={styles.subHeading}>
        {" "}
        Streamlined Strategies for Real Estate Success
      </p>
      <div className={styles.subDiv}>
        <img src={bro} alt="" className={styles.image} />
        <div className={styles.contentDiv}>
          <h2 className={styles.subHead}>
            Optimized Path to Property Purchase
          </h2>
          <p className={styles.para}>
            In the dynamic realm of real estate, the journey from a property
            inquiry to a successful conversion demands a well-crafted approach.
            At Osumare, we specialize in guiding potential buyers through this
            journey seamlessly, maximizing inquiries-turned-conversions with
            expert strategies.
          </p>
          <button className={styles.btn}>Get Started</button>
        </div>
      </div>
    </div>
  );
}
