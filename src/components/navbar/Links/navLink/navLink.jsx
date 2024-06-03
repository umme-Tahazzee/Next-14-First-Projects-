"use client";
import React from "react";
import styles from "./navLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <div
      href={item.path}
      className={`${styles.container}
     ${pathName === item.path && styles.active}`}
    >
      <Link href={item.path} key={item.title}>
        {item.title}
      </Link>
    </div>
  );
};

export default navLink;
