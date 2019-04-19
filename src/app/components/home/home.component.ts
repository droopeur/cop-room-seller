import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {ActivatedRoute, Router} from '@angular/router';
import {Base64} from '../../services/base64';
import { NgxSmartModalService } from 'ngx-smart-modal';
import * as algoliasearch from 'algoliasearch';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public fiche = {};
  public onWait = false;
  public success = false;
  public disabled = false
  public modele: any;
  public fail = false;
  public date = new Date();
  public client : any;
  public index: any;
  public datalist = [];
  public address = {};
  public valid : any;
  public allow_label = false;
  public payement : string;
  public shippingGenerator = false;
  public shipFromFR = false;
  public allow_cash = false;
  constructor(public router: Router,
              private db: AngularFirestore,
              private route: ActivatedRoute,
              public ngxSmartModalService: NgxSmartModalService,
              private http: HttpClient
              ) {
  this.modele = [];
    this.client = algoliasearch('Y91M1SN8OJ', '1735aba96e6b6edd3b4e17180d132f74');
    this.index = this.client.initIndex('shopify_testproducts');
  }

  trackByIdx(index: number, obj: any): any {
    return index;
  }
  tsprint(fiche) {
    console.log(fiche)
  }
  ngOnInit() {
    console.log(navigator.language)
    this.fiche['payement'] = 'Paypal';
    this.payement = 'Paypal';
    this.fiche['paid'] = false;
    this.fiche['type'] = 'direct cash out';
    this.fiche['id_nat'] = 'Francais';
    this.fiche['id_type'] = 'Carte Nationale d\'identite';
    this.fiche['type'] = 'direct cash out';
    this.route.queryParams.subscribe(params => {
      if (params['param1']) {
        let order_number = Base64.decode(params['param1']);
        this.disabled = true
        console.log(order_number.slice(0,12))
        this.db.collection('fiches_generated').doc(order_number.slice(0,20)).valueChanges().subscribe(
          res => {
            console.log(res)
if (res != undefined) {
  for (let i=0; i<res['items'].length; i++){
    this.modele.push({})
    this.modele[i].modele = res['items'][i]['modele'];
    this.modele[i].size = res['items'][i]['size'];
    this.modele[i].prix = res['items'][i]['price'];
    this.modele[i].quantity = res['items'][i]['qty'];
    this.modele[i].order_number = res['items'][i]['order_number']
    this.modele[i].image = res['items'][i]['image']


  }
// this.fiche['order_number'] = res['order']
  this.allow_label = res['allow_label']
  if (this.lenItem()==1) {
    this.address['number_item'] = 1
  } else {
    this.address['number_item'] = 2
  }
  this.fiche['employee'] = res['employee']

  this.fiche['transaction'] = res['transaction']
  this.allow_cash = res['allow_cash']

}

          }
        )
console.log(this.allow_label)
        console.log(this.modele)
      } else {
        window.location.assign('https://cop-room.com')
      }
    });
  }
  checkFr() {
    if (this.address['country'] != 'FR') {
      this.shipFromFR = false;
    } else {
      this.shipFromFR = true;
    }
  }
  shipPrice() {


    let size = 0;
    for (let model of this.modele) {
      size = size + parseInt(model.quantity)
    }
    if (!this.shipFromFR) {

      if (size <= 2) {
        return 15 * size
      } else if (size <= 8) {
        return 10 * size
      } else {
        return 80
      }
    } else {

      if (size <= 2) {
        return 10 * size
      } else if (size <= 8) {
        console.log(8*size)
        return 8 * size
      } else {
        return 64
      }
    }

  }

  lenItem() {
    let size = 0;
    for (let model of this.modele) {
      size = size + parseInt(model.quantity)
    }
    return size
  }

  checkLabel(fiche) {
    this.onWait = true;
    if( !this.shippingGenerator && this.allow_label && fiche['transaction'] != 'dropoff') {
      this.http.post('https://us-central1-cop-room-seller.cloudfunctions.net/getLabel',
        {valid : this.valid, address: this.address}).subscribe((response : Response) =>{
console.log(response)

        this.onWait = false;
if(response['selectedRate']['rate'] > 140){
  this.fail = true
} else {
  this.fail = false;
  this.send(fiche, true,response)
}

      }, error => {
        console.log(error)
        this.fail = true;

      })
    } else {
      this.send(fiche,false,undefined)
    }
  }
  send(fiche, bool, shipment) {
console.log('fiche',fiche)
    for (let model of this.modele) {
      if (!model['quantity']) {
        model['quantity'] = 1
      }
      for (let i =0; i < model['quantity']; i++) {
        this.fiche['modele'] = model.modele;
        if (this.fiche['transaction'] != 'dropoff' && (this.allow_label && !this.shippingGenerator)) {
          this.fiche['prix'] = model.prix - (this.shipPrice() / this.modele.length);
        } else {
          this.fiche['prix'] = model.prix
        }
        this.fiche['color'] = model.color;
        this.fiche['size'] = model.size;
        if(model.order_number) {
          this.fiche['order_number'] = model.order_number;
        }
        this.fiche['date'] = new Date();
        if (shipment){
          this.fiche['shipment'] = shipment
        }
        console.log(this.fiche)
        this.db.collection('fiches')
          .add(JSON.parse(JSON.stringify(this.fiche)))
          .then(x => {
            console.log(x.id);
            this.onWait = false;
            this.success = true;

  this.router.navigate(['/home/results'],{ queryParams: { label: bool , transac: fiche['transaction']} } )

            }
          )
          .catch(err => {
            this.onWait = false;
            this.fail = true
          });
      }

    }
  }
  search(event) {

    if (event != '') {
      this.index.search({
        query: event,
        hitsPerPage: 10
      }).then(res => {

          this.datalist = res.hits;
        }
      )
    }
  }
  resolved(captchaResponse: string) {
    if (captchaResponse === null) {
      this.valid = undefined
    } else {

      this.valid = captchaResponse;
    }
  }
  deleteModel(index) {
    this.modele.splice(index,1)
  }

  getTotal() {
   let total: number = 0.0;
   if (this.fiche['transaction'] == 'dropoff') {
     for (let model of this.modele) {
       total = total +parseFloat(model['prix'])*parseInt(model['quantity'])
     }
     if (total > 0 ) {
       return total

     } else  {
       return 0
     }
   } else if (this.allow_label && !this.shippingGenerator) {
      for (let model of this.modele) {
        total = total + parseFloat(model['prix'])*parseInt(model['quantity'])
      }
     total = total - this.shipPrice()
     if (total > 0 ) {
       return total

     } else  {
       return 0
     }

    } else {
      for (let model of this.modele) {
        total = total + parseFloat(model['prix'])*parseInt(model['quantity'])
      }
     if (total > 0 ) {
       return total

     } else  {
       return 0
     }    }
  }
  getTransaction(fiche) {
    if(fiche['transaction'] == 'dropoff') {
      return 'C. Meetup'
    } else if (fiche['transaction'] == 'invoice') {
      return 'B. Invoice & Ship'
    } else if (fiche['transaction'] == 'gift') {
      return 'A. Ship & gift'
    } else {
      return 'Old Fiche'
    }
  }
}
