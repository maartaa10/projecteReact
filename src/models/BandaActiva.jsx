import Banda from './Banda';

export class BandaActiva extends Banda {
  constructor(nom, genere, any, paisOrigen, qAlbums, ultimaGira, discografica) {
    super(nom, genere, any, paisOrigen, qAlbums);
    this.ultimaGira = ultimaGira;
    this.discografica = discografica;
  }
}
