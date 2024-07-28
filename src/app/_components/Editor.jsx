export default function Editor({ setText, text }) {
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <textarea
      value={text}
      onChange={handleChange}
      className="w-full h-full resize-none p-4 bg-[#f7f8fa] outline-none border border-slate-400 text-3xl md:w-1/2"
    />
  );
}
