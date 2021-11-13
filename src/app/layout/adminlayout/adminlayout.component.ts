import firebase from 'firebase/app';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/data/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.css']
})
export class AdminlayoutComponent implements OnInit {
  user!: Observable<firebase.User | null>;

  constructor(private authServ: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.authServ.authenticatedUser();
  }

  desconect(): void {
    this.authServ.logout().then(() => this.router.navigate(['']));
  }

}
