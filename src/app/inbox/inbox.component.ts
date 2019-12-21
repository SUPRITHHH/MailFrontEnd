import { Component, OnInit } from '@angular/core';
import { MailServiceService } from '../mail-service.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  public datas = [];
  public value;

  constructor(private auth: MailServiceService) {
    this.getMail();

  }
  getMail() {
    this.datas = JSON.parse(localStorage.getItem('userdetail'));
    this.value = this.datas.keys;
    this.auth.inbox(this.value).subscribe(res => {


    });




  }


  ngOnInit() {
  }

}
