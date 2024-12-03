import React, { useState } from 'react';
import Taula from './Taula';
import { BandaActiva } from '../models/BandaActiva';
import { BandaDissolt } from '../models/BandaDissolt';
import { ordenarPerAny, filtrarPerPais, totalitzarQAlbums } from '../utils/utils';

const Contenidor = ({ títol, dades, setDades }) => {
  const [títolActualitzat, setTítol] = useState(títol);
  const [dadesFiltrades, setDadesFiltrades] = useState(dades);
  const [total, setTotal] = useState(null);
  const [dadesOriginals, setDadesOriginals] = useState(dades);

  const configuracio = [
    { capçalera: 'Nom del Grup', camp: 'nom' },
    { capçalera: 'Gènere', camp: 'genere' },
    { capçalera: 'Any de Formació', camp: 'any' },
    { capçalera: 'País d\'Origen', camp: 'paisOrigen' },
    { capçalera: 'Àlbums Publicats', camp: 'qAlbums' },
    { capçalera: 'Comeback Rumors', camp: 'comebackRumors' }, 
  ];
  const afegirBandaHandler = () => {
    const nom = prompt('Nom del Grup:');
    const genere = prompt('Gènere:');
    const any = parseInt(prompt('Any de Formació:'), 10);
    const paisOrigen = prompt('País d\'Origen:');
    const qAlbums = parseInt(prompt('Àlbums Publicats:'), 10);
    const tipus = prompt('Tipus de Banda (activa/dissolta):').toLowerCase();

    let novaBanda;
    if (tipus === 'activa') {
      novaBanda = new BandaActiva(nom, genere, any, paisOrigen, qAlbums);
    } else if (tipus === 'dissolta') {
      const comebackRumors = prompt('Comeback Rumors (true/false):').toLowerCase() === 'true';
      novaBanda = new BandaDissolt(nom, genere, any, paisOrigen, qAlbums, comebackRumors);
    } else {
      alert('Tipus de banda no vàlid');
      return;
    }

    const novesDades = [...dades, novaBanda];
    setDades(novesDades);
    setDadesFiltrades(novesDades);
    setDadesOriginals(novesDades);
  };
  const actualitzarTítol = () => {
    const nouTítol = prompt('Escriu el nou títol:');
    setTítol(nouTítol);
  };

  const ordenarPerAnyHandler = () => {
    const dadesOrdenades = ordenarPerAny(dadesFiltrades);
    setDadesFiltrades(dadesOrdenades);
  };

  const filtrarPerPaisHandler = () => {
    const pais = prompt('Introdueix el pais per filtrar (Ej: "EE.UU.")');
    const dadesFiltrades = filtrarPerPais(dades, pais);
    setDadesFiltrades(dadesFiltrades);
  };

  const totalitzarHandler = () => {
    const total = totalitzarQAlbums(dadesFiltrades);
    setTotal(total);
  };

  const eliminarTotal = () => {
    setTotal(null);
  };

  const eliminarOrdenacio = () => {
    setDadesFiltrades(dadesOriginals);
  };

  const eliminarFiltre = () => {
    setDadesFiltrades(dadesOriginals);
  };

  
 

  return (
    <div>
      <h1>{títolActualitzat}</h1>
      <button onClick={actualitzarTítol}>Actualitzar Títol</button>

      <div className="bottons">
        <button onClick={ordenarPerAnyHandler}>Ordenar per Any de Formació</button>
        <button onClick={filtrarPerPaisHandler}>Filtrar per País</button>
        <button onClick={totalitzarHandler}>Totalitzar Àlbums</button>
        <button onClick={eliminarTotal}>Eliminar Total</button>
        <button onClick={eliminarOrdenacio}>Eliminar Ordenació</button>
        <button onClick={eliminarFiltre}>Eliminar Filtre</button>
       {/*  <button onClick={afegirBandaHandler}>Afegeix</button> */}
      </div>

      <Taula configuracio={configuracio} dades={dadesFiltrades} total={total} />
    </div>
  );
};

export default Contenidor;
