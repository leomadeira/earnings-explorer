import React, { useState } from 'react';
import { db } from '../util/firebase';

export default function EarningsForm() {
  const [earnings, setEarnings] = useState('');
  const [kilometers, setKilometers] = useState('');

  const handleEarningsChange = (e) => setEarnings(e.target.value);
  const handleKilometersChange = (e) => setKilometers(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Implemente a lógica para salvar os ganhos e quilômetros no Firebase Firestore
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ganhos do dia:
        <input type="number" value={earnings} onChange={handleEarningsChange} />
      </label>
      <label>
        Quilômetros rodados:
        <input type="number" value={kilometers} onChange={handleKilometersChange} />
      </label>
      <button type="submit">Salvar</button>
    </form>
  );
}
