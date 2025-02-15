import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWord } from "../Dictionary/dictionarySlice"; 
import "../styles/AddWordModal.css"; 

const AddWordModal = ({ isOpen, onClose }) => {
  const [word, setWord] = useState({
    spanish: "",
    english: "",
    portuguese: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setWord({ ...word, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (word.spanish && word.english && word.portuguese) {
      dispatch(addWord(word));
      setWord({ spanish: "", english: "", portuguese: "" });
      onClose(); 
    }
  };

  if (!isOpen) return null; 

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-header">TRADUCTOR USIP</h2>
        <p className="modal-instructions">Ingresa la palabra en los tres idiomas:</p>

        <div className="modal-body">
          <input
            type="text"
            name="spanish"
            value={word.spanish}
            onChange={handleChange}
            className="modal-input"
            placeholder="Español"
          />
          <input
            type="text"
            name="english"
            value={word.english}
            onChange={handleChange}
            className="modal-input"
            placeholder="Inglés"
          />
          <input
            type="text"
            name="portuguese"
            value={word.portuguese}
            onChange={handleChange}
            className="modal-input"
            placeholder="Portugués"
          />
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="modal-button modal-button-close">
            Cerrar
          </button>
          <button
            onClick={handleSubmit}
            className="modal-button modal-button-add"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWordModal;
