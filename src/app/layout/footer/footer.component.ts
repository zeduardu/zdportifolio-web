import { Component, OnInit } from '@angular/core';
import { faDiscord, faGitSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGitSquare = faGitSquare;
  faDiscord = faDiscord;

  constructor() { }

  ngOnInit(): void {
  }

}
