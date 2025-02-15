// src/screens/DictionaryScreen.jsx

import "../styles/DictionaryScreen.css"; // Importar los estilos
import AddWordModal from "../Components/AddWordModal";
import DeleteWordModal from "../Components/DeleteWordModal "; // Importa el nuevo modal
import TranslateWordModal from "../Components/TranslateWordModal"; 
import React, { useState } from "react";
import { useSelector } from "react-redux";

const DictionaryScreen = () => {
  const [isAddWordOpen, setIsAddWordOpen] = useState(false);
  const [isDeleteWordOpen, setIsDeleteWordOpen] = useState(false); 
  const [isTranslateOpen, setIsTranslateOpen] = useState(false);
  
  const words = useSelector((state) => state.dictionary.words);
  console.log(words); 

  return (
    <div className="dictionary-container">
      <h1>DICTIONARY USIP</h1>
      <p>Este modulo (diccionario) corresponde al recuperatorio del</p>
      <p>modulo-7 ReactS. URL:</p>

      <AddWordModal isOpen={isAddWordOpen} onClose={() => setIsAddWordOpen(false)} />
      <DeleteWordModal isOpen={isDeleteWordOpen} onClose={() => setIsDeleteWordOpen(false)} /> 
      <TranslateWordModal isOpen={isTranslateOpen} onClose={() => setIsTranslateOpen(false)} /> 

      <div>
        <h2>Palabras Agregadas</h2>
        <ul>
          {words.map((word, index) => (
            <li key={index}>
              {word.spanish} - {word.english} - {word.portuguese}
            </li>
          ))}
        </ul>
      </div>

      <div className="button-container">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => setIsAddWordOpen(true)}
      >
        Agregar Palabra
      </button>
      <button
          className="btn delete-btn bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={() => setIsDeleteWordOpen(true)} 
        >
          Eliminar Palabra
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={() => setIsTranslateOpen(true)}>
          Traducir
        </button> 
      </div>
    </div>
  );
};

export default DictionaryScreen;

