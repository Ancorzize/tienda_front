import React, { useState } from 'react';
import { Login } from './componentes/Login';
import { Catalogo } from './paginas/Catalogo/Catalogo';

function App() {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);

  const handleLoginExitoso = (correo) => {
    setUsuarioAutenticado(correo);
  };

  const handleCerrarSesion = () => {
    setUsuarioAutenticado(null);
  };

  return (
    <>
      {!usuarioAutenticado ? (
        <Login onLoginExitoso={handleLoginExitoso} />
      ) : (
        <Catalogo usuario={usuarioAutenticado} onCerrarSesion={handleCerrarSesion} />
      )}
    </>
  );
}

export default App;