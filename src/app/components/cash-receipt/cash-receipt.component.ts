import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from "angularfire2/storage";
import {AngularFirestore} from "angularfire2/firestore";
import {finalize, map} from "rxjs/operators";
import {Observable} from "rxjs";
import {
  DomSanitizer,
    SafeHtml,
    SafeUrl,
    SafeStyle
} from '@angular/platform-browser';
import * as algoliasearch from 'algoliasearch';
import {AuthService} from "../../services/auth.service";
import {NgbDate, NgbDateAdapter, NgbDateNativeAdapter, NgbDateNativeUTCAdapter} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cash-receipt',
  templateUrl: './cash-receipt.component.html',
  styleUrls: ['./cash-receipt.component.css']
})
export class CashReceiptComponent implements OnInit {
  public file : any;
  public modele: any = [{}];
  public receipt: any = {};
  public onWait = false;
  public success = false;
  public fail = false;
  public  refstr : string;
  public idem = false;
  public datalist = [];
  public index: any;
public client: any;
  public isSafari;
  public showItemsAlgolia = false;
  progress: SafeStyle;
  public downloadUrl: any;
  public onUpload = false;
  public ttc : true;
  public firstname;
  public routeChange = false;
  public lastname;
  public snkrsSizes = [];
  public clothesSizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']
  date: NgbDate ;
  time;
  constructor(private afStorage: AngularFireStorage,
              private db:AngularFirestore,
              private sanitization:DomSanitizer,
              private auth: AuthService,
              private router : Router,
              private dateAdapter: NgbDateNativeUTCAdapter) {
    this.client = algoliasearch('Y91M1SN8OJ', '1735aba96e6b6edd3b4e17180d132f74');
    this.index = this.client.initIndex('shopify_testproducts');
    for (let i = 6;i<=32;i++) {
      this.snkrsSizes.push(i/2)
    }
  }

  ngOnInit() {
    let date = new Date();
    console.log(date.getDate())
    this.date = new NgbDate(date.getFullYear(),date.getMonth()+1,date.getDate())
    console.log(this.date)
    this.time = {hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()}
    this.auth.afAuth.user.subscribe(res => {
      this.firstname = res.email.split('@')[0].split('.')[0]
      this.lastname = res.email.split('@')[0].split('.')[1]
    })
    this.receipt['type'] = 'cash receipt';
    this.modele[0]['quantity'] = 1;
    if (navigator.userAgent.indexOf("Safari") != -1) {
      this.isSafari = true;
    }
    this.router.events.subscribe(res => {
      if(!this.routeChange){
        this.routeChange=true
        if (confirm('changes will be lost and fiche has not been send, click \'OK\' to quit, \'Cancel\' to stay')) {
          this.router.navigateByUrl(res['url'])
        } else {
          this.router.navigate([this.router.url])
        }
      }


    })
  }
  switchIdem() {
    if (this.idem) {
      for (let i = 1;i< this.modele.length; i++) {
        this.modele[i]['order_number'] =  this.modele[0]['order_number']

      }
    }
  }
  addItem() {
    console.log(this.modele)
    this.modele.push({showalgo: true, quantity: 1})
    if (this.idem) {
      this.modele[this.modele.length]['order_number'] = this.modele[0]['order_number']
    }
    console.log(this.modele)

  }
  upload(event) {
    this.onUpload = true
if (this.downloadUrl) {
this.deleteUpload()
}

    this.file = event.target.files[0]
    console.log(this.file)
    const date = new Date()
    this.refstr = '/cash-receipt/'+date.toISOString().substring(0,10)+'/'+date.getTime();
    console.log(this.refstr)
     const ref = this.afStorage.ref(this.refstr);
    const task = ref.put(event.target.files[0]);
    task.snapshotChanges().pipe(
      finalize(() => {
       ref.getDownloadURL().subscribe(url => {
          console.log(url);
         this.downloadUrl =  url// <-- do what ever you want with the url..
         this.onUpload = false;
        });
      })
    )
      .subscribe(s => {this.progress = this.sanitization.bypassSecurityTrustStyle(((s.bytesTransferred / s.totalBytes) * 100).toString()+'%');

  });



  }

  deleteUpload() {
      this.afStorage.ref(this.refstr).delete()
      this.downloadUrl = undefined
      this.progress = undefined

  }

  sendReceipt() {
    for (let model of this.modele) {
      for (let i =0; i < model['quantity']; i++) {
        this.receipt['employee'] = this.firstname + ' ' + this.lastname
        this.receipt['modele'] = model.modele;
        this.receipt['prix'] = model.prix;
        this.receipt['color'] = model.color;
        this.receipt['size'] = model.size;
        if ( this.downloadUrl ) {
          this.receipt['receipt_url'] = this.downloadUrl;
          this.receipt['receipt_ref'] = this.refstr;
        }
        let today = new Date()
        if (this.time && this.date && this.date.day != today.getDay() && this.date.month-1 != today.getMonth() ) {
          console.log(this.date)
          console.log(this.time)
          let date =  new Date(this.date.year, this.date.month-1, this.date.day)
          console.log(date)
          console.log(this.time)
          date.setHours(this.time.hour)
          date.setHours(this.time.second)

          this.receipt['date'] = date;

        } else {
          this.receipt['date'] = new Date();

        }

        if(model.order_number) {
          this.receipt['order_number'] = model.order_number;
        }
        let done = false
        this.onWait = true;
        console.log(this.receipt)
        this.db.collection( 'fiches')
          .add(JSON.parse(JSON.stringify(this.receipt)))
          .then(x => {
              this.onWait = false;
              this.success = true;
              done=true;
              let date = new Date()
            this.time = {hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()}
            this.routeChange = true}
          )
          .catch(err => {
            this.onWait = false;
            this.fail = true;
          })

          }




    }
  }

  sendable() {
    if (!this.modele[0].modele || !this.receipt['nom'] || this.onUpload) {
      return true
    } else {
      return false
    }
  }

  inputDisabled() {
    if (this.progress && this.progress.toString() !='SafeValue must use [property]=binding: 100% (see http://g.co/ng/security#xss)'){
      return true

    } else {
      return false
    }  }

  search(event,i) {

    if (event != '') {
      this.modele[i]['showalgo'] = false
      this.index.search({
        query: event,
        hitsPerPage: 10
      }).then(res => {

          this.datalist = res.hits;
        }
      )
    } else {
      this.modele[i]['showalgo'] = true

    }
  }
  duplicate(line) {
    this.modele.push(    JSON.parse(JSON.stringify(line))
    )
  }
}
