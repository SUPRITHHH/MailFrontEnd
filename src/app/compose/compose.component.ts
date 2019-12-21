import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  public value = 'send';

  constructor() { }
  composemail(form: NgForm) {
    console.log(form.value);

  }
  send() {
    this.value = `sent`;
  }

  ngOnInit() {
  }

}
