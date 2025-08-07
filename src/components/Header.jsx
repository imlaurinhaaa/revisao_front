"use client";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header({ username }) {
    return (
        <header className={styles.header}>
            <Image className={styles.logo} src="/image/log-semfundo.png" alt="Logo" width={90} height={90} />
            <h1 className={styles.title}>Cozy Loops</h1>
            <div className={styles.user}>
            {username && <p className={styles.message}>Olá, {username}!</p>}
            </div>
            <nav>
                <ul className={styles.menu}>
                    <Link href="/home" className={styles.menuItem}>Home</Link>
                    <Link href="/products" className={styles.menuItem}>Produtos</Link>
                    <Link href="/about" className={styles.menuItem}>Sobre</Link>
                </ul>
            </nav>
        </header>
    );
}