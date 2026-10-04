import React from 'react';
import { marca } from '../configuracion/marca';

/**
 * Componente Logo
 * Obtiene el logo oficial (/assets/marca/logo.svg) mediante la configuración centralizada (marca.js).
 */
export function Logo({ className = "" }) {
  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* Visualización del Logo Oficial obtenido de marca.js */}
      <div className="relative group cursor-default">
        <img
          src={marca.logo.src}
          alt={marca.logo.alt || marca.nombre}
          className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain filter drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}

export default Logo;
