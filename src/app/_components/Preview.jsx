import { MathJax } from "better-react-mathjax";
import { MathJaxContext } from "better-react-mathjax";

export default function Preview({ text, previewRef }) {
  const config = {
    loader: { load: ["input/asciimath"] },
    asciimath: {
      displaystyle: true,
      delimiters: [
        ["$", "$"],
        ["`", "`"],
      ],
    },
  };

  return (
    <MathJaxContext config={config}>
      <div className="w-1/2 h-full bg-blue-100 p-4" ref={previewRef}>
        <MathJax>{text}</MathJax>
      </div>
    </MathJaxContext>
  );
}
