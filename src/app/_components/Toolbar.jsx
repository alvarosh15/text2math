export default function Toolbar({
  onBgColorChange,
  bgColor,
  onTextColorChange,
  textColor,
  onTextAlignChange,
}) {
  return (
    <div className="flex px-8 py-2 items-center gap-4 bg-[#056dfa] dark:bg-[#0a84ff] rounded-full">
      <input
        type="color"
        value={bgColor}
        onChange={(e) => onBgColorChange(e.target.value)}
        className="border border-gray-400 rounded"
      />
      <input
        type="color"
        value={textColor}
        onChange={(e) => onTextColorChange(e.target.value)}
        className="border border-gray-400 rounded"
      />
      <div className="flex space-x-2">
        <button onClick={() => onTextAlignChange("left")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="white"
            className="bi bi-text-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
        <button onClick={() => onTextAlignChange("center")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="white"
            className="bi bi-text-center"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
        <button onClick={() => onTextAlignChange("justify")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="white"
            className="bi bi-justify"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
        <button onClick={() => onTextAlignChange("right")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="white"
            className="bi bi-text-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
