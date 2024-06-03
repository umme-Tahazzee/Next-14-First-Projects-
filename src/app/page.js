import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Creative <span className={styles.span}>Thougths</span> Agency
        </h1>
        <p className={styles.desc}>
          n response to a complaint that we received under the US Digital
          Millennium Copyright Act, we have removed 2 result from this page. If
          you wish, you may read the DMCA complaint that caused the removal at
          LumenDatabase.org.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>Contect</button>
        </div>
        
        <div className={styles.brands}>
          {/* <Image src="/brands.png" alt="" fill className={styles.brands}/> */}
          {/* <FontAwesomeIcon icon={faLinkedin} className={styles.smallIcon} />
          <FontAwesomeIcon icon={faGithub} className={styles.smallIcon} /> */}
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="hero" fill className={styles.heroImg} />
      </div>
    </div>
  );
}
