"use client";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
      style={{backgroundImage: "url('/home-background.jpg')" }}>

      {/* Konten */}
      <h1 className="text-4xl font-bold mb-6">
        🎉 Welcome to the Surprise 🎉
      </h1>
      <button
        onClick={() => router.push("/intro")}
        className="px-6 py-3 bg-pink-600 rounded-full hover:bg-pink-700 transition"
      >
        Click ini untuk memulai
      </button>
    </main>
  );
}
