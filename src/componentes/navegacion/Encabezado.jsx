import React, { useState } from 'react';
import { marca } from '../../configuracion/marca';

/**
 * Componente Encabezado de la plataforma ATHALIA
 * Incluye logo oficial, menú de navegación, usuario simulado, buscador y botón de carrito.
 */
export function Encabezado({
  usuario,
  totalItemsCarrito,
  onAbrirCarrito,
  onCerrarSesion,
  busqueda,
  setBusqueda,
  categoriaActiva,
  setCategoriaActiva
}) {
  const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-stone-950/90 backdrop-blur-xl border-b border-amber-400/20 shadow-2xl transition-all">
      {/* Barra de Notificación Superior Boutique */}
      <div className="bg-gradient-to-r from-stone-900 via-amber-950/60 to-stone-900 py-1.5 px-4 border-b border-amber-400/10 text-center">
        <p className="text-[11px] font-sans-clean font-medium tracking-widest text-amber-200/90 uppercase flex items-center justify-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>Portal Oficial de Venta Comercial — {marca.slogan}</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Oficial de Marca */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => { setCategoriaActiva('Todos'); setBusqueda(''); }}
              className="flex items-center focus:outline-none group"
            >
              <img
                src={marca.logo.src}
                alt={marca.nombre}
                className="h-12 w-auto object-contain filter drop-shadow-md group-hover:scale-105 transition-transform"
              />
            </button>
          </div>

          {/* Menú de Navegación Desktop */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold uppercase tracking-widest text-stone-300">
            <button
              onClick={() => { setCategoriaActiva('Todos'); setBusqueda(''); }}
              className={`hover:text-amber-300 transition-colors ${categoriaActiva === 'Todos' && !busqueda ? 'text-amber-300 border-b border-amber-400 pb-0.5' : ''}`}
            >
              Inicio
            </button>
            <button
              onClick={() => { setCategoriaActiva('Todos'); }}
              className={`hover:text-amber-300 transition-colors ${categoriaActiva !== 'Todos' ? 'text-amber-300 border-b border-amber-400 pb-0.5' : ''}`}
            >
              Catálogo
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('seccion-categorias');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-amber-300 transition-colors"
            >
              Categorías
            </button>
            <button
              onClick={onAbrirCarrito}
              className="hover:text-amber-300 transition-colors flex items-center space-x-1"
            >
              <span>Carrito</span>
              {totalItemsCarrito > 0 && (
                <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] bg-amber-400 text-stone-950 font-bold">
                  {totalItemsCarrito}
                </span>
              )}
            </button>
          </nav>

          {/* Acciones del Encabezado (Buscador rápido, Carrito, Usuario) */}
          <div className="flex items-center space-x-4">
            {/* Buscador Rápido de Escritorio */}
            <div className="hidden lg:relative lg:block w-52">
              <input
                type="text"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar prenda..."
                className="w-full pl-9 pr-3 py-1.5 bg-stone-900/80 border border-stone-700/60 rounded-full text-xs text-stone-100 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all"
              />
              <svg className="w-4 h-4 text-stone-400 absolute left-3 top-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Botón Carrito con Contador Badge */}
            <button
              onClick={onAbrirCarrito}
              className="relative p-2.5 rounded-full bg-stone-900 border border-amber-400/30 text-amber-300 hover:bg-stone-800 hover:border-amber-400/60 transition-all duration-300 focus:outline-none"
              aria-label="Abrir Carrito"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalItemsCarrito > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center min-w-[20px] h-[20px] px-1 bg-gradient-to-r from-amber-400 to-amber-300 text-stone-950 font-bold text-[10px] rounded-full shadow-lg border border-stone-950 animate-bounce">
                  {totalItemsCarrito}
                </span>
              )}
            </button>

            {/* Badge Usuario y Botón Cerrar Sesión */}
            <div className="hidden sm:flex items-center space-x-3 bg-stone-900/60 border border-stone-800 rounded-full py-1 px-3">
              <div className="w-6 h-6 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 text-xs font-serif-editorial">
                {usuario?.charAt(0)?.toUpperCase() || 'A'}
              </div>
              <span className="text-xs text-stone-300 max-w-[120px] truncate font-medium">
                {usuario || 'Asesora'}
              </span>
              <button
                onClick={onCerrarSesion}
                title="Cerrar Sesión"
                className="text-stone-400 hover:text-rose-400 transition-colors p-1"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>

            {/* Hamburguesa para Menú Móvil */}
            <button
              onClick={() => setMenuMovilAbierto(!menuMovilAbierto)}
              className="md:hidden p-2 rounded-lg text-stone-300 hover:text-amber-300 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuMovilAbierto ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {menuMovilAbierto && (
        <div className="md:hidden bg-stone-900 border-b border-amber-400/20 px-4 pt-2 pb-6 space-y-4 animate-fade-in-soft">
          {/* Buscador Móvil */}
          <div className="relative mt-2">
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar prenda o categoría..."
              className="w-full pl-9 pr-3 py-2 bg-stone-950 border border-stone-700 rounded-xl text-xs text-stone-100 placeholder-stone-400"
            />
            <svg className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex flex-col space-y-3 text-xs uppercase tracking-wider font-semibold text-stone-300">
            <button
              onClick={() => { setCategoriaActiva('Todos'); setBusqueda(''); setMenuMovilAbierto(false); }}
              className="text-left py-2 border-b border-stone-800 hover:text-amber-300"
            >
              Catálogo Completo
            </button>
            <button
              onClick={() => { onAbrirCarrito(); setMenuMovilAbierto(false); }}
              className="text-left py-2 border-b border-stone-800 hover:text-amber-300 flex items-center justify-between"
            >
              <span>Ver Carrito</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-400 text-stone-950 font-bold text-[10px]">
                {totalItemsCarrito} unidades
              </span>
            </button>
            <div className="flex items-center justify-between pt-2">
              <span className="text-stone-400 text-[11px] truncate">Sesión: {usuario}</span>
              <button
                onClick={onCerrarSesion}
                className="text-rose-400 hover:text-rose-300 text-[11px] underline"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Encabezado;
