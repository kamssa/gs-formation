import {Formation} from './Formation';

export class Tarif {
  constructor(public id?: number,
              public version?: number,
              public libelle?: string,
              public prix?: number,
              public formation?: Formation) {
  }
}
