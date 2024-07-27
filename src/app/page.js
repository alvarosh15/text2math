"use client";
import { useState, useRef } from "react";
import Editor from "./_components/Editor";
import Preview from "./_components/Preview";
import html2canvas from "html2canvas";

export default function Home() {
  const [text, setText] = useState("`frac(10)(4x) approx 2^(12)`");
  const previewRef = useRef(null);

  const downloadPNG = async () => {
    const canvas = await html2canvas(previewRef.current);
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "math_preview.png";
    link.click();
  };

  const copyToClipboard = async () => {
    const canvas = await html2canvas(previewRef.current);
    canvas.toBlob((blob) => {
      const item = new ClipboardItem({ "image/png": blob });
      navigator.clipboard.write([item]);
    });
  };

  return (
    <div className="flex flex-col h-screen items-center bg-red-50">
      <div className="flex flex-row gap-4 p-4 w-11/12 h-2/3 bg-red-200">
        <Editor setText={setText} text={text} />
        <Preview text={text} previewRef={previewRef} />
      </div>
      <div className="flex flex-row gap-4 p-4">
        <button
          onClick={downloadPNG}
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
          onClick={copyToClipboard}
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
