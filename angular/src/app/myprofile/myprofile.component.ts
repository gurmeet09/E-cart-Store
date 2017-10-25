import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute, Params} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Productservice } from '../app.service';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
username;
firstname;
lastname;
emailid;
contactno;
u_name;
f_name;
l_name;
e_mail;
  constructor(private activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.f_name = localStorage.getItem('f_name');
    this.u_name = localStorage.getItem('u_name');
    this.l_name = localStorage.getItem('l_name');
    this.e_mail = localStorage.getItem('e_mail');
    this.username = localStorage.getItem('username');
    this.firstname = localStorage.getItem('firstname');
    this.lastname = localStorage.getItem('lname');

    this.emailid = localStorage.getItem('emailid');

    this.contactno = localStorage.getItem('contactno');
    console.log('firstname', this.firstname);
    console.log('lastname', this.lastname);
  }
  }


