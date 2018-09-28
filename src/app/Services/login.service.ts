import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs';
import { Credentials } from 'src/app/Models/Credentials';
import { MsgToken } from 'src/app/Models/MsgToken';
import { map, take } from 'rxjs/operators';
import { Http, Headers, RequestOptions } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  loginUrl = 'http://localhost:3000/user/login';
  validateLogin(cred: Credentials): Observable<any> {
    console.log('in validate Login');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.loginUrl, cred, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    }).pipe(map(res => res));







  }
}
