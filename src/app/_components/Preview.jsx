"use client";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeAsciiMath from "rehype-asciimath";
import "katex/dist/katex.min.css";

export default function Preview({
  text,
  previewRef,
  bgColor,
  textAlign,
  textColor,
}) {
  return (
    <div
      className={`w-full h-full border border-slate-400 dark:border-[#545458] text-3xl overflow-auto resize-none md:w-1/2`}
      style={{ backgroundColor: bgColor }}
    >
      <div
        ref={previewRef}
        className={`p-4`}
        style={{
          backgroundColor: bgColor,
          textAlign: textAlign,
          color: textColor,
        }}
      >
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeAsciiMath, rehypeKatex]}
        >
          {text}
        </ReactMarkdown>
      </div>
    </div>
  );
}
