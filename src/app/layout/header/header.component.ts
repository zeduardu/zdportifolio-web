import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show() {
    let navigation = document.getElementById("navigation");
    if (navigation?.classList.contains("nav-show")) {
      navigation?.classList.remove("nav-show");
      return;
    }      
    navigation?.classList.add("nav-show");
  }
}
