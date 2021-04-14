import {Categorie} from './Categorie';

export class Formation {
  constructor(
    public id?: number,
    public version?: number,
    public libelle?: string,
    public description?: string,
    public categorie?: Categorie

){

  }
}

