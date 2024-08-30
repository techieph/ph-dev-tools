import { Component } from '@angular/core';
import { MENU_ITEMS, MenuItem } from './menu';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = MENU_ITEMS;
  }

}
