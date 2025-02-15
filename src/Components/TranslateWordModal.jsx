import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/TranslateWordModal.css"; 

const TranslateWordModal = ({ isOpen, onClose }) => {
  const [word, setWord] = useState(""); 
  const [selectedLanguage, setSelectedLanguage] = useState("spanish"); 
  const [translation, setTranslatedWord] = useState("");

  const words = useSelector((state) => state.dictionary.words);

  const handleTranslate = () => {
    const wordEntry = words.find(
      (entry) =>
        entry.spanish.toLowerCase() === word.toLowerCase() ||
        entry.english.toLowerCase() === word.toLowerCase() ||
        entry.portuguese.toLowerCase() === word.toLowerCase()
    );

    if (wordEntry) {
      switch (selectedLanguage) {
        case "spanish":
          setTranslatedWord(wordEntry.spanish);
          break;
        case "english":
          setTranslatedWord(wordEntry.english);
          break;
        case "portuguese":
          setTranslatedWord(wordEntry.portuguese);
          break;
        default:
          setTranslatedWord("");
      }
    } else {
      setTranslatedWord("Palabra no encontrada");
    }
  };

  
  if (!isOpen) return null; 

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-header">TRADUCTOR USIP</h2>
        <p className="modal-instructions">Que palabra desea traducir en el diccionario</p>
        <p>Agregue su palabra y despues el idioma de Traducción</p>

        <div className="modal-body">
          <input
            type="text"
            placeholder="Buscar palabra"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className="modal-input"
          />

        <div className="language-selector">
          <label>Selecciona un idioma:</label>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="spanish">Español</option>
            <option value="english">Inglés</option>
            <option value="portuguese">Portugués</option>
          </select>
        </div>

          <textarea
            className="modal-textarea"
            rows="3"
            readOnly
            value={translation}
            placeholder="Traducción aparecerá aquí..."
          ></textarea>
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="modal-button modal-button-close">
            Cerrar
          </button>
          <button onClick={handleTranslate} className="modal-button modal-button-translate">
            Traducir
          </button>
        </div>
      </div>
    </div>
  );
};

export default TranslateWordModal;
