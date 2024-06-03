import React, { Suspense } from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUsers/postUser";
import { getPost } from "@/lib/data";

// FEATCH DATA WITH AN API

// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, );

  if (!res.ok) {
    throw new Error("Something went wrong");
    
  }

  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  console.log(post);
  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  //Fetch data with an api
  const post = await getData(slug);

  console.log(post);
  //Fetch with an API
  // const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={post.img} alt="post1" fill />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading......</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>5.25.24</span>
          </div>
        </div>
        <div className={styles.contect}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
