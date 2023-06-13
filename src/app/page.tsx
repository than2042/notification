"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [userName, setUsername] = useState("");
  const [user, setUser] = useState("");

  console.log(user);
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.login}>
          <input
            className={styles.input}
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => setUser(userName)} className={styles.button}>
            Login
          </button>
        </div>
      </div>
    </main>
  );
}
