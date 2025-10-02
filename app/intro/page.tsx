"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import Image from "next/image";

type Cell = {
  letter: string | null;
  input: string;
  isBlock: boolean;
};

export default function Crossword() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const [grid, setGrid] = useState<Cell[][]>([
    [
      { letter: "", input: "", isBlock: true },
      { letter: "", input: "", isBlock: true },
      { letter: "a", input: "", isBlock: false },
      { letter: "p", input: "", isBlock: false },
      { letter: "r", input: "", isBlock: false },
      { letter: "i", input: "", isBlock: false },
      { letter: "l", input: "", isBlock: false },
      { letter: "", input: "", isBlock: true },
    ],
    [
      { letter: "", input: "", isBlock: true },
      { letter: "b", input: "", isBlock: false },
      { letter: "", input: "", isBlock: true },
      { letter: "a", input: "", isBlock: false },
      { letter: "", input: "", isBlock: true },
      { letter: "", input: "", isBlock: true },
      { letter: "", input: "", isBlock: true },
      { letter: "", input: "", isBlock: true },
    ],
    [
      { letter: "", input: "", isBlock: true },
      { letter: "a", input: "", isBlock: false },
      { letter: "l", input: "", isBlock: false },
      { letter: "i", input: "", isBlock: false },
      { letter: "f", input: "", isBlock: false },
      { letter: "", input: "", isBlock: true },
      { letter: "", input: "", isBlock: true },
      { letter: "", input: "", isBlock: true },
    ],
    [
      { letter: "", input: "", isBlock: true },
      { letter: "r", input: "", isBlock: false },
      { letter: "", input: "", isBlock: true },
      { letter: "", input: "", isBlock: true },
      { letter: "", input: "", isBlock: true },
      { letter: "", input: "", isBlock: true },
      { letter: "", input: "", isBlock: true },
      { letter: "", input: "", isBlock: true },
    ],
    [
      { letter: "k", input: "", isBlock: false },
      { letter: "u", input: "", isBlock: false },
      { letter: "a", input: "", isBlock: false },
      { letter: "", input: "", isBlock: true },
      { letter: "", input: "", isBlock: true },
      { letter: "", input: "", isBlock: true },
      { letter: "", input: "", isBlock: true },
      { letter: "", input: "", isBlock: true },
    ],
  ]);

  const [solved, setSolved] = useState(false);
  const [activeCell, setActiveCell] = useState<{ r: number; c: number } | null>(
    null
  );

  useEffect(() => {
    const allCorrect = grid.every((row) =>
      row.every(
        (cell) =>
          cell.isBlock ||
          (cell.letter &&
            cell.letter.toUpperCase() === cell.input.toUpperCase())
      )
    );
    if (allCorrect) {
      setSolved(true);
      new Audio("/success.mp3").play();
      setTimeout(() => router.push("/birthday"), 2000);
    }
  }, [grid, router]);

  const handleInput = (r: number, c: number, value: string) => {
    const newGrid = grid.map((row, ri) =>
      row.map((cell, ci) => {
        if (ri === r && ci === c) {
          return {
            ...cell,
            input: value.slice(-1).toUpperCase(),
          };
        }
        return cell;
      })
    );
    setGrid(newGrid);

    const correct =
      grid[r][c].letter?.toUpperCase() === value.slice(-1).toUpperCase();
    if (value) {
      new Audio(correct ? "/correct-6033.mp3" : "/wrong.mp3").play();
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-black px-4 overflow-hidden">
  {/* Responsive Background */}
  <Image
    src="/teacher-vector.jpg"
    alt="Background"
    fill
    priority
    className="object-cover object-center -z-10"
  />

      <audio ref={audioRef} autoPlay loop src="/music-game.mp3" />

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

      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-400 mb-6 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🧩 Isi Teka-Teki Silang Misteri !
      </motion.h1>

      {/* Grid */}
      <div className="grid grid-cols-8 gap-1 sm:gap-1.5 md:gap-2">
        {grid.map((row, r) =>
          row.map((cell, c) =>
            cell.isBlock ? (
              <div
                key={`${r}-${c}`}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-800"
              />
            ) : (
              <input
                key={`${r}-${c}`}
                type="text"
                maxLength={1}
                value={cell.input}
                onFocus={() => setActiveCell({ r, c })}
                onChange={(e) => handleInput(r, c, e.target.value)}
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
                  text-center font-bold uppercase rounded-md 
                  focus:outline-none text-base sm:text-lg md:text-xl
                  ${
                    cell.input && cell.input === cell.letter
                      ? "bg-green-200 text-black"
                      : "bg-white text-black"
                  } ${
                  activeCell?.r === r && activeCell?.c === c
                    ? "ring-2 ring-pink-400"
                    : ""
                }`}
              />
            )
          )
        )}
      </div>

      {/* Petunjuk */}
      <div className="mt-6 w-full max-w-md">
        <h2 className="font-semibold mb-2 text-lg sm:text-xl">Petunjuk Mendatar:</h2>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li><b>1.</b> Bulan apa pertama kali jadian?</li>
          <li><b>2.</b> Orang terganteng di hidup kamu?</li>
          <li><b>3.</b> Tempat untuk registrasi menikah</li>
        </ul>
      </div>

      <div className="mt-6 w-full max-w-md">
        <h2 className="font-semibold mb-2 text-lg sm:text-xl">Petunjuk Menurun:</h2>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li><b>1.</b> Nama Prodi S1 yang kamu ambil?</li>
          <li><b>2.</b> Barang yang belum dipakai disebut...</li>
        </ul>
      </div>

      {/* Overlay selesai */}
      <AnimatePresence>
        {solved && (
          <motion.div
            className="absolute inset-0 bg-black/70 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-300 text-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✨ Selesai! ✨
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
