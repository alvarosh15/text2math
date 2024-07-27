export default function Header() {
  return (
    <div className="bg-white flex justify-between items-center p-4 border-b border-gray-300">
      <h1 className="text-xl font-bold text-red-500">Text2Math</h1>
      <div className="flex space-x-4">
        <a href="#" className="text-blue-500">
          Github
        </a>
        <a href="#" className="text-blue-500">
          Sintaxis
        </a>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Modo oscuro
        </button>
      </div>
    </div>
  );
}
