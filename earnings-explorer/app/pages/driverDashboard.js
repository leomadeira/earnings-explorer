import React, { useEffect, useState } from 'react';
import { auth, db } from '../util/firebase';

export default function DriverDashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Verificar se o usuário está autenticado
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>Bem-vindo, {user.displayName}!</h1>
          <p>Aqui está uma visão geral dos seus ganhos:</p>
          {/* Implemente a lógica para exibir os ganhos do motorista */}
        </div>
      ) : (
        <p>Faça login para acessar o painel do motorista.</p>
      )}
    </div>
  );
}
