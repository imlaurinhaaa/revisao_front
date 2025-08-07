import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
                <div className={styles.container}>
                    <Image
                        src="/image/log-semfundo.png"
                        alt="Cozy Loops Logo"
                        width={100}
                        height={100}
                    />
                    <div className={styles.titleLogo}>Cozy Loops 🧸🌷</div>
                    <p className={styles.text}>Copyright © 2025 all rights reserved</p>
                </div>
        </footer>
    );
}
