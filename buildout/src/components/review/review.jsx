import photo from "../../assets/photo.png";
import back from "../../assets/back.png";
import forward from "../../assets/forward.png";
import Symbal from "../../assets/Symbol.png";
import styles from "./review.module.css";
export default function Review() {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.mainHeading}>What Our Pharma Partners Say</h1>
      <p className={styles.subHeading}>
        {" "}
        Driving Transformations, One Brand at a Time
      </p>
      <div className={styles.formDiv}>
        <img src={photo} alt="" />
        <div className={styles.textDiv}>
          <div className={styles.textDivHead}>
            <div>
              <div className={styles.profileImgDiv}>
                <img src={photo} alt="" />
              </div>
              <h1> Tabish khan</h1>
            </div>
            <img src={Symbal} alt="" />
          </div>
          <p>
            Osumare's expertise in pharma marketing is unparalleled. Their
            strategies helped us navigate complex regulations while driving
            remarkable growth.
          </p>
        </div>
      </div>
      <div>
        <div>
          <img src={back} alt="" />
        </div>
        <div>
          <img src={forward} alt="" />
        </div>
      </div>
    </div>
  );
}
