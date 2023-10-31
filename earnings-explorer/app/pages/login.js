import React, { useState } from 'react';
import { auth } from '../util/firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Redirecionar para a página do painel do motorista após o login bem-sucedido
    } catch (error) {
      console.error('Erro de login:', error);
    }
  };

  return (
    <div>
      <h1>Fazer Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <label>
          Senha:
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
