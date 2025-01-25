// src/Screens/LandingPage.jsx
import React from "react";
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className="landing-page bg-gray-100 h-screen flex flex-col items-center justify-center text-center">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Bienvenido a React App</h1>
        <p className="text-gray-600 mb-6">
          Explora nuestra aplicación para descubrir todas sus funcionalidades.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/login">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
              Iniciar Sesión
            </button>
          </Link>
          <Link to="/about">
            <button className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg shadow hover:bg-gray-400">
              Más Información
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
