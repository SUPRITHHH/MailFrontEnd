import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MailServiceService } from '../mail-service.service';

@Component({
  selector: 'app-signupcomponent',
  templateUrl: './signupcomponent.component.html',
  styleUrls: ['./signupcomponent.component.css']
})
export class SignupcomponentComponent implements OnInit {

  constructor(private auth: MailServiceService) { }

  register(form: NgForm) {
    console.log(form.value);
    this.auth.register(form.value).subscribe(res => {
     alert(`succesfully registered`);
    });
  }

  ngOnInit() {
  }

}
