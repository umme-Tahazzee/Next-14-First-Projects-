"use client";
import Link from "next/link";
import styles from "./LoginFrom.module.css";
import { login } from "@/lib/action";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import { useFormState } from "react-dom";

const LoginFrom = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();

  //   useEffect(() => {
  //     state?.success && router.push("/login");
  //   }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input
        className={styles}
        type="text"
        placeholder="username"
        name="username"
      />
      <input type="password" placeholder="password" name="password" />

      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"}
        <b>Sign Up</b>
      </Link>
    </form>
  );
};

export default LoginFrom;
