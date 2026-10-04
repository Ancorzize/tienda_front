import React from 'react';
import { marca } from '../configuracion/marca';
import { Logo } from './Logo';
import { FormularioLogin } from './FormularioLogin';

const ANIO_ACTUAL = new Date().getFullYear();

/**
 * Componente principal de Login ATHALIA
 * Utiliza el fondo de video exclusivo (videofondo.mp4) y el logo oficial (logo.svg).
 * Al ser exitoso el envío simulado, notifica a la aplicación para mostrar el Catálogo.
 */
export function Login({ onLoginExitoso }) {
  const handleExitoLogin = (datos) => {
    if (onLoginExitoso) {
      onLoginExitoso(datos.correo);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-stone-950 overflow-x-hidden font-sans-clean select-none">
      {/* Video de Fondo Principal (videofondo.mp4) */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center filter brightness-[1.05] contrast-[1.05]"
        >
          <source src={marca.videoFondo} type="video/mp4" />
          Tu navegador no soporta reproducción de video.
        </video>

        {/* Overlays de Tratamiento Visual para Garantizar Legibilidad y Elegancia Boutique */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/55 via-stone-950/30 to-stone-950/10 md:from-stone-950/60 md:via-stone-950/30 md:to-stone-950/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-stone-950/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Estructura Principal del Login */}
      <div className="relative z-10 min-h-screen w-full flex flex-col justify-between p-4 sm:p-8 lg:p-12">
        {/* Cabecera Superior */}
        <header className="w-full flex items-center justify-between animate-fade-in-soft">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-amber-400/10 text-amber-300 border border-amber-400/30 backdrop-blur-md">
              {marca.coleccion}
            </span>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-xs font-serif-editorial italic text-amber-200/90">
              "{marca.slogan}"
            </p>
          </div>
        </header>

        {/* Contenido Central: Composición Editorial con Video */}
        <main className="w-full my-auto py-8 flex items-center justify-center lg:justify-between max-w-7xl mx-auto">
          {/* Lado Izquierdo: Presentación Editorial de Lencería (Visible en pantallas medianas y grandes) */}
          <div className="hidden lg:flex flex-col max-w-lg space-y-6 animate-fade-in-soft pr-8">
            <div className="w-12 h-0.5 bg-amber-400/70 mb-2" />
            <h1 className="font-serif-editorial text-5xl xl:text-6xl font-normal tracking-tight text-stone-100 leading-[1.15]">
              Lencería que <br />
              <span className="italic font-light text-amber-200">realza tu esencia</span> <br />
              & Moda Boutique.
            </h1>
            <p className="text-stone-300 text-sm leading-relaxed max-w-md font-light">
              Bienvenida al portal exclusivo para asesores comerciales de <span className="font-semibold text-stone-100">{marca.nombre}</span>. Descubra nuestras colecciones de lencería de lujo y gestione sus pedidos con elegancia.
            </p>
            
            {/* Detalles de Estilo */}
            <div className="pt-6 flex items-center space-x-6 text-xs text-stone-400 border-t border-stone-800/80">
              <div>
                <span className="block font-serif-editorial text-lg text-amber-200">Colección</span>
                <span className="text-[11px] uppercase tracking-wider">Lencería Premium</span>
              </div>
              <div className="w-px h-8 bg-stone-800" />
              <div>
                <span className="block font-serif-editorial text-lg text-amber-200">Acceso</span>
                <span className="text-[11px] uppercase tracking-wider">Personal Comercial</span>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Tarjeta Glassmorphic de Formulario */}
          <div className="w-full max-w-md animate-fade-in-soft">
            <div className="relative rounded-3xl glass-fashion-dark p-8 sm:p-10 shadow-2xl shadow-stone-950/90 backdrop-blur-2xl border border-amber-400/20">
              {/* Resplandor decorativo de esquina */}
              <div className="absolute -top-px -left-px w-20 h-20 bg-gradient-to-br from-amber-400/25 to-transparent rounded-tl-3xl pointer-events-none" />

              {/* Logo Oficial (/assets/marca/logo.svg) */}
              <div className="mb-8 flex justify-center">
                <Logo />
              </div>

              {/* Formulario Interactivo */}
              <FormularioLogin onExitoSimulado={handleExitoLogin} />
            </div>
          </div>
        </main>

        {/* Pie de Página Editorial */}
        <footer className="w-full flex flex-col sm:flex-row items-center justify-between py-4 border-t border-stone-800/40 text-[11px] text-stone-400 font-light space-y-2 sm:space-y-0">
          <div>
            &copy; {ANIO_ACTUAL} <span className="font-serif-editorial text-stone-300 font-medium">{marca.nombreCompleto}</span>. Todos los derechos reservados.
          </div>
          <div className="flex space-x-4">
            <span className="hover:text-amber-200 cursor-pointer transition-colors">Términos de Servicio</span>
            <span>•</span>
            <span className="hover:text-amber-200 cursor-pointer transition-colors">Privacidad Boutique</span>
            <span>•</span>
            <span className="hover:text-amber-200 cursor-pointer transition-colors">Soporte Comercial</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Login;
