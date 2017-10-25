import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Productservice } from '../app.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];
  constructor(private _fb: FormBuilder,public productservice : Productservice) { }
//   User:{
//     firstname:String,
//     lastname:String,
//     username:String,
//     email:String,
//     password:String

// }={
// firstname:'',
//     lastname:'',
//     username:'',
//     email:'',
//     password:''
// }
  model: any = {};
  loading = false;

save( form) {
    this.submitted = true;
    console.log( form.value);
    // console.log(this.myForm)
    this.productservice.PostUsers(form.value)
      .subscribe(resdata => {
    
      console.log(resdata)
      })
}

ngOnInit() {
   
    this.myForm = this._fb.group({
        firstname: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
        lastname: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
        email: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
        username: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
        password: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
        
    });
}
}



