import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteWord } from "../Dictionary/dictionarySlice"; 
import "../styles/DeleteWordModal.css"; 

const DeleteWordModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [word, setWord] = useState(""); 
  const [selectedLanguage, setSelectedLanguage] = useState("spanish"); 

  const words = useSelector((state) => state.dictionary.words); 
  
  const handleDelete = () => {
    const wordEntry = words.find(
      (entry) =>
        entry.spanish.toLowerCase() === word.toLowerCase() ||
        entry.english.toLowerCase() === word.toLowerCase() ||
        entry.portuguese.toLowerCase() === word.toLowerCase()
    );

    if (wordEntry) {
      dispatch(deleteWord(wordEntry)); 
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-header">TRADUCTOR USIP</h2>
        <p className="modal-instructions">
          Que palabra de desea eliminar de diccionario
        </p>
        <p>Puedes escribir su palabra en ESPANHOL, INGLES, o PORTUGUES</p>

        <div className="modal-body">
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className="modal-input"
            placeholder="Buscar palabra"
          />

          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="spanish">Español</option>
            <option value="english">Inglés</option>
            <option value="portuguese">Portugués</option>
          </select>
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="modal-button modal-button-close">
            Cerrar
          </button>
          <button onClick={handleDelete} className="modal-button modal-button-delete">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteWordModal;
