import { Component, OnInit } from '@angular/core';
import {Base64} from '../../services/base64';
import {AngularFirestore} from "angularfire2/firestore";
import * as algoliasearch from 'algoliasearch';
import {ScrollToConfigOptions, ScrollToService} from "@nicky-lenaers/ngx-scroll-to";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  public order : string = ''
  public items = [{qty:'1', showalgo:true}]
  public link_generated : string;
  public client : any;
  public index: any;
  public alert = false;
  public datalist = [];
  public allow_label = true;
  public idem = false;
  public transaction = 'gift';
  public firstname;
  public lastname;
  public isSafari = false;
  public showItemsAlgolia = false;
  public allow_cash = false;
  public onGeneration = false
  public snkrsSizes = [];
  public clothesSizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']
  constructor(
    private db: AngularFirestore,
    private _scrollToService: ScrollToService,
    private auth: AuthService
  ) {
    this.client = algoliasearch('Y91M1SN8OJ', '1735aba96e6b6edd3b4e17180d132f74');
    this.index = this.client.initIndex('shopify_testproducts');
    for (let i = 6;i<=32;i++) {
      this.snkrsSizes.push(i/2)
    }
  }

  shipPriceFr() {
    let size = 0;
    for (let model of this.items) {
      if (!model['qty']) {
        return 0
      }
      size = size + parseInt(model['qty'])
    }
      if (size <= 2) {
        return 15 * size
      } else if (size <= 8) {
        return 10 * size
      } else {
        return 80
      }
    }

  shipPriceEu() {

    let size = 0;
    for (let model of this.items) {
      if (!model['qty']) {
        return 0
      }
      size = size + parseInt(model['qty'])
    }
    if (size <= 2) {
      return 10 * size
    } else if (size <= 8) {
      console.log(8 * size)
      return 8 * size
    } else {
      return 64
    }
  }
  ngOnInit() {
    if (navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
      navigator.userAgent &&
      navigator.userAgent.indexOf('CriOS') == -1 &&
      navigator.userAgent.indexOf('FxiOS') == -1) {
      this.isSafari = true;
    }
    this.auth.afAuth.user.subscribe(res => {
      this.firstname = res.email.split('@')[0].split('.')[0]
      this.lastname = res.email.split('@')[0].split('.')[1]
    })
  }
  addItem() {
    console.log(this.items)
    this.items.push({'showalgo': true, 'qty':'1'})
    console.log(this.items)
    if (this.idem) {
      this.items[this.items.length]['order_number'] = this.items[0]['order_number']
    }
  }
  switchIdem() {
    if (this.idem) {
      for (let i = 1;i< this.items.length; i++) {
        this.items[i]['order_number'] =  this.items[0]['order_number']

      }
    }
  }
  generateLink() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let autoId = '';
    console.log(this.items)
    for (let i = 0; i < 20; i++) {
      autoId += chars.charAt(Math.floor(Math.random() * chars.length))
    }
  this.onGeneration = true;
    console.log({items: this.items, transaction: this.transaction, allow_label: this.allow_label, employee: this.firstname +' '+ this.lastname, allow_cash: this.allow_cash})
    this.db.collection('fiches_generated').doc(autoId).set({items: this.items, transaction: this.transaction, allow_label: this.allow_label, employee: this.firstname +' '+ this.lastname, allow_cash: this.allow_cash}).then(
res => {
  let encoded_order = Base64.encode(autoId);
  this.onGeneration = false
  this.link_generated = 'https://sell.cop-room.com/home?param1=' + encoded_order
  setTimeout(() => {
    console.log(document.getElementById('link'))
    document.getElementById('link').click()
  }, 10)
  this._scrollToService.scrollTo({target: 'link'});
}
    )

    //
    // if (this.order && this.item && this.size) {
    //   let encoded_order = Base64.encode(this.order);
    //   let encoded_item = Base64.encode(this.item);
    //   let encoded_size =  Base64.encode(this.size)
    //   let encoded_prix =  Base64.encode(this.prix)
    //
    //   this.link_generated = 'https://sell.cop-room.com/home?param1=' + encoded_order + '&param2='+encoded_item + '&param3='+encoded_size+ '&param4='+encoded_prix
    //   let selBox = document.createElement('textarea');
    //   selBox.style.position = 'fixed';
    //   selBox.style.left = '0';
    //   selBox.style.top = '0';
    //   selBox.style.opacity = '0';
    //   selBox.value = this.link_generated;
    //   document.body.appendChild(selBox);
    //   selBox.focus();
    //   selBox.select();
    //   document.execCommand('copy');
    //   document.body.removeChild(selBox);
    //   this.alert=true;
    // }
}
  copyMessage(val: string){
    console.log(val)
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
 this.alert=true

  }

  search(event,index) {

    if (event != '') {
      this.items[index]['showalgo'] = false
      this.index.search({
        query: event,
        hitsPerPage: 10
      }).then(res => {
          console.log(res.hits)
          this.datalist = res.hits;
        }
      )
    } else {
      this.items[index]['showalgo'] = true

    }
  }
  iosCopyToClipboard(el) {
    var oldContentEditable = el.contentEditable,
      oldReadOnly = el.readOnly,
      range = document.createRange();

    el.contentEditable = true;
    el.readOnly = false;
    range.selectNodeContents(el);

    var s = window.getSelection();
    s.removeAllRanges();
    s.addRange(range);

    el.setSelectionRange(0, 999999); // A big number, to cover anything that could be inside the element.

    el.contentEditable = oldContentEditable;
    el.readOnly = oldReadOnly;

    document.execCommand('copy');
  }

  checkValid() {
    for (let item of this.items) {
      if (!item['modele'] || !item['size'] || !item['qty'] || !item['price'] || !item['order_number']) {
        return false
      }
    }
    return true

  }
  duplicate(line) {
    this.items.push(    JSON.parse(JSON.stringify(line))
    )
  }
}

