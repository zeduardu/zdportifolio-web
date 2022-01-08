import { ActivatedRoute } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss'],
})
export class ContactmeComponent implements OnInit {
  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage = '';

  // @ViewChild('staticAlert', { static: false })
  // staticAlert!: NgbAlert;
  // @ViewChild('selfClosingAlert', { static: false })
  // selfClosingAlert!: NgbAlert;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    //setTimeout(() => this.staticAlert.close(), 20000);

    this._success.subscribe((message) => (this.successMessage = message));
    // this._success.pipe(debounceTime(5000)).subscribe(() => {
    //   if (this.selfClosingAlert) {
    //     this.selfClosingAlert.close();
    //   }
    // });

    this.showSuccessMessage();
  }

  public showSuccessMessage() {const urlParameter = String(this.router.snapshot.paramMap.get('sended'));
    if (urlParameter == 'sended') {
      this.changeSuccessMessage();
    }
  }

  public changeSuccessMessage() {
    this._success.next('Obrigado por me enviar essa mensagem!');
  }
}
