import Link from "next/link";
import React from "react";
import Links from "./Links/Links";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";

const Naver = async() => {
  const session = await auth();
  

  return (
    <div className={styles.container}>
      <Link href="/" className="logo">
       Karia
      </Link>
      <div>
        <Links session={session}/>
      </div>
    </div>
  );
};

export default Naver;
