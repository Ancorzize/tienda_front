import React from 'react';

/**
 * Componente Buscador
 * Permite filtrar productos por nombre o categoría en tiempo real.
 */
export function Buscador({ busqueda, setBusqueda }) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative group">
        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar por nombre o categoría..."
          className="w-full pl-11 pr-10 py-3 bg-stone-900/90 border border-amber-400/30 rounded-2xl text-sm text-stone-100 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 shadow-lg transition-all duration-300"
        />
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-amber-300/80 group-focus-within:text-amber-300">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        {busqueda && (
          <button
            onClick={() => setBusqueda('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-stone-400 hover:text-amber-300 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default Buscador;
