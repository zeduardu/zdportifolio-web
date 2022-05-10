import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let navLinks = document.getElementsByClassName("nav-link");
    for (let index = 0; index < navLinks.length; index++) {
      const element = navLinks[index];
      element.addEventListener("click", this.turnNavActive);
    }
  }

  turnNavActive(this: HTMLElement, ev: Event): void {
    ev.preventDefault();
    let current = document.getElementsByClassName("nav-active");
    current[0].classList.remove("nav-active");
    this.classList.add("nav-active");
  }
}
