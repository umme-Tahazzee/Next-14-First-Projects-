//  "use client";
// import React, { useEffect, useState } from "react";
import styles from "./contact.module.css";
import Image from "next/image";
// import dynamic from "next/dynamic";


// const HydrationTextNOSSR = dynamic(()=>import("@/components/hydrationText"), {ssr:false})
export const metadata = {
  title: "Contact page",
  description: "contact description",
};

const ContectPage = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/contact.png" alt="contact" fill />
      </div>
      <div className={styles.formContainer}>
        {/* <HydrationTextNOSSR/> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Enter your name" />
          <input type="Email" placeholder="Enter your mails" />
          <input type="password" placeholder="Enter ur password" />
          <input type="number" placeholder="Enter ur phone number" />
          <textarea type="text" placeholder="Enter ur message" />
          <button
           
            className={styles.button}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContectPage;
