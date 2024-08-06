"use client";

import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-[#f7f8fa] dark:bg-[#1c1c1e] flex flex-col justify-between items-center px-8 border-b border-slate-400 dark:border-[#545458] md:flex-row md:h-20">
      <h1 className="text-5xl font-light pt-2">Text2Math</h1>
      <div className="flex flex-row text-2xl h-full space-x-4 items-center text-lg">
        <div className="flex h-full items-center hover:border-b-4 hover:border-[#056dfa]">
          <a href="https://github.com/alvarosh15/text2math" target="_blank">
            Github
          </a>
        </div>
        <div className="flex h-full items-center hover:border-b-4 hover:border-[#056dfa]">
          <a href="https://asciimath.org/" target="_blank">
            AsciiMath
          </a>
        </div>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="bg-[#056dfa] dark:bg-[#0a84ff] text-white my-1 px-1 md:px-4 md:py-2 rounded-full"
        >
          Modo oscuro
        </button>
      </div>
    </div>
  );
}
