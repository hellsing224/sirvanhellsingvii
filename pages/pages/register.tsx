import React, { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se integrará Supabase para registrar el usuario
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form onSubmit={handleRegister} className="bg-gray-100 p-6 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Registro</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full mb-3 p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-xl">Crear cuenta</button>
      </form>
    </div>
  );
}
