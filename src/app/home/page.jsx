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

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

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

    const showSuccess = () => {
        toast.success("✅ Sucesso!");
    };

    const showError = () => {
        toast.error("❌ Erro!");
    };

    const showWarning = () => {
        toast.warn("⚠️ Aviso!");
    };

    const showInfo = () => {
        toast.info("ℹ️ Informação!");
    };

    const showCustom = () => {
        toast("🎀 Congratulations", {
            style: {
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                fontWeight: "bold",
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            },
        });
    };

    const [show, setShow] = useState(false);

    const [palavra, setPalavra] = useState("");
    const [resultado, setResultado] = useState(null);
    const [erro, setErro] = useState("");

    const buscarPalavra = async () => {
        setErro("");
        setResultado(null);

        try {
            const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${palavra}`);
            const dados = res.data[0];

            const audio = dados.phonetics[1]?.audio || null;
            setResultado({ palavra: dados.word, audio: audio });
        } catch (err) {
            setErro("Palavra não encontrada ou erro de rede.");
        }
    };


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
            <div style={{ padding: "2rem", textAlign: "center" }}>

                <div style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    marginTop: "2rem",
                    marginBottom: "2rem",
                }}>
                    <button style={{ background: "linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={showSuccess}>Success</button>
                    <button style={{ background: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={showError}>Error</button>
                    <button style={{ background: "linear-gradient(135deg, #f39c12 0%, #e67e22 100%)", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={showWarning}>Warning</button>
                    <button style={{ background: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={showInfo}>Info</button>
                    <button style={{ background: "linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={showCustom}>Custom</button>
                </div>

                <>
                    <button
                        onClick={() => setShow(true)}
                        style={{
                            background: "linear-gradient(135deg, #fe6eaf 0%, #ff4081 100%)",
                            color: "#fff",
                            padding: "12px 24px",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontSize: "1rem",
                            fontWeight: "600",
                            boxShadow: "0 4px 15px rgba(254, 110, 175, 0.3)",
                            transition: "all 0.3s ease"
                        }}
                    >
                        ✨ Abrir Modal
                    </button>

                    {show && (
                        <div
                            onClick={() => setShow(false)}
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "rgba(0,0,0,0.5)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 1000
                            }}
                        >
                            <div
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                    background: "#fff",
                                    padding: "2rem",
                                    borderRadius: "16px",
                                    width: "90%",
                                    maxWidth: "400px",
                                    textAlign: "center",
                                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
                                    position: "relative"
                                }}
                            >
                                <button
                                    onClick={() => setShow(false)}
                                    style={{
                                        position: "absolute",
                                        top: "10px",
                                        right: "15px",
                                        background: "none",
                                        border: "none",
                                        fontSize: "24px",
                                        cursor: "pointer",
                                        color: "#999"
                                    }}
                                >
                                    ×
                                </button>

                                <div style={{
                                    fontSize: "3rem",
                                    marginBottom: "1rem"
                                }}>
                                    🎀
                                </div>

                                <h2 style={{
                                    color: "#2c3e50",
                                    fontSize: "1.5rem",
                                    fontWeight: "700",
                                    margin: "0 0 1rem 0",
                                    fontFamily: "Comic Relief, system-ui"
                                }}>
                                    Modal Simples
                                </h2>

                                <p style={{
                                    color: "#7f8c8d",
                                    fontSize: "1rem",
                                    lineHeight: "1.5",
                                    margin: "0 0 2rem 0",
                                    fontFamily: "Poppins, sans-serif"
                                }}>
                                    Um modal bonito e simples para seu projeto! ✨
                                </p>

                            </div>
                        </div>
                    )}
                </>
                <ToastContainer />
            </div>

            <div style={{
                padding: "2rem",
                textAlign: "center",
                background: "#fff",
                margin: "2rem auto",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                maxWidth: "500px"
            }}>
                <h1 style={{
                    fontFamily: "Comic Relief, system-ui",
                    fontSize: "1.8rem",
                    fontWeight: "700",
                    color: "#fe6eaf",
                    marginBottom: "1.5rem"
                }}>
                    🔤 Dicionário Inglês
                </h1>

                <div style={{
                    display: "flex",
                    gap: "10px",
                    marginBottom: "2rem",
                    justifyContent: "center",
                    flexWrap: "wrap"
                }}>
                    <input
                        type="text"
                        placeholder="Digite uma palavra..."
                        value={palavra}
                        onChange={(e) => setPalavra(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && buscarPalavra()}
                        style={{
                            padding: "10px 15px",
                            borderRadius: "20px",
                            border: "2px solid #ddd",
                            fontSize: "1rem",
                            minWidth: "200px",
                            outline: "none"
                        }}
                    />
                    <button
                        onClick={buscarPalavra}
                        style={{
                            background: "linear-gradient(135deg, #fe6eaf 0%, #ff4081 100%)",
                            color: "#fff",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "20px",
                            cursor: "pointer",
                            fontSize: "1rem",
                            fontWeight: "600"
                        }}
                    >
                        Buscar
                    </button>
                </div>

                {resultado && (
                    <div style={{
                        background: "#d4edda",
                        padding: "1.5rem",
                        borderRadius: "12px",
                        margin: "1rem 0",
                        border: "1px solid #c3e6cb"
                    }}>
                        <p style={{
                            fontSize: "1.2rem",
                            fontWeight: "600",
                            color: "#155724",
                            margin: "0 0 1rem 0"
                        }}>
                            ✅ Palavra: {resultado.palavra}
                        </p>
                        {resultado.audio && (
                            <div>
                                <p style={{ color: "#155724", marginBottom: "0.5rem" }}>
                                    🔊 Pronúncia:
                                </p>
                                <audio controls src={resultado.audio} style={{ width: "100%", maxWidth: "250px" }}>
                                    Seu navegador não suporta áudio.
                                </audio>
                            </div>
                        )}
                    </div>
                )}

                {erro && (
                    <div style={{
                        background: "#f8d7da",
                        padding: "1rem",
                        borderRadius: "12px",
                        margin: "1rem 0",
                        border: "1px solid #f1b9be"
                    }}>
                        <p style={{
                            color: "#721c24",
                            fontSize: "1rem",
                            fontWeight: "600",
                            margin: "0"
                        }}>
                            ❌ {erro}
                        </p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}