import React from 'react';
import Head from 'next/head';

export const metadata = {
  title: 'Seu Aplicativo de Motorista',
  description: 'Painel de controle para motoristas de aplicativo.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body>{children}</body>
    </html>
  );
}
