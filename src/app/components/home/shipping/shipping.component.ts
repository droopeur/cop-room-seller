import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css','../home.component.css']
})
export class ShippingComponent implements OnInit {
  public valid : any;
  public address = {};
  public onLoad = false;
  public received = false;
  public parcelSize = false;
  public response = '';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.address['number_item'] = '1';
    console.log(this.address)
  }
  resolved(captchaResponse: string) {
    if (captchaResponse === null) {
      this.valid = undefined
    } else {

      this.valid = captchaResponse;
    }
  }
  onSubmit() {
    this.onLoad = true
    console.log(this.address);
    console.log(this.valid);
      return this.http.post('https://us-central1-cop-room-seller.cloudfunctions.net/getLabel',
        {valid : this.valid, address: this.address}).subscribe((response : Response) =>{
        this.received=true;
        this.onLoad = false;

      }, error => {
          console.log(error)
        this.response = error.error.text
        this.received=true;
        this.onLoad = false;

      })

  }

  changeParcelSz(bool : boolean){
    this.parcelSize = bool;
    console.log(this.parcelSize)
  }
  logAddress() {
    console.log(this.address)
  }
}
