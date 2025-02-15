import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWord } from "../redux/dictionarySlice";

const AddWord = () => {
  const [spanish, setSpanish] = useState("");
  const [english, setEnglish] = useState("");
  const [portuguese, setPortuguese] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!spanish || !english || !portuguese) {
      alert("Por favor, completa los tres campos.");
      return;
    }

    dispatch(addWord({ es: spanish, en: english, pt: portuguese }));

    setSpanish("");
    setEnglish("");
    setPortuguese("");
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <h2 className="text-lg font-bold mb-2">Agregar Nueva Palabra</h2>
      <input
        type="text"
        value={spanish}
        onChange={(e) => setSpanish(e.target.value)}
        className="w-full border p-2 rounded mb-2"
        placeholder="Español (Ej: Lunes)"
      />
      <input
        type="text"
        value={english}
        onChange={(e) => setEnglish(e.target.value)}
        className="w-full border p-2 rounded mb-2"
        placeholder="Inglés (Ej: Monday)"
      />
      <input
        type="text"
        value={portuguese}
        onChange={(e) => setPortuguese(e.target.value)}
        className="w-full border p-2 rounded mb-2"
        placeholder="Portugués (Ej: Segunda-feira)"
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-green-500 text-white rounded mt-2 w-full"
      >
        Agregar Palabra
      </button>
    </div>
  );
};

export default AddWord;
