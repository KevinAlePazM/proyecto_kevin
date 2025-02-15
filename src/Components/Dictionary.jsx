import { useState } from "react";
import { useSelector } from "react-redux";
import DeleteWordModal from "./DeleteWordModal";

const Dictionary = () => {
  const dictionary = useSelector((state) => state.dictionary.dictionary);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Diccionario</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Español</th>
            <th className="border px-4 py-2">Inglés</th>
            <th className="border px-4 py-2">Portugués</th>
          </tr>
        </thead>
        <tbody>
          {dictionary.map((word, index) => (
            <tr key={index} className="border">
              <td className="border px-4 py-2">{word.es}</td>
              <td className="border px-4 py-2">{word.en}</td>
              <td className="border px-4 py-2">{word.pt}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Eliminar Palabra
      </button>

      <DeleteWordModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Dictionary;

