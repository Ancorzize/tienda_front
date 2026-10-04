import React, { useState } from 'react';
import { productos } from '../../datos/productos';
import { Encabezado } from '../../componentes/navegacion/Encabezado';
import { Buscador } from '../../componentes/catalogo/Buscador';
import { FiltrosCatalogo } from '../../componentes/catalogo/FiltrosCatalogo';
import { TarjetaProducto } from '../../componentes/catalogo/TarjetaProducto';
import { ModalDetalleProducto } from '../../componentes/catalogo/ModalDetalleProducto';
import { PanelCarrito } from '../../componentes/carrito/PanelCarrito';
import { marca } from '../../configuracion/marca';

const ANIO_ACTUAL = new Date().getFullYear();

/**
 * Pantalla principal del Catálogo de Lencería ATHALIA
 */
export function Catalogo({ usuario, onCerrarSesion }) {
  // Estado local para búsqueda, filtro de categoría y modales
  const [busqueda, setBusqueda] = useState('');
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  // Estado local para el carrito de compras
  const [itemsCarrito, setItemsCarrito] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  // Filtrado inmediato por categoría y búsqueda por texto
  const productosFiltrados = productos.filter((prod) => {
    const coincideCategoria =
      categoriaActiva === 'Todos' || prod.categoria === categoriaActiva;

    const coincideBusqueda =
      prod.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      prod.categoria.toLowerCase().includes(busqueda.toLowerCase()) ||
      prod.descripcion.toLowerCase().includes(busqueda.toLowerCase());

    return coincideCategoria && coincideBusqueda;
  });

  // Total acumulado de unidades en el carrito
  const totalItemsCarrito = itemsCarrito.reduce(
    (total, item) => total + item.cantidad,
    0
  );

  // REGLA 16: Si ya existe el producto en el carrito, incrementar cantidad existente
  const handleAgregarAlCarrito = (producto, cantidadAgregar = 1) => {
    setItemsCarrito((prevItems) => {
      const existeIndex = prevItems.findIndex(
        (item) => item.producto.id === producto.id
      );

      if (existeIndex >= 0) {
        const nuevosItems = [...prevItems];
        nuevosItems[existeIndex] = {
          ...nuevosItems[existeIndex],
          cantidad: nuevosItems[existeIndex].cantidad + cantidadAgregar
        };
        return nuevosItems;
      } else {
        return [...prevItems, { producto, cantidad: cantidadAgregar }];
      }
    });

    // Abrir panel lateral del carrito tras agregar
    setCarritoAbierto(true);
  };

  // Actualizar cantidad de un item o eliminar si es <= 0
  const handleActualizarCantidad = (productoId, nuevaCantidad) => {
    if (nuevaCantidad <= 0) {
      handleEliminarItem(productoId);
      return;
    }

    setItemsCarrito((prevItems) =>
      prevItems.map((item) =>
        item.producto.id === productoId
          ? { ...item, cantidad: nuevaCantidad }
          : item
      )
    );
  };

  // Eliminar producto del carrito
  const handleEliminarItem = (productoId) => {
    setItemsCarrito((prevItems) =>
      prevItems.filter((item) => item.producto.id !== productoId)
    );
  };

  // Vaciar carrito
  const handleVaciarCarrito = () => {
    setItemsCarrito([]);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans-clean flex flex-col selection:bg-amber-500/20 selection:text-amber-200">
      {/* Encabezado Superior */}
      <Encabezado
        usuario={usuario}
        totalItemsCarrito={totalItemsCarrito}
        onAbrirCarrito={() => setCarritoAbierto(true)}
        onCerrarSesion={onCerrarSesion}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        categoriaActiva={categoriaActiva}
        setCategoriaActiva={setCategoriaActiva}
      />

      {/* Hero Banner Editorial de Catálogo */}
      <section className="relative bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950 py-12 px-4 sm:px-6 lg:px-8 border-b border-amber-400/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-2xl">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-amber-400/10 text-amber-300 border border-amber-400/30">
              {marca.coleccion}
            </span>
            <h1 className="font-serif-editorial text-4xl sm:text-5xl font-bold tracking-tight text-stone-100">
              Colección Boutique de Lencería
            </h1>
            <p className="text-stone-300 text-sm font-light leading-relaxed">
              Explore nuestras prendas exclusivas elaboradas con encajes finos, sedas y acabados de alta costura diseñados para realzar la esencia.
            </p>
          </div>

          {/* Buscador Destacado */}
          <div className="w-full md:w-auto shrink-0">
            <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />
          </div>
        </div>
      </section>

      {/* Contenido Principal del Catálogo */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Filtros de Categoría */}
        <FiltrosCatalogo
          categoriaActiva={categoriaActiva}
          setCategoriaActiva={setCategoriaActiva}
          totalProductosMostrados={productosFiltrados.length}
        />

        {/* Grilla de Productos */}
        {productosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productosFiltrados.map((producto) => (
              <TarjetaProducto
                key={producto.id}
                producto={producto}
                onSeleccionarProducto={(p) => setProductoSeleccionado(p)}
                onAgregarAlCarrito={handleAgregarAlCarrito}
              />
            ))}
          </div>
        ) : (
          /* Estado Vacío de Búsqueda */
          <div className="py-20 text-center space-y-4 rounded-3xl bg-stone-900/40 border border-stone-800 p-8">
            <div className="w-16 h-16 rounded-full bg-stone-900 border border-stone-700 mx-auto flex items-center justify-center text-amber-400">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="font-serif-editorial text-2xl font-bold text-stone-200">
              No se encontraron prendas
            </h3>
            <p className="text-stone-400 text-xs max-w-md mx-auto">
              No existen productos que coincidan con la búsqueda "<span className="text-amber-300">{busqueda}</span>" o la categoría seleccionada.
            </p>
            <button
              onClick={() => { setBusqueda(''); setCategoriaActiva('Todos'); }}
              className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-400 text-stone-950 hover:bg-amber-300 transition-colors shadow-lg"
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </main>

      {/* Pie de Página */}
      <footer className="w-full bg-stone-950 border-t border-stone-800/80 py-8 px-4 sm:px-6 lg:px-8 text-center text-xs text-stone-500 font-light space-y-2">
        <p>&copy; {ANIO_ACTUAL} <strong className="text-stone-300 font-medium font-serif-editorial">{marca.nombreCompleto}</strong>. {marca.slogan}.</p>
        <p className="text-[11px] text-stone-600">Plataforma Comercial de Demostración Frontend ATHALIA</p>
      </footer>

      {/* Modal de Detalle / Selección de Producto */}
      {productoSeleccionado && (
        <ModalDetalleProducto
          producto={productoSeleccionado}
          onClose={() => setProductoSeleccionado(null)}
          onAgregarAlCarrito={handleAgregarAlCarrito}
        />
      )}

      {/* Panel Lateral del Carrito */}
      <PanelCarrito
        abierto={carritoAbierto}
        onCerrar={() => setCarritoAbierto(false)}
        itemsCarrito={itemsCarrito}
        onActualizarCantidad={handleActualizarCantidad}
        onEliminarItem={handleEliminarItem}
        onVaciarCarrito={handleVaciarCarrito}
      />
    </div>
  );
}

export default Catalogo;
