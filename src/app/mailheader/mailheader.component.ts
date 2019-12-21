import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mailheader',
  templateUrl: './mailheader.component.html',
  styleUrls: ['./mailheader.component.css']
})
export class MailheaderComponent implements OnInit {

  constructor(private router: Router) { }
  isLoggedin(): boolean {
    const userDetail = JSON.parse(localStorage.getItem('userdetail'));
    if (userDetail) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    localStorage.removeItem('userdetail');
    this.router.navigateByUrl('');
  }

  ngOnInit() {
  }

}
