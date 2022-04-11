import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("HOME", "/home"),
    new Menu("ABOUT", "/about"),
    new Menu("USER", "/user/list"),
    new Menu("VENDOR", "/vendor/list"),
    new Menu("PRODUCT", "/product/list"),
    new Menu("REQUEST", "/request/list")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
