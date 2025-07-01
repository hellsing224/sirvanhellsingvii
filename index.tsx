import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a MLBB Pro Hub</h1>
        <p className="mb-6">Formación élite, torneos, comunidad y ranking mensual por solo 15$/mes.</p>
        <Link href="/register">
          <a className="bg-blue-600 text-white px-4 py-2 rounded-xl">Únete ahora</a>
        </Link>
      </div>
    </div>
  );
}