'use client';
import { useState } from 'react';
import React from "react";
import Image from "next/image";
import styles from "./Home.module.css";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Inspiracao from '../../components/Inspiracao';

export default function Home() {
    const [inspiracoes, setInspiracoes] = useState([
        { name: "Ana", social: "@ana_croche" },
        { name: "Bruno", social: "@bruno_crocheiro" },
        { name: "Carla", social: "@carla_fios" },
        { name: "Daniel", social: "@daniel_linhas" },
        { name: "Elisa", social: "@elisa_tramas" },
    ]);
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

            <div className={styles.content}>
                <Card img="/image/flores.jpg" title="Chaveiro | Flor" description="Lindo chaveiro em formato de flor, feito à mão com carinho." />
                <Card img="/image/marcapagina.jpg" title="Marcador de Página | Flor" description="Lindo marcador de página, feito à mão com carinho." />
                <Card img="/image/cropped.jpg" title="Cropped" description="Lindo cropped, feito à mão com carinho." />
                <Card img="/image/bolsa.jpg" title="Bolsa" description="Linda bolsa, feita à mão com carinho." />
                <Card img="/image/buckethat.jpg" title="Bucket Hat" description="Lindo bucket hat, feito à mão com carinho." />
            </div>
            <div className={styles.inspiracao}>
                <div className={styles.inspiracaoList}>
                    {inspiracoes.map((inspiracao, index) => (
                        <Inspiracao
                            key={index}
                            name={inspiracao.name}
                            social={inspiracao.social}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}