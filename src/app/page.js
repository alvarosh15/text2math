"use client";
import { useState } from "react";
import Editor from "./_components/Editor";
import Preview from "./_components/Preview";

export default function Home() {
  const [text, setText] = useState("`frac(10)(4x) approx 2^(12)`");

  return (
    <div className="flex h-screen bg-red-50">
      <div className="flex flex-row bg-red-200">
        <Editor setText={setText} text={text} />
        <Preview text={text} />
      </div>
    </div>
  );
}
