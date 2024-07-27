export default function Editor({ setText, text }) {
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <textarea
      value={text}
      onChange={handleChange}
      className="w-1/2 h-full resize-none p-4"
    />
  );
}
