import React from 'react';
import { formatearPrecio } from '../../datos/productos';

/**
 * Componente TarjetaProducto
 * Representa cada prenda dentro del catálogo de lencería.
 */
export function TarjetaProducto({ producto, onSeleccionarProducto, onAgregarAlCarrito }) {
  const { nombre, categoria, precio, imagen, destacado } = producto;

  return (
    <div className="group relative rounded-3xl bg-stone-900/90 border border-stone-800/90 hover:border-amber-400/50 shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col overflow-hidden">
      {/* Insignia de Destacado / Disponibilidad */}
      <div className="absolute top-3 left-3 z-10 flex flex-col space-y-1">
        {destacado && (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-amber-400 text-stone-950 shadow-md">
            Exclusivo
          </span>
        )}
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-semibold tracking-wider uppercase bg-stone-950/80 text-rose-300 border border-rose-400/30 backdrop-blur-md">
          {categoria}
        </span>
      </div>

      {/* Contenedor de Imagen de la Prenda */}
      <div
        onClick={() => onSeleccionarProducto(producto)}
        className="relative w-full aspect-[3/4] overflow-hidden cursor-pointer bg-stone-950"
      >
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-full object-cover object-center filter brightness-[0.95] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Botón de vista rápida al pasar el cursor */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-stone-950/40 backdrop-blur-[2px]">
          <span className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-stone-900 text-amber-300 border border-amber-400/40 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
            Ver detalle
          </span>
        </div>
      </div>

      {/* Información del Producto */}
      <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
        <div>
          <h4
            onClick={() => onSeleccionarProducto(producto)}
            className="font-serif-editorial text-xl font-bold text-stone-100 hover:text-amber-200 cursor-pointer transition-colors line-clamp-1"
          >
            {nombre}
          </h4>
          <p className="text-xs text-stone-400 mt-1 line-clamp-2 font-light">
            {producto.descripcion}
          </p>
        </div>

        {/* Precio y Botón Agregar al Carrito */}
        <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-stone-400 uppercase tracking-widest">Precio Atelier</span>
            <span className="font-serif-editorial text-lg font-bold text-amber-300">
              {formatearPrecio(precio)}
            </span>
          </div>

          <button
            onClick={() => onAgregarAlCarrito(producto, 1)}
            className="p-3 rounded-2xl bg-stone-800 hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-300 text-amber-300 hover:text-stone-950 border border-amber-400/30 hover:border-amber-300 shadow-md transition-all duration-300 active:scale-95 group/btn"
            title="Agregar al Carrito"
          >
            <svg className="w-5 h-5 transition-transform group-hover/btn:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TarjetaProducto;
