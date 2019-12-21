import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MailServiceService } from '../mail-service.service';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  public value = 'send';

  constructor(private auth: MailServiceService) { }
  composemail(form: NgForm) {
    console.log(form.value);
    this.auth.composeMail(form.value).subscribe(res => {
      alert(`msg send succesfully`);
    });
  }
  send() {
    this.value = `sent`;
  }

  ngOnInit() {
  }

}
