import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/data/services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  {
  email!: string;
  password!: string;
  message!: string;
  sendEmail!: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}



  logon() {
    if (this.email == undefined || this.password == undefined) {
      this.message = 'Usuário ou senha precisam ser preenchidos.';
      return;
    }
    this.authenticationService
      .login(this.email, this.password)
      .then(() => {
        this.router.navigate(['admin/dashboard']);
      })
      .catch((error) => {
        console.log('Deu erro!');
        let details: string;
        switch (error.code) {
          case 'auth/user-not-found': {
            details = 'Não existe usuário com o e-mail informado';
            break;
          }
          case 'auth/invalid-email': {
            details = 'E-mail digitado é inválido';
            break;
          }
          case 'auth/wrong-password': {
            details = 'Senha inválida';
            break;
          }
          default: {
            details = error.message;
            break;
          }
        }
        this.message = details;
      });
  }

  async linkSend() {
    const {value: email} = await Swal.fire({
      title: 'Informe o email cadstrado',input: 'email', inputPlaceholder: 'email'
    });

    if (email) {
      this.authenticationService
        .resetPassword(email)
        .then(() => {
          this.sendEmail = true;
          this.message = `E-mail enviado para ${email} com instruções de recuperação.`;
        })
        .catch(error => {
          this.message = `Um erro ocorreu ao tentar localizar o e-mail. Detalhes ${error.message}`
        });
    }
  }

  messageClose() {
    //TO DO
  }
}
