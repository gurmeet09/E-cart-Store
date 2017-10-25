import { Component, OnInit, Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
@Injectable()
export class Productservice implements OnInit {
obj: any;
token:string;
flag= false;
test( )
{ this.flag = true }
data: any;
  constructor(private _http: Http) {}

  private url = 'http://localhost:8888/api/v1/User/upload';

  private urlverifyusers: string="http://localhost:8888/api/v1/userverify";

  private urlgetitems='http://localhost:8888/api/v1/getItems';

  PostUsers(Data) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    console.log(Data);
    return this._http.post(this.url, Data, options).map(
    (res: Response) => res.json( ));
    }
    GetItems() {
      return this._http.get(this.urlgetitems).map((res) => res.json());
    }

    TempUser(Data) {
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers });
      console.log(Data);
      return this._http.post(this.urlverifyusers, Data, options).map(
        (res: Response) => res.json());
        }
  setUser(username)
  {
    this.obj = username;
    console.log(this.obj);
  }
getUser(username)
{
  this.obj = username;
  console.log(this.obj);
}

ngOnInit() {

    }
}
