export default function Editor({ setText, text }) {
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <textarea
      value={text}
      onChange={handleChange}
      className="w-full h-full resize-none p-4 bg-[#f7f8fa] dark:bg-[#1c1c1e] outline-none border border-slate-400 dark:border-[#545458] text-3xl md:w-1/2"
    />
  );
}
