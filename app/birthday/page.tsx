"use client";

import HTMLFlipBook from "react-pageflip";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react"; 
import BalloonsFalling from "@/components/BalloonsFalling";
import Fireworks from "@/components/Fireworks";
import Image from "next/image";

export default function Scrapbook() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const [showSurprise, setShowSurprise] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-500 to-birthday pale text-black relative overflow-hidden">
      <audio ref={audioRef} autoPlay loop src="/slipping trough my finger.mp3" />
      {/* Tombol Musik */}
      <button
        onClick={toggleMusic}
        className="absolute top-4 right-4 p-3 rounded-full bg-white shadow-md hover:bg-pink-100 transition"
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-pink-500" />
        ) : (
          <VolumeX className="w-6 h-6 text-gray-500" />
        )}
      </button>

      <HTMLFlipBook
        width={500}
        height={700}
        size="fixed"
        minWidth={300}
        maxWidth={600}
        minHeight={400}
        maxHeight={900}
        drawShadow={true}
        flippingTime={800}
        className="shadow-2xl rounded-lg"
      >
        {/* Halaman 1 */}
        <div className="flex flex-col items-center justify-items-center place-content-center h-full bg-white p-6 text-center">
          <h1 className="text-5xl font-bold text-pink-500 mb-4">
            🎂 Selamat Ulang Tahun Sayangku.. Yimmaaa 🎉
          </h1>
          <br/><br/><br/><br/>
          <p className="text-gray-700 text-2xl">Make from my heart only for you</p>
          <h1 className="text-7xl">💖</h1>
          <br/><br/><br/><br/>
          <p className="text-gray-700">swipe kanan atas !</p>
        </div>

        {/* Halaman 2 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6">
          <Image
            src="/1.jpg"
            alt="Memory 1"
            className="w-96 h-96 object-cover rounded-lg shadow mb-4"
          />
          <p className="text-gray-600 text-center text-2xl">
            Kenangan kita yang tak terlupakan ✨
          </p>
          <br/>
          <p className="text-gray-600 text-left">
            Hari ini bukan cuma spesial buat kamu, tapi juga buat aku… karena aku beruntung banget bisa punya kamu di hidupku. You’re literally my safe place, my partner in crime, and the best thing that ever happened to me.
          </p>
          <p className="text-gray-600 text-left">Semoga di umur yang baru ini, semua mimpi kamu jadi nyata, dan aku janji bakal stay by your side no matter what. Honestly, I don’t need anything fancy in this world, as long as I have you.💖
          </p>

        </div>

        {/* Halaman 3 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6">
          <Image
            src="/2.jpg"
            alt="Memory 2"
            className="w-full h-full object-cover rounded-lg shadow mb-4"
          />
        </div>

        {/* Halaman 4 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6">
          <Image
            src="/3.jpg"
            alt="Memory 3"
            className="w-100 h-100 object-cover rounded-lg shadow mb-4"
          />
          <p className="text-gray-600">
            Cheers for more crazy moments, endless laughs, and love stories we’ll create together. 💕 
          </p>
          <br/>
          <p className="text-gray-600">
          Terima kasih sudah jadi bagian penting dalam hidupku 💕
          </p>
        </div>

        {/* Halaman 5 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/4.jpg" 
          alt="Memory 4" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div>

        {/* Halaman 6 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/5.jpg" 
          alt="Memory 5" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div>

        {/* Halaman 7 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/6.jpg" 
          alt="Memory 6" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div>

        {/* Halaman 8 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/7.jpg" 
          alt="Memory 7" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div>

        {/* Halaman 9 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/8.jpg" 
          alt="Memory 8" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div>

        {/* Halaman 10 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/9.jpg" 
          alt="Memory 9" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div>

        {/* Halaman 11 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/10.jpg" 
          alt="Memory 10" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div>

        {/* Halaman 12 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/11.jpg" 
          alt="Memory 11" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div>

        {/* Halaman 13 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/12.jpg" 
          alt="Memory 12" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div>

        {/* Halaman 14 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/13.jpg" 
          alt="Memory 13" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div>

        {/* Halaman 15 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/14.jpg" 
          alt="Memory 14" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div>

         {/* Halaman 16 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/15.jpg" 
          alt="Memory 15" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div>

         {/* Halaman 17 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/16.jpg" 
          alt="Memory 16" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div>

        {/* Halaman 17 */}
        <div className="flex flex-col items-center justify-center h-full place-content-center bg-white p-6 text-center">
          <h2 className="text-2xl font-bold text-purple-500 mb-2">
            ✨ Love You More ✨
          </h2>
          <p className="text-gray-700">
            With you, I don’t need a perfect world, karena dunia yang aku mau ya dunia yang ada kamu di dalamnya. 💕
Happy birthday, my everything. I love you endlessly.
          </p>
        </div>
        
         {/* Halaman 18 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/17.jpg" 
          alt="Memory 17" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div>

         {/* Halaman 19 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/18.jpg" 
          alt="Memory 18" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div>

         {/* Halaman 20 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/19.jpg" 
          alt="Memory 19" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div>

         {/* Halaman 21 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/20.jpg" 
          alt="Memory 20" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div>

         {/* Halaman 22 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/21.jpg" 
          alt="Memory 21" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div>

         {/* Halaman 23 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/22.jpg" 
          alt="Memory 22" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div>

        {/* Halaman 24 */}
        
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/23.jpg" 
          alt="Memory 23" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div> 
        
        {/* Halaman 25 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/24.jpg" 
          alt="Memory 24" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div> 
        
        {/* Halaman 26 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/25.jpg" 
          alt="Memory 25" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div> 
        
        {/* Halaman 27 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/26.jpg" 
          alt="Memory 26" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div> 
        
        {/* Halaman 28 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/27.jpg" 
          alt="Memory 27" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div> 
        
        {/* Halaman 29 */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 text-center">
          <Image 
          src="/28.jpg" 
          alt="Memory 28" 
          className="w-full h-full object-cover rounded-lg shadow mb-4" 
          />
        </div> 
        
        {/* Halaman 30 */}
        <div className="flex flex-col items-center justify-center h-full place-content-center bg-white p-6 text-center">
          <h2 className="text-2xl font-bold text-purple-500 mb-2">
            ✨ am Always loving uu ✨
          </h2>
          <p className="text-gray-700">
            Semoga di umur yang baru ini, semua doa-doa indah kamu jadi nyata. Dan aku janji, I’ll always be your number one supporter, your shoulder to lean on, and the one who never lets go babyy.......
          </p>
        </div>

         {/* Halaman 31 */}
       <div className="flex flex-col items-center justify-center h-full place-content-center p-6 text-center">
          <button
            onClick={() => setShowSurprise(true)}
            className="px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition"
          >
            🎈 Klik untuk kejutan 🎆
          </button>
        </div>


      </HTMLFlipBook>
      {showSurprise && (
        <>
          <BalloonsFalling />
          <Fireworks />
        </>
      )}

      
    </main>
  );
}
