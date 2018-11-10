import { Component, OnInit } from '@angular/core';
import {Base64} from '../../services/base64';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  public order : string
  public item : string
  public size: string
  public link_generated : string
  public alert = false;
  public prix: number;
  constructor() { }

  ngOnInit() {


    let str = "S1234";
    let res = Base64.encode(str)
    console.log(res);
    console.log(Base64.decode(res))
  }

  generateLink() {
    if (this.order && this.item && this.size) {
      let encoded_order = Base64.encode(this.order);
      let encoded_item = Base64.encode(this.item);
      let encoded_size =  Base64.encode(this.size)
      let encoded_prix =  Base64.encode(this.prix)

      this.link_generated = 'https://sell.cop-room.com/home?param1=' + encoded_order + '&param2='+encoded_item + '&param3='+encoded_size+ '&param4='+encoded_prix
      let selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = this.link_generated;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
      this.alert=true;
    }
}
  copyMessage(val: string){
    console.log("test")
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
