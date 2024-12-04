import React, { useState } from 'react';
import Contenidor from './components/Contenidor';

function App() {
  const [dades, setDades] = useState([]);  // Inicializa la tabla vacía

  return (
    <div>
      <Contenidor títol="Atlantida Records" dades={dades} setDades={setDades} />
    </div>
  );
}

export default App;
