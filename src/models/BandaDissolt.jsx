import Banda from './Banda';

export class BandaDissolt extends Banda {
  constructor(nom, genere, any, paisOrigen, qAlbums, dissolucio, comebackRumors) {
    super(nom, genere, any, paisOrigen, qAlbums);
    this.dissolucio = dissolucio;
    this.comebackRumors = comebackRumors;
  }
}
