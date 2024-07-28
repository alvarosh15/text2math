export default function Header() {
  return (
    <div className="bg-[#f7f8fa] flex flex-col justify-between items-center px-8 border-b border-slate-400 md:flex-row md:h-20">
      <h1 className="text-3xl font-bold pt-2">Text2Math</h1>
      <div className="flex flex-row h-full space-x-4 items-center text-lg">
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
        <button className="bg-[#056dfa] text-white my-1 px-1 md:px-4 md:py-2 rounded-full">
          Modo oscuro
        </button>
      </div>
    </div>
  );
}
