// components/Header.js
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <nav>
      <Link href="/login">Fazer Login</Link>
      <Link href="/driverDashboard">Painel do Motorista</Link>
    </nav>
  );
};

export default Header;
