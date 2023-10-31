import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Seu Aplicativo de Motorista</h1>
      <p>Bem-vindo ao seu painel de controle.</p>
      <Link href="/login">Fazer Login</Link>
    </div>
  );
}
