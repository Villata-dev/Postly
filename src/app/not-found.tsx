import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h2 className="text-4xl font-bold mb-2">404</h2>
      <p className="text-gray-600 mb-6">No pudimos encontrar la publicacion o ruta solicitada.</p>
      <Link href="/" className="text-blue-600 hover:underline">
        Volver al inicio
      </Link>
    </div>
  );
}
