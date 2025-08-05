import React from 'react';
import styles from '../styles/Inspiracao.module.css';

export default function Inspiracao({name, social}) {
    const nameExibido = name ? name : "Nome não fornecido";
    const socialExibido = social ? social : "Social não fornecido";
    return (
        <div className={styles.inspiracao}>
            <h3 className={styles.inspiracaoName}>{nameExibido}</h3>
            <p className={styles.inspiracaoSocial}>{socialExibido}</p>
        </div>
    );
}