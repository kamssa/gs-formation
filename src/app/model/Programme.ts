import {Formation} from './Formation';

export class Programme {
  constructor(public id?: number,
              public version?: number,
              public libelle?: string,
              public description?: string,
              public formation?: Formation) {
  }
}
