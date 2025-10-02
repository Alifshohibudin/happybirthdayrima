"use client";
import { useRouter } from "next/navigation";
import TextSwitcher from "@/components/TextSwitcher";
import Header from "@/components/Header";

export default function Home() {
  const router = useRouter();

  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white px-4"
      style={{ backgroundImage: "url('/1.jpg')" }}
    >
      <Header />

      {/* Overlay background dengan opacity */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Konten */}
      <div className="relative z-10 flex w-full justify-center items-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-snug">
          🎉 Hallo My <TextSwitcher /> 🎉
        </h1>
      </div>

      <h2 className="relative z-10 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-center">
        First click button yapp !!
      </h2>

      <button
        onClick={() => router.push("/intro")}
        className="relative z-10 px-6 sm:px-8 py-2 sm:py-3 
             bg-gradient-to-b from-pink-500 to-pink-700 
             rounded-full 
             text-white font-bold text-base sm:text-lg md:text-xl
             shadow-[0_4px_0_0_#7f1d1d] 
             hover:from-pink-400 hover:to-pink-600
             active:translate-y-1 active:shadow-none 
             transition-all duration-150"
      >
        START !
      </button>
    </main>
  );
}
