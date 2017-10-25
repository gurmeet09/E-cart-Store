import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
productName;
  constructor(private activatedRoute:ActivatedRoute, public router:Router) { }
  productdescription:any = [
    {
      "productImage":"http://www.reliancedigital.in/media/catalog/product/cache/9/image/1800x/040ec09b1e35df139433887a97daa66f/l/y/lyf-jiofi-_router-_m2-491193575-i-1_2.png",
      "productName":"Jiofi",
      "description":"The JioFi is a personal hotspot - the kind of thing you've seen some all mobile carriers. The Reliance JioFi is a small device that will fit into your pocket, and acts as a bridge between the 4G network and a local Wi-Fi network that it creates, which your phone, laptop, and other devices can connect to."
  },
  {
      "productImage":"https://n1.sdlcdn.com/imgs/f/d/o/Micromax-Spark-Vdeo-Q15-8GB-SDL092310467-1-f434c.jpg",
      "productName":"Mobile",
      "description":"A mobile phone (also known as a wireless phone, cell phone, or cellular telephone) is a small portable radio telephone. ... It works by communicating with a nearby base station (also called a cell site) which connects it to the main phone network."
  },
  {
      "productImage":"http://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05487351.png",
      "productName":"Laptop",
      "description":"A laptop, often called a notebook or notebook computer, is a small, portable personal computer with a clamshell form factor, an alphanumeric keyboard on the lower part of the clamshell and a thin LCD or LED computer screen on the upper part, which is opened up to use the computer"
  }
  ];
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.productName=params['productName']
    })
  }

}
