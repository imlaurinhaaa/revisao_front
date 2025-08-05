import Link from "next/link";

export default function NotFound() {
    return (
        <div style={{ padding: "20px", backgroundColor: "#ff24aa", borderRadius: "10px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h1 style={{ color: "#ffffff", fontSize: "2rem", marginBottom: "1rem" }}>Página Não Encontrada</h1>
            <h1 style={{ color: "#ffffff", fontSize: "2rem", marginBottom: "1rem" }}>🔍 404 - Página não encontrada</h1>
            <p style={{ color: "#ffffff", margin: "10px 0", fontSize: "1rem" }}>A página que você procura não existe.</p>
            <div style={{ marginTop: "20px" }}>
                <Link href="/home">🎀 Voltar para Home</Link>
            </div>
        </div>
    )
}