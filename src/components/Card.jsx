import React from "react";
import Image from "next/image";
import styles from "../styles/Card.module.css";

export default function Card({img, title, description}) {
    return (
        <div className={styles.card}>
            <Image
                className={styles.cardImage}
                src={img}
                alt="Imagem do Card"
                width={200}
                height={200}
                priority
            />
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardDescription}>
                {description}
            </p>
        </div>
    );
}