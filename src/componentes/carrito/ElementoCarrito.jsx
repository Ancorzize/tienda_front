import React from 'react';
import { formatearPrecio } from '../../datos/productos';

/**
 * Componente ElementoCarrito
 * Renderiza una línea de producto dentro del panel lateral del carrito.
 */
export function ElementoCarrito({ item, onActualizarCantidad, onEliminar }) {
  const { producto, cantidad } = item;

  return (
    <div className="flex items-center space-x-4 p-3.5 rounded-2xl bg-stone-950/70 border border-stone-800/80 hover:border-amber-400/30 transition-all">
      {/* Miniatura de Imagen */}
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-16 h-20 object-cover rounded-xl border border-stone-800 shrink-0 bg-stone-900"
      />

      {/* Info y Controles */}
      <div className="flex-1 min-w-0 space-y-1">
        <div className="flex items-start justify-between">
          <h5 className="font-serif-editorial text-sm font-semibold text-stone-100 truncate pr-2">
            {producto.nombre}
          </h5>
          <button
            onClick={() => onEliminar(producto.id)}
            className="text-stone-500 hover:text-rose-400 p-1 transition-colors"
            title="Eliminar prenda"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>

        <p className="text-[11px] text-stone-400 font-light">
          Precio unitario: <span className="text-amber-200">{formatearPrecio(producto.precio)}</span>
        </p>

        {/* Selector de Cantidad + Subtotal */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center space-x-2 bg-stone-900 border border-stone-700 rounded-lg p-0.5">
            <button
              onClick={() => onActualizarCantidad(producto.id, cantidad - 1)}
              className="w-6 h-6 rounded bg-stone-800 text-stone-300 hover:bg-stone-700 flex items-center justify-center text-xs font-bold transition-colors"
            >
              -
            </button>
            <span className="w-6 text-center text-xs font-semibold text-stone-100">
              {cantidad}
            </span>
            <button
              onClick={() => onActualizarCantidad(producto.id, cantidad + 1)}
              className="w-6 h-6 rounded bg-stone-800 text-stone-300 hover:bg-stone-700 flex items-center justify-center text-xs font-bold transition-colors"
            >
              +
            </button>
          </div>

          <span className="font-serif-editorial text-sm font-bold text-amber-300">
            {formatearPrecio(producto.precio * cantidad)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ElementoCarrito;
