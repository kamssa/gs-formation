import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart,Event as NavigationEvent } from '@angular/router';
import { filter } from "rxjs/operators";
declare interface RouteInfo {
  path: string,
  title: string,
}
export const ROUTES: RouteInfo[] = [
  { path: '/accueil', title: 'Accueil'},
  { path: '/inscription', title: 'Inscription'},
  { path: '/formations', title: 'FORMATION PROFESSIONNELLE' },
  { path: '/entreprise-partenaire', title: 'ENTREPRISES ET PARTENAIRES'},
  { path: '/actualite', title: 'ACTUALITÉ'}
]
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItems: RouteInfo[];

  constructor(private router: Router) {
    this.router.events
    .pipe(
      filter(
        ( event: NavigationEvent ) => {
          return( event instanceof NavigationStart );
        }
      )
    )
    .subscribe(
      ( event: NavigationStart ) => {
        var a = document.getElementById('premier').children;
        for (let index = 0; index < this.menuItems.length; index++) {
            a[index].classList.remove('active');
            if (event.url === this.menuItems[index].path) {
              a[index].classList.add('active');
            }
        }
      }
    )
  ;
  }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    //console.log(this.menuItems);
  }
  ngAfterViewInit() {
    var a = document.getElementById('premier').children;
    for (let index = 0; index < this.menuItems.length; index++) {
        if (this.router.url === this.menuItems[index].path) {
          a[index].classList.add('active');
        }
    }
  }
  active(t: number) {
    var a = document.getElementById('premier').children;
    for (let i =0; i<a.length; i++) {
      a[i].classList.remove('active');
      if (t==i) {
        a[t].classList.add('active');
      }
    }
  }
}
