
export const ordenarPerAny = (dades) => {
 
  return [...dades].sort((a, b) => a.any - b.any); 
};


export const filtrarPerPais = (dades, pais) => {
  return dades.filter(dada => dada.paisOrigen.toLowerCase() === pais.toLowerCase());
};


export const totalitzarQAlbums = (dades) => {
  return dades.reduce((total, dada) => total + dada.qAlbums, 0);  
};
