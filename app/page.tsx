"use client";
import { useRouter } from "next/navigation";
import TextSwitcher from "@/components/TextSwitcher";
import Header from "@/components/Header";

export default function Home() {
  const router = useRouter();

  return ( 
    <main
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/1.jpg')" }}
    >
      <Header/>
    
      {/* Overlay background dengan opacity */}
      <div className="absolute inset-0 bg-black/70" />
    
      

      {/* Konten */}
      <div className="relative z-10 flex w-full justify-center items-center">
        <h1 className="text-4xl font-bold mb-6">
          🎉 Hallo My <TextSwitcher /> 🎉
        </h1>
      </div>

      <h1 className="relative z-10 text-4xl font-bold mb-6">
        first click button yapp !!
      </h1>

      <button
        onClick={() => router.push("/intro")}
        className="relative z-10 px-8 py-3 
             bg-gradient-to-b from-pink-500 to-pink-700 
             rounded-full 
             text-white font-bold text-lg
             shadow-[0_6px_0_0_#7f1d1d] 
             hover:from-pink-400 hover:to-pink-600
             active:translate-y-1 active:shadow-none 
             transition-all duration-150"
      >
        START !
      </button>
    </main> 
  );
}
