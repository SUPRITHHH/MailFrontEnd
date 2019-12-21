import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  constructor(private http: HttpClient) { }

  login(mail) {
    return this.http.post(`http://localhost:8080/login`, mail);
  }
  register(mail) {
    return this.http.post(`http://localhost:8080/register`, mail);
  }
  changePassword(mail) {
    return this.http.post(`http://localhost:8080/changepassword`, mail);
  }
  inbox(mail) {
    return this.http.post(`http://localhost:8080/inbox`, mail);
  }
  composeMail(mail) {
    return this.http.post(`http://localhost:8080/composemail`, mail);
  }
  sentItems(mail) {
    return this.http.post(`http://localhost:8080/sentitems`, mail);
  }
  delete(mail) {
    return this.http.delete(`http://localhost:8080/delete/${mail}`);
  }
}
