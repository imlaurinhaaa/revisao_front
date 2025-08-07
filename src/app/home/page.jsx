'use client';
import { useState } from 'react';
import React from "react";
import Image from "next/image";
import styles from "./Home.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Inspiracao from '../../components/Inspiracao';
import Video from "../../components/Video";
import { useUser } from '@/contexts/UserContext';

export default function Home() {
    const [inspiracoes, setInspiracoes] = useState([
        { name: "Gabriel Lacerda", social: "@gabrielcroche" },
        { name: "Simone Carvalho", social: "@porsimonecarvalho" },
        { name: "Tainá Macedo", social: "@artfioscrochet" },
        { name: "Fran Aluap", social: "@franaluap" },
        { name: "Anna Opusckevicz", social: "@opusckeviczcroches" },
        { name: "Ju Sanches", social: "@cacoamigurumi" },
    ]);

    const { username } = useUser();

    return (
        <div className={styles.container}>
            <Header username={username} />
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

            <div className={styles.inspiracao}>
                <h2 className={styles.title}>Inspirações no Crochê</h2>
                <p className={styles.text}>
                    Confira alguns perfis incríveis que compartilham
                    inspirações e técnicas de crochê. Siga-os para se
                    inspirar e aprender mais sobre essa arte maravilhosa!
                </p>
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

            <div className={styles.content}>
                <h2 className={styles.title}>Aprenda Crochê</h2>
                <p className={styles.text}>
                    Descubra o mundo do crochê com nossos tutoriais e dicas.
                    Aprenda desde os pontos básicos até técnicas avançadas para
                    criar peças incríveis. Se você é iniciante ou já tem
                    experiência, temos algo para todos!
                </p>
                <div className={styles.videoList}>
                    <Video
                        src="https://www.youtube.com/embed/HWxVdfaI7AY"
                        title="Coração de crochê 💗"
                        description="Aprenda a fazer um lindo coração de crochê contornado, perfeito para decorar ou presentear."
                    />
                    <Video
                        src="https://www.youtube.com/embed/vQCB4rNMgAY"
                        title="Estrela de crochê FÁCIL ⭐️"
                        description="Aprenda a fazer uma estrela de crochê fácil, ideal para enfeites de Natal ou decoração."
                    />
                    <Video
                        src="https://www.youtube.com/embed/e6fRoap-FBQ"
                        title="CAT Keychain 🧶"
                        description="Aprenda a criar um chaveiro de gato em crochê de 5 minutos, perfeito para iniciantes!"
                    />
                    <Video
                        src="https://www.youtube.com/embed/QGBseCAc_88"
                        title="Crochet Butterfly 🦋"
                        description="Aprenda a fazer uma linda borboleta de crochê, perfeita para decorar ou presentear."
                    />
                    <Video
                        src="https://www.youtube.com/embed/MPotzcwBF-8"
                        title="How to crochet a chick 🐥"
                        description="Aprenda a fazer um pintinho de crochê, uma peça fofa e perfeita para presentear."
                    />
                    <Video
                        src="https://www.youtube.com/embed/TcQ4N3BweSA"
                        title="Crochet Bunny Tutorial 🐰"
                        description="Aprenda a fazer um coelhinho de crochê, uma peça fofa e perfeita para a Páscoa."
                    />
                    <Video
                        src="https://www.youtube.com/embed/TRLyB8K31xQ"
                        title="Crochê para iniciantes 2025 ✨"
                        description="Aprenda os pontos básicos do crochê e comece sua jornada criativa com este guia para iniciantes."
                    />
                    <Video
                        src="https://www.youtube.com/embed/yudRUESZ-io"
                        title="Crochet Hairband 👒"
                        description="Aprenda a fazer uma faixa de cabelo de crochê, uma peça fofa e perfeita para complementar seu look."
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}