import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client
import './index.css';
import App from './App';

// Selecciona el contenedor root
const container = document.getElementById('root');

// Crea una raíz para el contenedor
const root = createRoot(container);

// Renderiza la aplicación dentro de la raíz
root.render(<App />);