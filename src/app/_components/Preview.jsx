import { MathJax } from "better-react-mathjax";
import { MathJaxContext } from "better-react-mathjax";

export default function Preview({ text }) {
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
      <MathJax dynamic>{text}</MathJax>
    </MathJaxContext>
  );
}
