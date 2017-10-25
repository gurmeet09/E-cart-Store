import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Productservice } from '../app.service';
declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form1: any;
names: any = [];
value: any;
E_mail: any;
L_Name: any;
F_Name: any;
U_Name: any;
public loginForm = this
  .fb
  .group({
    name: ['', Validators.required],
    password: ['', Validators.required]
  });
  token: any;
  user: any;
  pass: any;
  constructor(public fb: FormBuilder, public router: Router, public productservice: Productservice) {
    FB.init({
      appId      : '137317346906598',
      cookie     : false,  // enable cookies to allow the server to access the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.10' // use graph api version 2.5
  });
  }

  ngOnInit() {

  }

  onlogin(form1) {
    console.log( form1);
    this.productservice.TempUser(form1)
      .subscribe(resdata => {
      console.log('jello12', resdata.status);
      if(resdata.status == true) {
        this.router.navigate(['/products']);
      }
      else {
        this.router.navigate(['/login']);
      }
    });
  }


fblogin() {
  FB.login((response: any) => {
    if (response.status === 'connected') {
       this.me(response.authResponse.userID, response.authResponse.accessToken);
        // Logged into your app and Facebook.
        this.router.navigate(['/products']);
        console.log('connected', this.me(response.authResponse.userID, response.authResponse.accessToken));
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        console.log('not connected');
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        console.log('logged In');
    }
}, {scope: 'user_friends,email'});
}
me(userId, accessToken) {
  FB.api(
      '/' + userId + '?fields=id,name,first_name,last_name,email,gender,picture.width(150).height(150),age_range,friends',
      (result) => {
          console.log('result===', result);
          this.F_Name = result.first_name;
          this.L_Name = result.last_name;
          this.U_Name = result.name;
          this.E_mail = result.email;
           localStorage.setItem('f_name', this.F_Name);
           localStorage.setItem('u_name', this.U_Name);
           localStorage.setItem('l_name', this.L_Name);
           localStorage.setItem('e_mail', this.E_mail);
          if (result && !result.error) {
}
});
}
Gmaillogin() {

}
}
