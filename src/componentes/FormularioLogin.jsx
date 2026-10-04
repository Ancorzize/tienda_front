import React, { useState } from 'react';

/**
 * Componente FormularioLogin
 * Maneja la interacción del usuario, visibilidad de contraseña, validaciones locales
 * y simulación de envío sin realizar peticiones HTTP ni backend.
 */
export function FormularioLogin({ onExitoSimulado }) {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [errores, setErrores] = useState({});
  const [cargando, setCargando] = useState(false);

  // Expresión regular estándar para formato básico de e-mail
  const validarFormatoEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Limpiar errores previos
    const nuevosErrores = {};

    // Validaciones en español segun requerimientos
    if (!correo.trim()) {
      nuevosErrores.correo = 'Ingresa tu correo electrónico.';
    } else if (!validarFormatoEmail(correo)) {
      nuevosErrores.correo = 'Ingresa un correo electrónico válido (ej. usuario@athalia.com).';
    }

    if (!password) {
      nuevosErrores.password = 'Ingresa tu contraseña.';
    }

    setErrores(nuevosErrores);

    // Si existen errores, detener proceso
    if (Object.keys(nuevosErrores).length > 0) {
      return;
    }

    // Simulación de inicio de sesión
    setCargando(true);

    setTimeout(() => {
      setCargando(false);
      if (onExitoSimulado) {
        onExitoSimulado({ correo: correo.trim() });
      }
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full space-y-6">
      {/* Alerta general de error si faltan datos */}
      {(errores.correo || errores.password) && (
        <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/30 backdrop-blur-md text-rose-200 text-sm animate-fade-in-soft flex items-start space-x-3">
          <svg className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div className="flex-1">
            <p className="font-medium text-rose-300">Por favor completa los datos requeridos:</p>
            <ul className="mt-1 list-disc list-inside space-y-0.5 text-xs text-rose-300/90">
              {errores.correo && <li>{errores.correo}</li>}
              {errores.password && <li>{errores.password}</li>}
            </ul>
          </div>
        </div>
      )}

      {/* Campo: Correo Electrónico */}
      <div className="space-y-2">
        <label htmlFor="correo" className="block text-xs font-semibold tracking-widest uppercase text-stone-300">
          Correo electrónico
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400 group-focus-within:text-amber-300 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <input
            id="correo"
            type="email"
            value={correo}
            onChange={(e) => {
              setCorreo(e.target.value);
              if (errores.correo) setErrores({ ...errores, correo: null });
            }}
            placeholder="asesora@athalia.com"
            className={`w-full pl-11 pr-4 py-3.5 bg-stone-900/60 border rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-none transition-all duration-300 ${
              errores.correo
                ? 'border-rose-500/80 focus:border-rose-400 focus:ring-2 focus:ring-rose-500/20'
                : 'border-stone-700/60 focus:border-amber-400/80 focus:ring-2 focus:ring-amber-400/20 hover:border-stone-600'
            }`}
          />
        </div>
        {errores.correo && (
          <p className="text-xs text-rose-400 font-medium pl-1 animate-fade-in-soft flex items-center space-x-1">
            <span>• {errores.correo}</span>
          </p>
        )}
      </div>

      {/* Campo: Contraseña */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-xs font-semibold tracking-widest uppercase text-stone-300">
            Contraseña
          </label>
        </div>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400 group-focus-within:text-amber-300 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <input
            id="password"
            type={mostrarPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errores.password) setErrores({ ...errores, password: null });
            }}
            placeholder="••••••••••••"
            className={`w-full pl-11 pr-28 py-3.5 bg-stone-900/60 border rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-none transition-all duration-300 ${
              errores.password
                ? 'border-rose-500/80 focus:border-rose-400 focus:ring-2 focus:ring-rose-500/20'
                : 'border-stone-700/60 focus:border-amber-400/80 focus:ring-2 focus:ring-amber-400/20 hover:border-stone-600'
            }`}
          />
          {/* Botón Toggle Mostrar / Ocultar Contraseña */}
          <button
            type="button"
            onClick={() => setMostrarPassword(!mostrarPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs font-medium text-amber-200/80 hover:text-amber-200 transition-colors px-2 rounded-r-xl focus:outline-none"
            aria-label={mostrarPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          >
            <span className="flex items-center space-x-1.5 bg-stone-800/80 py-1 px-2.5 rounded-lg border border-amber-400/20 hover:border-amber-400/40 transition-all">
              {mostrarPassword ? (
                <>
                  <svg className="w-3.5 h-3.5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.858A9.954 9.954 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m-0 0L21 21M3 3l18 18" />
                  </svg>
                  <span>Ocultar</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>Mostrar</span>
                </>
              )}
            </span>
          </button>
        </div>
        {errores.password && (
          <p className="text-xs text-rose-400 font-medium pl-1 animate-fade-in-soft flex items-center space-x-1">
            <span>• {errores.password}</span>
          </p>
        )}
      </div>

      {/* Botón de envío: Iniciar sesión */}
      <button
        type="submit"
        disabled={cargando}
        className="relative w-full py-4 px-6 rounded-xl font-medium text-stone-900 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 hover:from-amber-100 hover:via-amber-200 hover:to-amber-300 shadow-xl shadow-amber-950/30 transition-all duration-300 transform active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed overflow-hidden group border border-amber-200/50"
      >
        <span className="relative z-10 flex items-center justify-center space-x-2 font-sans-clean font-semibold tracking-wider text-sm uppercase">
          {cargando ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-stone-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Verificando acceso...</span>
            </>
          ) : (
            <>
              <span>Iniciar sesión</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </span>
      </button>

      {/* Pie descriptivo de seguridad en la plataforma de moda */}
      <div className="pt-2 flex items-center justify-center space-x-2 text-[11px] text-stone-400">
        <svg className="w-3.5 h-3.5 text-amber-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span>Acceso exclusivo para personal comercial ATHALIA</span>
      </div>
    </form>
  );
}

export default FormularioLogin;
