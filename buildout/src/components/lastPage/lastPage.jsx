import styles from "./lastPage.module.css";
import logo from "../../assets/logo.png";
import phone from "../../assets/phone.png";
import mail from "../../assets/mail.png";
import X from "../../assets/X.png";
import YT from "../../assets/YT.png";
import FB from "../../assets/FB.png";
import insta from "../../assets/insta.png";
import pint from "../../assets/pint.png";
import whatsapp from "../../assets/whatsapp.png";
export default function LastPage() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.contentDiv}>
        <div className={styles.part1}>
          <img src={logo} alt="Logo" />
          <p>
            The best digital marketing agency in Pune with a proven track record
            of consistently delivering quality service.
          </p>
          <div>
            <h1>Address</h1>
            <p>
              Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14,
              Maharastra, India.
            </p>
          </div>
          <div>
            <h1>Contacts</h1>
            <div className={styles.contactDiv}>
              <div>
                <img src={mail} alt="" />
                <p>hello@osumare.in</p>
              </div>
              <div>
                <img src={phone} alt="" />
                <p>+91 8459 8762 26</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.part2}>
          <h1>Menu</h1>
          <div className={styles.menuItem}>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Sevices</h3>
            <h3>Work</h3>
            <h3>Blog</h3>
            <h3>Career</h3>
          </div>
        </div>

        <div className={styles.part3}>
          <h1>Social</h1>
          <div className={styles.mediaIcons}>
            <div className={styles.iconDiv}>
              <img src={X} alt="" />
            </div>
            <div className={styles.iconDiv}>
              <img src={FB} alt="" />
            </div>
            <div className={styles.iconDiv}>
              <img src={YT} alt="" />
            </div>
            <div className={styles.iconDiv}>
              <img src={pint} alt="" />
            </div>
            <div className={styles.iconDiv}>
              <img src={whatsapp} alt="" />
            </div>
            <div className={styles.iconDiv}>
              <img src={insta} alt="" />
            </div>
          </div>
        </div>
      </div>
      <h1 className={styles.footer}>© 2023 Osumare. All rights reserved.</h1>
    </div>
  );
}
