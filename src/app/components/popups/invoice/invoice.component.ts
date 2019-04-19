import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {UserService} from "../../../services/user.service";
import {AuthService} from "../../../services/auth.service";
import {NgxSmartModalService} from "ngx-smart-modal";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnChanges {
  @Input() invoice: any;
  @ViewChild('invoicePrinter') invoicePrinter;

  math = Math;
  ficheList : any;
  opened = {hist: false, modif: false};
  collection;
  userName: string;
  public schengen = ['Autriche',
    'Belgique', 'Grande-bretagne',
    'République Tchèque', 'Danemark', 'Estonie', 'Finlande', 'France', 'Allemagne', 'Grèce', 'Hongrie', 'Islande', 'Italie', 'Lettonie', 'Lituanie', 'Luxembourg', 'Malte', 'Pays-Bas', 'Norvège', 'Pologne', 'Portugal', 'Slovaquie', 'Slovénie', 'Espagne', 'Suède', 'Suisse', 'Liechtenstein'
    , 'AT', 'BE', 'BG', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT'
    , 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB'
  ]
  constructor( public db : AngularFirestore,
               public auth: AuthService,
               public ngxSmartModalService: NgxSmartModalService) {
    this.collection = this.db.collection('invoices_v3');
    this.auth.afAuth.user.subscribe(res => {
      this.userName = res.email.split('@')[0].split('.')[0]+' '+res.email.split('@')[0].split('.')[1]

    })  }
  linkFiche(index, fiche) {
    console.log(fiche)
    let article = this.invoice['articles'][index]

    if (fiche['type'] != 'cash receipt') {
      console.log('TVA sur marge')
      article['tva_margin'] = (article['prix']-fiche['prix'])*0.2
      fiche['linked'] = {order: this.invoice.objectID, index: index}
      article['fiche']= fiche;
      this.invoice['articles'][index] = article;
      this.updateInvoice(this.invoice)
      this.db.collection('fiches_v2').doc(fiche['objectID']).set(fiche)
    } else {
      console.log('TVA intracom')
        article['tva_intracom'] = (article['prix'])*0.2;
        article['tva_recup'] = fiche['prix']*0.2
        fiche['linked'] = {order: this.invoice.objectID, index: index}
        article['fiche']= fiche;
        this.invoice['articles'][index] = article;
        this.updateInvoice(this.invoice)
        this.db.collection('fiches').doc(fiche['objectID']).set(fiche)

    }
  }
  outsideEu() {
    if (!this.invoice['client']['country']) {
      return false
    }
    if (this.schengen.indexOf(this.invoice['client']['country']) > -1) {
      return false
    } else {
      return true
    }
  }
  ngOnChanges() {
    console.log('changes')
    let total  = 0

    if (this.invoice && this.invoice['number']) {
      for (let article of this.invoice['articles']) {
        total = total + parseInt(article['prix'])
      }
      if (this.invoice.shipping) {
        total = total + this.invoice.shipping
      }
      if (this.invoice.discount){
        total = total  - this.invoice.discount

      }

      // if (total != parseInt(this.invoice.total)) {
      //   if (confirm("Is there "+(this.invoice.total-total)+"euros of shipping on this order ?")){
      //     this.invoice.shipping = this.invoice.total-total
      //     this.updateInvoice(this.invoice)
      //   } else {
      //     this.invoice.total = total
      //     this.updateInvoice(this.invoice)
      //   }
      // }
      if(this.invoice['client']['eu'] == undefined) {
        this.invoice['client']['eu'] = !this.outsideEu()
        console.log(this.invoice)
      }
      this.ficheList = undefined
      console.log(this.invoice)
      this.db.collection('fiches', ref => ref.where('order_number', '==', this.invoice['number'])
      ).snapshotChanges().subscribe
      (res => {
        this.ficheList = res.map(a => {
          let data = a.payload.doc.data();
          data['objectID'] = a.payload.doc.id;
          return data
        })
      })
    }



  }
  updateInvoice(invoice) {
    console.log('updateInvoice')
    this.collection.doc(invoice['objectID']).set(invoice)
  }

  refund(index) {
    let item_refunded = this.invoice['articles'][index]
    if (item_refunded.fiche) {
      let fiche = item_refunded.fiche
        delete fiche['linked'];
      fiche['order_number'] = 'N'
      this.db.collection('fiches').doc(fiche['objectID']).set(fiche)

    }
    this.invoice['articles'].splice(index,1)
    if (this.invoice['refunded']) {
      this.invoice['refunded'].push(item_refunded)
    } else {
      this.invoice['refunded']=[item_refunded]
    }
    let time = new Date()
    if (this.invoice['hist']){
      this.invoice['hist'][time.getTime()] = { type : 'refund' , message: item_refunded['modele'] + ' ' + item_refunded['size'],employee: this.userName,}

    } else {
      this.invoice['hist'] = {}
      this.invoice['hist'][time.getTime()] = { type : 'refund' , message: item_refunded['modele'] + ' ' + item_refunded['size'],employee: this.userName,}

    }
    let new_total = 0
    for (let article of this.invoice['articles']) {
      new_total = new_total + article['prix']
    }
    new_total = new_total - this.invoice['discount'] + this.invoice['shipping']
    this.invoice['total'] = new_total
  console.log(this.invoice)
    this.updateInvoice(this.invoice)
    if (this.invoice.articles.length == 0) {
      this.invoice.paid = 'refund';
      this.invoice.total = 0;
      this.invoice.shipping = 0;
      this.invoice.discount = 0;
      this.updateInvoice(this.invoice)
    }
  }

  exchange() {
    alert("This function is comming soon")
  }

  delete(id){
    console.log(id)
    if(confirm("Are you sure to delete the fiche")) {
      console.log("Implement delete functionality here");
      this.collection.doc(id).delete();
      this.ngxSmartModalService.getModal('myModal').close();
    }

  }
}
