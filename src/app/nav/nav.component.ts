import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isMenuOpened: boolean = false;

  toogleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }
  closeMenu(){
    this.isMenuOpened = !this.isMenuOpened;
  }
  constructor() {}

  ngOnInit(): void {}
}
