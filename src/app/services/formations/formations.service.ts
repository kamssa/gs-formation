import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable, of, Subject} from "rxjs";
import {Resultat} from "../../model/resultat";
import {Formation} from "../../model/Formation";
import {MessageService} from "../message.service";
import {Resultat1} from "../../model/resultat1";
import {Categorie} from "../../model/Categorie";
@Injectable({
  providedIn: 'root'
})
export class FormationsService {
// observables sources
  private formationCreerSource = new Subject<Resultat<Formation>>();
  private formationModifSource = new Subject<Resultat<Formation>>();
  private formationFiltreSource = new Subject<string>();
  private formationSupprimeSource = new Subject<Resultat<boolean>>();


// observables streams
  formationCreer$ = this.formationCreerSource.asObservable();
  formationModif$ = this.formationModifSource.asObservable();
  formationFiltre$ = this.formationFiltreSource.asObservable();
  travauxSupprime$ = this.formationSupprimeSource.asObservable();

  constructor(private  http: HttpClient, private messageService: MessageService) {
  }

  getAllFormation(): Observable<Resultat<Formation[]>> {
    return this.http.get<Resultat<Formation[]>>(`${environment.urlApi}/api/formation`);
  }

  ajoutFormation(formation: Formation): Observable<Resultat<Formation>> {
    console.log('methode du service qui ajoute  formation', formation);
    return this.http.post<Resultat<Formation>>(`${environment.urlApi}/api/formation`, formation);
  }
  modifFormation(formation: Formation): Observable<Resultat<Formation>> {
    console.log('methode du service qui modifier formation', formation);
    return this.http.put<Resultat<Formation>>(`${environment.urlApi}/api/formation`, formation);
  }
  getFormationById(id: Formation): Observable<Resultat<Formation>> {
    return this.http.get<Resultat<Formation>>(`${environment.urlApi}/api/formation/${id}`);
  }
  getFormationByIdCategorie(id: number): Observable<Resultat1<Categorie, Formation[]>>{
    return this.http.get<Resultat1<Categorie, Formation[]>>(`${environment.urlApi}/api/formationByIdCategorie/${id}`);
  }
  supprimerFormation(id: number): Observable<any> {
    return this.http.delete(`${environment.urlApi}/api/formation/${id}`);

  }

  formationCreer(res: Resultat<Formation>) {
    console.log('formation a ete  creer correctement essaie source');
    this.formationCreerSource.next(res);
  }

  formationModif(res: Resultat<Formation>) {
    this.formationModifSource.next(res);
  }

  filtreformation(text: string) {
    this.formationFiltreSource.next(text);
  }

  formationSupprime(res: Resultat<boolean>) {
    this.formationSupprimeSource.next(res);
  }

  private log(message: string) {
    this.messageService.add('formationService: ' + message);

  }

  ///////////////////////////////////////////
  // recuper les erreurs


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {


      console.error(error);


      this.log(`${operation} non disponible: ${error.message}`);


      return of(result as T);
    };
  }
}
