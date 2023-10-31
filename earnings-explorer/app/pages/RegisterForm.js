// components/RegisterForm.js
import React, { useState } from 'react';
import { auth } from '../util/firebase';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      await user.updateProfile({ displayName: username });

      // Redirecionar para a página do painel do motorista após o registro bem-sucedido
    } catch (error) {
      console.error('Erro de registro:', error);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <label>
          Nome de usuário:
          <input type="text" value={username} onChange={handleUsernameChange} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <label>
          Senha:
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </label>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterForm;
