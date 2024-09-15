import React, { useState } from 'react';
import '../style/FoodSelection.css';

const FoodSelection = () => {
  const granosOpciones = ['Lentejas', 'Zaragoza'];
  const arrozOpciones = ['Arroz Blanco', 'Arroz de Fideo', 'Arroz de Zanahoria'];
  const acompanamientoOpciones = ['Patacon', 'Papas Fritas', 'Tajadas', 'Guineo', 'Queso'];
  const proteinaOpciones = ['Pollo', 'Cerdo', 'Pescado', 'Huevos', 'Salchicha', 'Carne Molida', 'Alitas', 'Pechuga', 'Carne'];

  const [granos, setGranos] = useState('');
  const [tipoArroz, setTipoArroz] = useState('');
  const [acompanamiento, setAcompanamiento] = useState('');
  const [proteina, setProteina] = useState('');

  const seleccionarAleatorio = (opciones) => {
    return opciones[Math.floor(Math.random() * opciones.length)];
  };

  const elegirComidaAleatoria = () => {
    setGranos(seleccionarAleatorio(granosOpciones));
    setTipoArroz(seleccionarAleatorio(arrozOpciones));
    setAcompanamiento(seleccionarAleatorio(acompanamientoOpciones));
    setProteina(seleccionarAleatorio(proteinaOpciones));
  };

  return (
    <div className="p-8 bg-gray-100 flex flex-col justify-center rounded-xl border-2 border-black" style={{
      boxShadow: '1px 1px 10px black'
    }}>
      <h2 className="text-2xl font-bold mb-6 text-gray-700">¿Qué quieres comer hoy?</h2>

      <div className="button mb-6 flex justify-center">
        <button
          onClick={elegirComidaAleatoria}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow"
        >
          <span className='font-bold text-lg' style={{
            textShadow: '1px 1px 10px'
          }}>Elegir comida aleatoria</span>
        </button>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h3 className="text-xl font-bold mb-3 text-gray-700 text-center">Suerte del dia:</h3>
        <p className="text-gray-600">Granos: {granos || "Ruedala"}</p>
        <p className="text-gray-600">Tipo de Arroz: {tipoArroz || "Ruedala"}</p>
        <p className="text-gray-600">Acompañamiento: {acompanamiento || "Ruedala"}</p>
        <p className="text-gray-600">Proteína: {proteina || "Ruedala"}</p>
      </div>
    </div>
  );
};

export default FoodSelection;
