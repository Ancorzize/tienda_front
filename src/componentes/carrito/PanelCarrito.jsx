import React, { useState } from 'react';
import { ElementoCarrito } from './ElementoCarrito';
import { formatearPrecio } from '../../datos/productos';

/**
 * Componente PanelCarrito (Drawer / Panel Lateral Elegante)
 * Muestra los productos añadidos, permite cambiar cantidades, eliminar items,
 * calcula subtotales y total general.
 */
export function PanelCarrito({
  abierto,
  onCerrar,
  itemsCarrito,
  onActualizarCantidad,
  onEliminarItem,
  onVaciarCarrito
}) {
  const [pedidoEnviado, setPedidoEnviado] = useState(false);

  if (!abierto) return null;

  // Cálculo del total general y total de unidades
  const totalGeneral = itemsCarrito.reduce(
    (acc, item) => acc + item.producto.precio * item.cantidad,
    0
  );

  const totalUnidades = itemsCarrito.reduce(
    (acc, item) => acc + item.cantidad,
    0
  );

  const handleFinalizarPedido = () => {
    setPedidoEnviado(true);
    setTimeout(() => {
      setPedidoEnviado(false);
      onVaciarCarrito();
      onCerrar();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in-soft">
      {/* Fondo Oscuro Interactivo para cerrar al hacer clic afuera */}
      <div
        onClick={onCerrar}
        className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-stone-900 border-l border-amber-400/30 shadow-2xl flex flex-col justify-between">
          
          {/* Cabecera del Carrito */}
          <div className="p-6 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif-editorial text-2xl font-bold text-stone-100">
                  Mi Carrito
                </h3>
                <p className="text-xs text-stone-400 font-light">
                  {totalUnidades} {totalUnidades === 1 ? 'prenda seleccionada' : 'prendas seleccionadas'}
                </p>
              </div>
            </div>

            <button
              onClick={onCerrar}
              className="p-2 rounded-full text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Notificación de Pedido Generado (Simulación) */}
          {pedidoEnviado ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4 animate-fade-in-soft">
              <div className="w-16 h-16 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-300 animate-bounce">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-serif-editorial text-2xl font-bold text-stone-100">
                ¡Pedido Generado!
              </h4>
              <p className="text-xs text-stone-300 max-w-xs font-light leading-relaxed">
                Su solicitud de prendas de lencería ha sido procesada con éxito por la plataforma comercial ATHALIA.
              </p>
            </div>
          ) : (
            <>
              {/* Lista de Items del Carrito */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {itemsCarrito.length === 0 ? (
                  /* Estado Vacío del Carrito */
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                    <div className="w-16 h-16 rounded-full bg-stone-950 border border-stone-800 flex items-center justify-center text-stone-600">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif-editorial text-xl font-semibold text-stone-200">
                        Tu carrito está vacío
                      </h4>
                      <p className="text-xs text-stone-400 max-w-xs font-light">
                        Explora nuestra colección de lencería boutique y agrega tus favoritas.
                      </p>
                    </div>
                    <button
                      onClick={onCerrar}
                      className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-stone-800 text-amber-300 border border-amber-400/30 hover:bg-stone-700 transition-colors"
                    >
                      Explorar Catálogo
                    </button>
                  </div>
                ) : (
                  itemsCarrito.map((item) => (
                    <ElementoCarrito
                      key={item.producto.id}
                      item={item}
                      onActualizarCantidad={onActualizarCantidad}
                      onEliminar={onEliminarItem}
                    />
                  ))
                )}
              </div>

              {/* Pie con Resumen y Acción Principal */}
              {itemsCarrito.length > 0 && (
                <div className="p-6 bg-stone-950 border-t border-stone-800 space-y-4">
                  <div className="space-y-2 text-xs text-stone-300">
                    <div className="flex justify-between">
                      <span className="font-light">Subtotal unidades ({totalUnidades}):</span>
                      <span className="font-semibold text-stone-100">{formatearPrecio(totalGeneral)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-light">Envío Comercial:</span>
                      <span className="text-amber-300 font-medium uppercase text-[10px]">Gratis por temporada</span>
                    </div>
                    <div className="pt-2 border-t border-stone-800 flex justify-between items-center text-sm">
                      <span className="font-serif-editorial font-bold text-stone-100">Total a Pagar:</span>
                      <span className="font-serif-editorial text-2xl font-bold text-amber-300">
                        {formatearPrecio(totalGeneral)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleFinalizarPedido}
                    className="w-full py-4 px-6 rounded-2xl font-semibold text-xs tracking-widest uppercase text-stone-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 shadow-xl shadow-amber-950/40 transition-all duration-300 flex items-center justify-center space-x-2 border border-amber-300"
                  >
                    <span>Finalizar Pedido Comercial</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                  <button
                    onClick={onVaciarCarrito}
                    className="w-full text-center text-[11px] text-stone-500 hover:text-rose-400 transition-colors py-1"
                  >
                    Vaciar Carrito
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PanelCarrito;
