import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  opened = false;

   links = [
    {
      legend: 'Clientes',
      url: '/mi-tienda/clientes',
      icon: 'supervisor_account'
    },

    {
      legend: 'Productos',
      url: '/mi-tienda/productos',
      icon: 'shopping_bag'
    },
    {
      legend: 'Ordenes',
      url: '/mi-tienda/ordenes',
      icon: 'receipt'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(): void{
    this.opened = !this.opened;

  }

}

