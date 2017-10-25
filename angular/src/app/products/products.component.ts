import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute, Params} from '@angular/router';
import { Productservice } from '../app.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data1: any = [];
  products: any;
  // username;

  constructor(private activatedRoute: ActivatedRoute, private service:Productservice,  public router:Router) {  }

  ngOnInit() {
this.service.GetItems().subscribe(resdata => { console.log(resdata, 'aaa');
this.products = resdata.itemData; });
this.activatedRoute.params.subscribe((params: Params) => {
  // this.username=params['username'];
});


  }
  productlink(event, item){
    console.log('hee',event,item);
  }
  show(productName){
    console.log('hhd',productName);
    this.router.navigate(['/productdetail/' + productName]);
  }
  user(username){
    console.log('hhd',username);
    this.router.navigate(['/myprofile/' + username]);
  }

}
