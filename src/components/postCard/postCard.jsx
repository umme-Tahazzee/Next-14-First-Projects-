import React from "react";
import styles from "./postcard.module.css";
import Image from "next/image";
import Link from "next/link";

const postCard = ({post}) => {
  const date = new Date();
  return (
    <div className={styles.container}>
      <div className={styles.top}>
       {post.img && <div className={styles.imgContainer}>
          <Image className={styles.img} src={post.img} alt="post1" fill/>
        </div>}
        <span className={styles.date}>01.01.2002</span>
      </div>

      <div className={styles.buttom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body} </p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>Read more</Link>
      </div>
    </div>
  );
};

export default postCard;
