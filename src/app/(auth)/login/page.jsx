import { handleGithubLogin, login } from "@/lib/action";
import styles from "./login.module.css";
import React from "react";
import LoginFrom from "@/components/loginForm/LoginFrom";

const LoginPage =  () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginFrom />
      </div>
    </div>
  );
};

export default LoginPage;
