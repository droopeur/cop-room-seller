import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css','../home/home.component.css']
})
export class InvoicesComponent implements OnInit {
  public invoice = {};
  public modele: any;
  public success = false;
  public onSend = false
  // this.modele = [{}];

  constructor( private db: AngularFirestore,) {
    this.modele = [{}]
  }

  ngOnInit() {
  }
  send(){
    let dateNow = new Date();
    this.invoice['client'] = this.invoice['client'].split('\n')
    this.invoice['date'] = dateNow.getTime();
    this.invoice['type'] = 'onMargin';
    console.log(this.invoice);
    this.onSend = true;
    this.invoice['articles'] = this.modele;
    let total  = 0
    for(let model of this.modele) {
      console.log(model)
      total = total + model['quantity']*model['prix']
    }
    this.invoice['total'] = total
    this.db.collection('invoices').add(this.invoice).then(x => {
      this.onSend = false;

      this.success=true;
    })
  }
}
