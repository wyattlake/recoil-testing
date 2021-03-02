import { TodoList } from "components/TodoList";
import Head from "next/head";
import React from "react";
import styles from "styles/Home.module.css";
import NextLink from "next/link";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Recoil</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <NextLink href="/login">login</NextLink>
                <h1 className={styles.title}>Obnoxious and minimalist.</h1>
                <TodoList />
            </main>
        </div>
    );
}
