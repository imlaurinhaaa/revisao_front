import React from "react";
import Image from "next/image";
import styles from "../styles/Card.module.css";

export default function Card({product}) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    className={styles.cardImage}
                    src={product.image}
                    alt="Imagem do Card"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                />
            </div>
            <h2 className={styles.cardTitle}>{product.name}</h2>
            <p className={styles.cardDescription}>
                {product.description}
            </p>
            <p className={styles.cardPrice}>{product.price}</p>
        </div>
    );
}