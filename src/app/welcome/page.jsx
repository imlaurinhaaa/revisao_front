'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Welcome.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '../../contexts/UserContext';

export default function Welcome() {
  const [name, setName] = useState('');
  const { setUsername } = useUser();
  const router = useRouter();

  const handleName = () => {
    setUsername(name);
    router.push('/home');
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src="/image/log-semfundo.png"
          alt="Logo Image"
          width={300}
          height={300}
          className={styles.image}
        />
        <h1 className={styles.title}>Bem-Vindo (a) Cozy Loops!</h1>
        <p className={styles.description}>
          Na Cozy Loops, cada fio ganha vida em peças artesanais de crochê cheias de personalidade e carinho. Aqui, o aconchego se transforma em arte feita à mão, pronta para trazer conforto e estilo para o seu dia a dia. 
        </p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          placeholder="Digite seu nome"
        />
        <Link href="/home" onClick={handleName} className={styles.button}>
          Acessar
        </Link>
        </div>
    </div>
  );
}

