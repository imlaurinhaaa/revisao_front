import React from "react";
import styles from "../styles/Video.module.css";

export default function Video({ src, title, description }) {

    return (
        <div className={styles.videoContainer}>
        <iframe width="320" height="180" src={src} title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen className="iframe"></iframe>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{description}</p>
        </div>
    );
}



