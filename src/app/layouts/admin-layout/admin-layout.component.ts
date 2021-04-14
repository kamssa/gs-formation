import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var html = document.getElementsByTagName('html')[0];
    html.classList.add("admin-layout");
    this.navBar();
  }
  onActivate(event) {
    window.scroll(0,0);
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    this.navBar();
  }
  navBar() {
    var header = document.getElementById('header');
    if (window.pageYOffset > 130) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
      header.classList.add('sticky1');
    }
  }
}
