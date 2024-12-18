import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.hideMenu();
      }
    });
  }

  toggleMenu(): void {
    if (typeof document !== 'undefined'){
      const menu = document.querySelector('.menu__itens') as HTMLElement;
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    }
  }

  hideMenu(): void {
    if (typeof document !== 'undefined') {
      const menu = document.querySelector('.menu__itens') as HTMLElement;
       if (menu.style.display === 'flex') {
         menu.style.display = 'none';
       }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const menu = document.querySelector('.menu__itens') as HTMLElement;
    const width = window.innerWidth;
    if (width > 767.98) {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    const menu = document.querySelector('.menu__itens') as HTMLElement;
    const hamburger = document.querySelector('.hamburger') as HTMLElement;

    if (menu && hamburger && !menu.contains(event.target as Node) && !hamburger.contains(event.target as Node)) {
      menu.style.display = 'none';
    }
  }

}
