import React from 'react';
import { categoriasLista } from '../../datos/productos';

/**
 * Componente FiltrosCatalogo
 * Píldoras de selección de categorías para filtrar el catálogo de lencería.
 */
export function FiltrosCatalogo({ categoriaActiva, setCategoriaActiva, totalProductosMostrados }) {
  return (
    <div id="seccion-categorias" className="w-full space-y-4 my-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-200/90 font-sans-clean flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>Categorías de Colección</span>
        </h3>
        <span className="text-xs text-stone-400">
          Mostrando <strong className="text-amber-300 font-semibold">{totalProductosMostrados}</strong> prendas
        </span>
      </div>

      {/* Selector Horizontal de Píldoras de Categoría */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-stone-800">
        {categoriasLista.map((cat) => {
          const esActiva = categoriaActiva === cat;
          return (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 whitespace-nowrap border shrink-0 ${
                esActiva
                  ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-stone-950 border-amber-300 font-bold shadow-lg shadow-amber-950/40 scale-105'
                  : 'bg-stone-900/80 text-stone-300 border-stone-800 hover:border-amber-400/50 hover:text-amber-200 hover:bg-stone-800'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FiltrosCatalogo;
