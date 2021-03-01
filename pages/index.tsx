import Head from "next/head";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import styles from "styles/Home.module.css";
import { counter } from "state/counter";

export default function Home() {
    const [count, setCounter] = useRecoilState(counter);
    return (
        <div className={styles.container}>
            <Head>
                <title>Recoil</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>Hello</h1>
                <button onClick={() => setCounter((count) => count + 1)}>
                    +
                </button>
                <p>{count}</p>
            </main>
        </div>
    );
}
