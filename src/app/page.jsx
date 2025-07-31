import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Bem-vindo ao Nosso Site</h1>
      <Image
        src="/image/livro.jpg"
        alt="Marca Página de Crochê"
        width={300}
        height={300}
        className={styles.imagem}
      />
      <p className={styles.texto}>Esta é a página inicial do nosso site. Aqui você pode encontrar informações sobre nossos serviços e produtos.</p>
      <button className={styles.botao}>
        <Link href="/sobre">Saiba Mais Sobre</Link>
      </button>
    </div>
  );
}

