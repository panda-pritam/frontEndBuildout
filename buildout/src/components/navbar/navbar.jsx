import logo from "../../assets/logo.png";
import styles from "./navbar.module.css";
export default function NavBar() {
  return (
    <nav className={styles.navDiv}>
      <img
        src={logo}
        alt="Osumare Logo"
        loading="lazy"
        className={styles.logo}
      />
      <button className={styles.contactBtn}>Contact us</button>
    </nav>
  );
}
