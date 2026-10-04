import React, { useState } from 'react';
import { formatearPrecio } from '../../datos/productos';

/**
 * Componente ModalDetalleProducto
 * Modal elegante para inspeccionar prenda, seleccionar cantidad y agregar al carrito.
 */
export function ModalDetalleProducto({ producto, onClose, onAgregarAlCarrito }) {
  const [cantidad, setCantidad] = useState(1);

  if (!producto) return null;

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const incrementar = () => {
    setCantidad(cantidad + 1);
  };

  const handleAgregar = () => {
    onAgregarAlCarrito(producto, cantidad);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/80 backdrop-blur-md animate-fade-in-soft">
      <div className="relative w-full max-w-3xl rounded-3xl bg-stone-900 border border-amber-400/30 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Botón de Cierre Modal */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-800/80 text-stone-400 hover:text-stone-100 hover:bg-stone-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Imagen de la Prenda */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-950 border border-stone-800">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-full object-cover object-center"
            />
            <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest bg-stone-950/80 text-amber-300 border border-amber-400/30">
              {producto.categoria}
            </span>
          </div>

          {/* Detalles del Producto */}
          <div className="flex flex-col space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-rose-300">
                Lencería Exclusiva ATHALIA
              </span>
              <h2 className="font-serif-editorial text-3xl font-bold text-stone-100 mt-1">
                {producto.nombre}
              </h2>
              <div className="mt-3 text-2xl font-serif-editorial font-bold text-amber-300">
                {formatearPrecio(producto.precio)}
              </div>
            </div>

            <p className="text-stone-300 text-sm leading-relaxed font-light">
              {producto.descripcion}
            </p>

            <div className="pt-4 border-t border-stone-800 space-y-4">
              {/* Selector de Cantidad (Mínimo 1) */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-stone-300">
                  Cantidad
                </span>
                <div className="flex items-center space-x-3 bg-stone-950 border border-stone-700 rounded-xl p-1">
                  <button
                    type="button"
                    onClick={decrementar}
                    disabled={cantidad <= 1}
                    className="w-8 h-8 rounded-lg bg-stone-800 text-stone-200 hover:bg-stone-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center font-bold text-lg transition-colors"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-sm font-semibold text-stone-100">
                    {cantidad}
                  </span>
                  <button
                    type="button"
                    onClick={incrementar}
                    className="w-8 h-8 rounded-lg bg-stone-800 text-stone-200 hover:bg-stone-700 flex items-center justify-center font-bold text-lg transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Cálculo Subtotal del Producto Seleccionado */}
              <div className="flex justify-between items-center text-xs text-stone-400 py-1">
                <span>Subtotal prenda:</span>
                <span className="font-serif-editorial text-stone-200 font-bold text-sm">
                  {formatearPrecio(producto.precio * cantidad)}
                </span>
              </div>

              {/* Botón de Acción Principal */}
              <button
                onClick={handleAgregar}
                className="w-full py-4 px-6 rounded-2xl font-semibold text-xs tracking-widest uppercase text-stone-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 shadow-xl shadow-amber-950/40 transition-all duration-300 flex items-center justify-center space-x-2 border border-amber-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>Agregar al Carrito</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDetalleProducto;
