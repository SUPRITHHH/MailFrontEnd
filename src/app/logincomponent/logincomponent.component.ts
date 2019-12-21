import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MailServiceService } from '../mail-service.service';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {

  constructor(private auth: MailServiceService) { }
  login(form: NgForm) {
    console.log(form.value);
    this.auth.login(form.value).subscribe(res => {
      if (res != null) {
        localStorage.setItem(`userdetail`, `res`);
      }
    });
  }
  change(form: NgForm) {
    console.log(form.value);
    this.auth.changePassword(form.value).subscribe(res => {
      alert(`password changed`);
    });
  }

  ngOnInit() {
  }

}
