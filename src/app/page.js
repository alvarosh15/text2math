"use client";
import { useState, useRef } from "react";
import Editor from "./_components/Editor";
import Preview from "./_components/Preview";
import { downloadPNG, copyToClipboard } from "./_utils/utils";
import Toolbar from "./_components/Toolbar";

export default function Home() {
  const [text, setText] = useState(
    "$`sum_(i=1)^n i^3=((n(n+1))/2)^2`$ $\\frac{2}{3}$ $`1/2`$"
  );
  const previewRef = useRef(null);
  const [bgColor, setBgColor] = useState("#f7f8fa");
  const [textAlign, setTextAlign] = useState("left");
  const [textColor, setTextColor] = useState("black");

  return (
    <div className="flex flex-col h-screen items-center m-4">
      <Toolbar
        onBgColorChange={setBgColor}
        bgColor={bgColor}
        onTextColorChange={setTextColor}
        textColor={textColor}
        onTextAlignChange={setTextAlign}
      />
      <div className="flex flex-col gap-4 p-2 w-full h-2/3 md:flex-row md:w-11/12">
        <Editor setText={setText} text={text} />
        <Preview
          text={text}
          previewRef={previewRef}
          bgColor={bgColor}
          textAlign={textAlign}
          textColor={textColor}
        />
      </div>
      <div className="flex flex-row gap-4 p-2 md:p-6">
        <button
          onClick={() => downloadPNG(previewRef)}
          className="rounded-full bg-[#056dfa] p-6 flex font-bold items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-download text-white"
            viewBox="0 0 16 16"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
          </svg>
        </button>
        <button
          onClick={() => copyToClipboard(previewRef)}
          className="rounded-full bg-[#056dfa] p-6 flex font-bold items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-clipboard text-white"
            viewBox="0 0 16 16"
          >
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
