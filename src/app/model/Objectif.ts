import {Formation} from './Formation';

export class Objectif {
  constructor(public id?: number,
              public version?: number,
              public libelle?: string,
              public formation?: Formation) {
  }
}
