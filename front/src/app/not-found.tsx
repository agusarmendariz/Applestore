import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        404 – Página no encontrada
      </h1>
      <p className="text-gray-500 mb-6">
        No pudimos encontrar la ruta que buscabas.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        <Home size={18} />
        Volver al inicio
      </Link>
    </div>
  );
}