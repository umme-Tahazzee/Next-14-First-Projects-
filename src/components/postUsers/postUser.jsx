import React from 'react'
import styles from './postUser.module.css'
import { getUser } from '@/lib/data'
import Image from 'next/image'

// FEATCH DATA WITH AN API 

// const getData = async (userId) => {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${userId}`,
//       {cache: "no-store"}
     
//     );
//     if (!res.ok) {
//       throw new Error("Something went wrong");
     
//     }
  
//     return res.json();
//   };

const PostUser = async({userId}) => {
    const user = await getUser(userId)
  return (
    <div>
           <div className={styles.container}>
           <Image
            className={styles.avatar}
            src={user.img ? user.img : '/noavatar.png'}
            alt="post1"
            width={50}
            height={50}
          />
           <div className={styles.texts}>
           <span className={styles.title}>Author</span>
            <span className={styles.username}>{user.username}</span>
           </div>
          </div>

    </div>
  )
}

export default PostUser