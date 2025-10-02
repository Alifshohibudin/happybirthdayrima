"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import BalloonsFalling from "@/components/BalloonsFalling";
import Fireworks from "@/components/Fireworks";
import Image from "next/image";
import FlipBook from "@/components/flipbook/FlipBook";

export default function Scrapbook() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showSurprise, setShowSurprise] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-500 to-pink-200 text-black relative overflow-hidden px-2 sm:px-4">
      {/* Background Music */}
      <audio ref={audioRef} autoPlay loop src="/slipping trough my finger.mp3" />

      {/* Music Toggle Button */}
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

      {/* FlipBook Section */}
      <FlipBook
        width={400}
        height={600}
        size="stretch"
        minWidth={250}
        maxWidth={600}
        minHeight={350}
        maxHeight={900}
        drawShadow
        flippingTime={800}
        className="shadow-2xl rounded-lg w-full max-w-[600px] h-auto overflow-hidden"
      >
        {/* Page 1 - Opening */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-6 sm:p-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-pink-500 mb-6 mt-40">
            🎂 Selamat Ulang Tahun Sayangku.. Yimmaaa 🎉
          </h1>
          <p className="text-gray-700 text-sm sm:text-lg md:text-xl mb-4">
            Made from my heart only for you
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl">💖</h1>
          <p className="text-gray-700 mt-8 text-sm sm:text-base italic">
            swipe kanan atas !
          </p>
        </div>

        {/* Pages with Images */}
        {[
          { src: "/1.jpg", caption: "Hari dimana kita merayakan after wisuda ✨"},
          { src: "/2.jpg", caption: "hehe hutan kota menyimpan banyak kenangan ✨"},
          { src: "/3.jpg", caption: "padahal aku ga yakin bakalan bisa gak ya kira kira sidang, sidang tapi disisi aku ada kamu 💕"},
          { src: "/4.jpg", caption: "yey akhirnyaa kamu bisa jugaa ngerjain ntu raja akhir✨"},
          { src: "/5.jpg", caption: "lagi mode kalem ceritanye ✨"},
          { src: "/6.jpg", caption: "itadakimas~ ✨"},
          { src: "/7.jpg", caption: "akhirnya bisa ngerasain hawa dingin berdua ehe ✨"},
          { src: "/8.jpg", caption: "foto terkeren sih ini ✨"},
          { src: "/9.jpg", caption: "anjay anjay sigap benerr ✨"},
          { src: "/10.jpg", caption: "miss uu mbaahh, al-fatihah ✨"},
          { src: "/11.jpg", caption: "tetiba minta foto ✨"},
          { src: "/12.jpg", caption: "bantal ku kalah empuk sama pundak kamu, bikin nyaman bangetttttt ✨"},
          { src: "/13.jpg", caption: "jedodin pala ahh✨"},
          { src: "/14.jpg", caption: "aestetic banget sih mba ✨"},
          { src: "/15.jpg", caption: "uwuuuuu!~~ ✨"},
          { src: "/16.jpg", caption: "cahaya ilahi jan lupa ya ges✨"},
          { src: "/17.jpg", caption: "cu amatt sih kita ✨"},
          { src: "/18.jpg", caption: "jan lupaa ya dietnyaa ✨"},
          { src: "/19.jpg", caption: "tempat senderan ternyaman, pundak kamu !✨"},
          { src: "/20.jpg", caption: "yeyy akhirnya bisa lulus barengg !! ✨"},
          { src: "/21.jpg", caption: "Kiw kiw ✨"},
          { src: "/22.jpg", caption: "Ey noonaa manis siapa yang punya ✨"},
          { src: "/23.jpg", caption: "jadi putri kanjeng dulu ✨"},
          { src: "/24.jpg", caption: "manis banget sih ✨"},
          { src: "/25.jpg", caption: "uwwww ibu guluuu acuu ✨"},
          { src: "/26.jpg", caption: "mwehehehe ✨"},
          { src: "/27.jpg", caption: "sayang bangettt luvv ✨"},
          { src: "/28.jpg", caption: "MasyaAllah Tabarakallah ~ ✨"},
        ].map((page, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center h-full bg-white p-4 sm:p-6 text-center overflow-hidden"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={page.src}
                alt={`Memory ${idx + 1}`}
                width={234}
                height={234}
                className="w-full h-full object-cover rounded-lg mt-32 mb-32 pb-32"
              />
              
            </div>
            
            {page.caption && (
              <p className="relative bottom-16 text-gray-600 text-sm sm:text-base md:text-lg">
                {page.caption}
              </p>
            )}
            </div>
          
        ))}

        {/* Page - Love Message */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-4 sm:p-6 text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-500 mb-2 mt-56">
            ✨ Love You More ✨
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg ">
            With you, I don’t need a perfect world, karena dunia yang aku mau ya
            dunia yang ada kamu di dalamnya. 💕 Happy birthday, my everything. I
            love you endlessly.
          </p>
        </div>

        {/* Page - Final Love Message */}
        <div className="flex flex-col items-center justify-center h-full bg-white p-4 sm:p-6 text-center mt-5">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-500 mb-2 mt-56">
            ✨ Am Always Loving U ✨
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg">
            Semoga di umur yang baru ini, semua doa-doa indah kamu jadi nyata.
            Dan aku janji, I’ll always be your number one supporter, your
            shoulder to lean on, and the one who never lets go babyy.......
          </p>
        </div>

        {/* Page - Surprise Button */}
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
          <button
            onClick={() => setShowSurprise(true)}
            className="px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition text-sm sm:text-base md:text-lg mt-56"
          >
            🎈 Klik untuk kejutan 🎆
          </button>
        </div>
      </FlipBook>

      {/* Surprise Effects */}
      {showSurprise && (
        <>
          <BalloonsFalling />
          <Fireworks />
        </>
      )}
    </main>
  );
}
