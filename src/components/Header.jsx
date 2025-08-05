import React from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <Image className={styles.logo} src="/image/log-semfundo.png" alt="Logo" width={90} height={90} />
            <h1 className={styles.title}>Cozy Loops</h1>
            <nav>
                <ul className={styles.menu}>
                    <Link href="/home" className={styles.menuItem}>Home</Link>
                    <Link href="/produtos" className={styles.menuItem}>Produtos</Link>
                    <Link href="/sobre" className={styles.menuItem}>Sobre</Link>
                </ul>
            </nav>
        </header>
    );
}