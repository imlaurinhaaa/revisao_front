import React from "react";
import Image from "next/image";
import styles from "./Home.module.css";
import Header from "../../components/Header";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.banner}>
                <Image
                    className={styles.bannerImage}
                    src="/image/banner.png"
                    alt="Banner de Crochê"
                    width={1200}
                    height={520}
                    priority
                />
            </div>
        </div>
    );
}