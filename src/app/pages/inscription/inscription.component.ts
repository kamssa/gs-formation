import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  current:number = 0;
  butttonPrev :boolean = false;
  b: any;
  button: HTMLCollectionOf<Element>;
  constructor() { }
  
  ngOnInit(): void {
    this.changeBackground();
    this.cacheEl();
  }
  next(n) {
    if (this.current< 2) {
      this.b[this.current].style.display = 'none';
      this.current = this.current + n;
      this.butttonPrev = true;
      this.changeBackground();
      this.showAgain(this.current);
      this.button = document.getElementsByClassName('btnInscription');
      if (this.current == 2) {
        this.button['0'].innerHTML = 'Terminer';
      }
    }
  }
  prev(n) {
    if (this.current >= 1) {
      this.b[this.current].style.display = 'none';
      this.current = this.current - n;
      this.changeBackground();
      this.showAgain(this.current);
      this.button['0'].innerHTML = 'Suivant';
      if (this.current == 0) {
        this.butttonPrev = false;
      }
    }
  }
  changeBackground(){
    var a = document.getElementById('deuxieme').children;
    for (let i =0; i<a.length;++i){
      a[i].classList.remove('active');
    }
    a[this.current].classList.add('active');
  }
  cacheEl() {
    this.b = document.getElementById('troisieme').children;
    for (let i =1; i<this.b.length;++i){
      this.b[i].style.display = 'none';
    }
  }
  showAgain(p) {
      this.b[p].style.display = 'flex';
  }
}
