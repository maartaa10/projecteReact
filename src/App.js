
import React, { useState } from 'react';
import Contenidor from './components/Contenidor';
import { BandaActiva } from './models/BandaActiva';
import { BandaDissolt } from './models/BandaDissolt';

function App() {

  const grup1 = new BandaActiva('Pearl Jam', 'Grunge', 1990, 'EE.UU.', 11, 2022, 'Epic Records');
  const grup2 = new BandaActiva('Simple Plan', 'Pop-Punk', 1999, 'Canadá', 5, 2023, 'Atlantic Records');
  const grup3 = new BandaActiva('Alice in Chains', 'Grunge', 1987, 'EE.UU.', 6, 2020, 'Columbia');
  const grup4 = new BandaDissolt('El Canto del Loco', 'Pop-Rock', 2000, 'Espanya', 6, 2010, 'Rumors de retorn');
  const grup5 = new BandaDissolt('Nirvana', 'Grunge', 1987, 'EE.UU.', 3, 1994, 'No tornen junts');
  const grup6 = new BandaActiva('Blink-182', 'Pop-Punk', 1992, 'EE.UU.', 8, 2022, 'Geffen Records');
  const grup7 = new BandaActiva('The Offspring', 'Punk-Rock', 1984, 'EE.UU.', 10, 2021, 'Columbia');
  const grup8 = new BandaActiva('Green Day', 'Punk-Rock', 1987, 'EE.UU.', 13, 2023, 'Reprise Records');
  const grup9 = new BandaActiva('Rage Against the Machine', 'Rock', 1991, 'EE.UU.', 6, 2022, 'Epic Records');
  const grup10 = new BandaActiva('Foo Fighters', 'Rock', 1994, 'EE.UU.', 10, 2023, 'RCA Records');
  const grup11 = new BandaActiva('The Rolling Stones', 'Rock classic', 1962, 'Regne Unit', 30, 2023, 'Universal Music');
  const grup12 = new BandaDissolt('Spice Girls', 'Pop', 1994, 'Regne Unit', 6, 2001, 'Incertessa');
  const grup13 = new BandaActiva('The Smashing Pumpkins', 'Rock alternatiu', 1988, 'EE.UU', 55, 2024, 'Virgin Records');
  const grup14 = new BandaActiva('Radiohead', 'Rock alternatiu', 1985, 'Regne Unit', 9, 2022, 'XL Recordings');
  const grup15 = new BandaDissolt('The Cranberries', 'Rock alternatiu', 1989, 'Irlanda', 8, 2019, 'Rumors de retorn');

  
  const [dades, setDades] = useState([grup1, grup2, grup3, grup4, grup5, grup6, grup7, grup8, grup9, grup10, grup11, grup12,grup13, grup14,grup15]);

  return (
    <div>
      <Contenidor títol="Atlantida Records" dades={dades} setDades={setDades} />
    </div>
  );
}

export default App;
