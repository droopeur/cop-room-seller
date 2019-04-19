import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import * as algoliasearch from 'algoliasearch';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  public invoice = { client: {type: 'soc'}};
  public modele: any;
  public success = false;
  public onSend = false;
  public type : any;
  public client : any;
  public index: any;
  public datalist = [];
  public parcelSize = false;
  public isSafari;
  public showItemsAlgolia = false;
  // this.modele = [{}];
  public comptoir = false;
  constructor( private db: AngularFirestore,) {
    this.modele = [{}]
    this.client = algoliasearch('Y91M1SN8OJ', '1735aba96e6b6edd3b4e17180d132f74');
    this.index = this.client.initIndex('shopify_testproducts');
  }

  ngOnInit() {
    if (navigator.userAgent.indexOf("Safari") != -1) {
      this.isSafari = true;
    }
  }
  send(){
    let dateNow = new Date();
    this.invoice['date'] = dateNow.getTime();
    this.invoice['type'] = 'onMargin';
    console.log(this.invoice);
    this.onSend = true;
    let total  = 0;
    this.invoice['articles'] = []
    for(let model of this.modele) {
      if (model['quantity'] !=1) {
        for (let i = 0; i< model['quantity'] ;i++){
          let old_model = JSON.parse(JSON.stringify(model))
          old_model['quantity'] = 1;
          this.invoice['articles'].push(old_model)
        }
      } else {
        this.invoice['articles'].push(model)

      }

      console.log(model)
      total = total + model['prix']*model['quantity']
    }

    this.invoice['total'] = total
    this.db.collection('invoices_v3').add(this.invoice).then(x => {
      this.onSend = false;

      this.success=true;
    })
  }
  search(event,index) {

    if (event != '') {
      this.modele[index]['showAlgo'] = false;
      this.index.search({
        query: event,
        hitsPerPage: 10
      }).then(res => {

          this.datalist = res.hits;
        }
      )
    } else {
      this.showItemsAlgolia = true

    }
  }
  addToModel() {
    console.log(this.modele)
    this.modele.push({})
    console.log(this.modele)
  }
}
