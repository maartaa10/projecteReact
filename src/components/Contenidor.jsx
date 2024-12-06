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
    { capçalera: 'Integrants', camp: 'integrants' },
    { capçalera: 'Comeback Rumors', camp: 'comebackRumors' },
    { capçalera: 'Ultima Gira', camp: 'ultimaGira' }
  ];


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
    setTotal(0);
  };

  const eliminarOrdenacio = () => {
    setDadesFiltrades(dadesOriginals);
  };

  const eliminarFiltre = () => {
    setDadesFiltrades(dadesOriginals);
  };


  const grupsBandaNormal = [
    { nom: 'Linkin Park', genere: 'Nu Metal', any: 1996, paisOrigen: 'EE.UU', qAlbums: 7, integrants: 6 },
    { nom: 'The Cranberries', genere: 'Rock alternatiu', any: 1989, paisOrigen: 'Irlanda', qAlbums: 7, integrants: 4 },
    { nom: 'Evanescence', genere: 'Rock gòtic', any: 1995, paisOrigen: 'EE.UU', qAlbums: 6, integrants: 6 },
    { nom: 'Red Hot Chili Peppers', genere: 'Funk Rock', any: 1983, paisOrigen: 'EE.UU', qAlbums: 13, integrants: 4 }
  ];
  
/*   const grup16 = new Banda('Linkin Park', 'Nu Metal', 1996, 'EE.UU.', 7, 6);
  const grup17 = new Banda('Evanescence', 'Rock', 1995, 'EE.UU.', 5, 5);
  const grup18 = new Banda('Nirvana', 'Grunge', 1987, 'EE.UU.', 3, 3);
  const grup19 = new Banda('Coldplay', 'Pop Rock', 1996, 'Regne Unit', 9, 4);
  const grup20 = new Banda('Red Hot Chili Peppers', 'Funk Rock', 1983, 'EE.UU.', 12, 4); */

  const grupsBandaActiva = [
    new BandaActiva('Pearl Jam', 'Grunge', 1990, 'EE.UU', 11, 2022, 'Epic Records'),
    new BandaActiva('Simple Plan', 'Pop-Punk', 1999, 'Canadá', 5, 2023, 'Atlantic Records'),
    new BandaActiva('Alice in Chains', 'Grunge', 1987, 'EE.UU', 6, 2020, 'Columbia'),
    new BandaActiva('Blink-182', 'Pop-Punk', 1992, 'EE.UU', 8, 2022, 'Geffen Records'),
    new BandaActiva('The Offspring', 'Punk-Rock', 1984, 'EE.UU', 10, 2021, 'Columbia')
  ];

  const grupsBandaDissolt = [
    new BandaDissolt('El Canto del Loco', 'Pop-Rock', 2000, 'Espanya', 6, 2010, 'Rumors de retorn'),
    new BandaDissolt('Nirvana', 'Grunge', 1987, 'EE.UU', 3, 1994, 'No tornen junts'),
    new BandaDissolt('Spice Girls', 'Pop', 1994, 'Regne Unit', 6, 2001, 'Incertessa')
  ];


  const carregarBandaNormal = () => {
    const novesDades = [...dades, ...grupsBandaNormal];
    setDades(novesDades);
    setDadesFiltrades(novesDades);
    setDadesOriginals(novesDades);
  };

  const carregarBandaActiva = () => {
    const novesDades = [...dades, ...grupsBandaActiva];
    setDades(novesDades);
    setDadesFiltrades(novesDades);
    setDadesOriginals(novesDades);
  };

  const carregarBandaDissolt = () => {
    const novesDades = [...dades, ...grupsBandaDissolt];
    setDades(novesDades);
    setDadesFiltrades(novesDades);
    setDadesOriginals(novesDades);
  };

  const actualitzarTítol = () => {
    const nouTítol = prompt('Escriu el nou títol:');
    setTítol(nouTítol);
  };

  return (
    <div>
      <h1>{títolActualitzat}</h1>
      <button onClick={actualitzarTítol}>Actualitzar Títol</button>

      <div className="botons">
        <button onClick={ordenarPerAnyHandler}>Ordenar per Any de Formació</button>
        <button onClick={filtrarPerPaisHandler}>Filtrar per País</button>
        <button onClick={totalitzarHandler}>Totalitzar Àlbums</button>
        <button onClick={eliminarTotal}>Eliminar Total</button>
        <button onClick={eliminarOrdenacio}>Eliminar Ordenació</button>
        <button onClick={eliminarFiltre}>Eliminar Filtre</button>
        <button onClick={carregarBandaNormal}>Banda</button>
        <button onClick={carregarBandaActiva}>Banda Activa</button>
        <button onClick={carregarBandaDissolt}>Banda Dissolta</button>
      </div>

      <Taula configuracio={configuracio} dades={dadesFiltrades} total={total} />
    </div>
  );
};

export default Contenidor;
