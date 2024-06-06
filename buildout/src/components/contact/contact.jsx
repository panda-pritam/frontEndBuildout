import styles from "./contact.module.css";
import Ellipse_blue from "../../assets/Ellipse_blue.png";
import Ellipse_pinky from "../../assets/Ellipse_pinky.png";

export default function ContactForm() {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.mainHeading}>
        Connect with Our Digital Marketing Experts
      </h1>
      <h6 className={styles.subHeading}>
        {" "}
        Reach Out for Tailored Strategies and Results-Driven Solutions. Let's
        Elevate Your Online Presence Together
      </h6>
      <form className={styles.formDiv}>
        <div className={styles.InputDiv}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your Name" />
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" placeholder="Enter your Number" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your Email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Enter your Message"
              rows="11"
              cols="50"
            ></textarea>
          </div>
        </div>
        <div className={styles.btnDiv}>
          <button className={styles.btn}>Get Started</button>
        </div>
      </form>

      <img src={Ellipse_pinky} className={styles.pinky} alt="" />
      <img src={Ellipse_blue} className={styles.blue} alt="" />
    </div>
  );
}
