import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const page = () => {
  // console.log('lets check here');
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>About MySelf</h2>
        <h1 className={styles.title}>
          I am student of Port City International University.. I am passionate
          of programming and web technology.
        </h1>
        <p className={styles.desc}>
          n response to a complaint that we received under the US Digital
          Millennium Copyright Act, we have removed 2 result from this page. If
          you wish, you may read the DMCA complaint that caused the removal at
          LumenDatabase.org.
        </p>
        <div className={styles.boxs}>
          <div className="box">
            <h1 className={styles.boxH1}>10 K+</h1>
            <p>Year of exprerience</p>
          </div>
          <div className="box">
            <h1 className={styles.boxH1}>10 K+</h1>
            <p>Year of exprerience</p>
          </div>
          <div className="box">
            <h1 className={styles.boxH1}>10 K+</h1>
            <p>Year of exprerience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
          <Image 
           className={styles.img}
          src="/about.png"
           alt="about"
           fill/>
      </div>
    </div>
  );
};

export default page;
