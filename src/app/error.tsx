'use client';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-gray-900 p-4">
      <h2 className="text-2xl font-bold mb-4">Algo salio mal en Postly.</h2>
      <p className="text-sm text-gray-500 mb-6">{error.message}</p>
      <button onClick={() => reset()} className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
        Intentar de nuevo
      </button>
    </div>
  );
}
