export default function Editor({ setText, text }) {
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <textarea value={text} onChange={handleChange} className="w-full h-1/2" />
  );
}
