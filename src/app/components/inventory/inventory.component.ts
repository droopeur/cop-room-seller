import {Component, OnInit} from '@angular/core';
import {AngularFireStorage} from "angularfire2/storage";
import {AngularFirestore} from "angularfire2/firestore";
import {AuthService} from "../../services/auth.service";
import {NgxSmartModalService} from "ngx-smart-modal";
import {Router} from "@angular/router";
import {Options} from "ng5-slider";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css', '../fiche-list/fiche-list.component.css']
})
export class InventoryComponent implements OnInit {
  public fichesCollection;
  public fiche = {};
  public firstname;
  public lastname;
  public searchResults;
  public searchInput;
  public category;
  public route;
  hideSlider = true;
  minValue: number = 0;
  maxValue: number = 100;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 1
  };
  public downloadUrl;
  public progress;
  public filter = {order_number: 'none', type: 'none', inventory: 'none', category: 'none', date: 'none'}

  constructor(public db: AngularFirestore, public auth: AuthService, public ngxSmartModalService: NgxSmartModalService, public router: Router) {
  }

  parseRes(list) {
    console.log(list.length)
    const new_list = []
    this.route = this.router.url.split('/')[3]
    if (this.route == 'all') {

    } else if (this.route == 'pending') {

      for (let i = 0; i < list.length; i++) {

        if (list[i]['inventory']) {
new_list.push(i)       }
      }
    } else if (this.route=='stock') {
      console.log('stock')
      for (let i = 0; i < list.length; i++) {
        if (list[i]['inventory']==undefined) {
          new_list.push(i)           }
      }
    }
    for (let i= 0; i < new_list.length; i++  ) {
      list.splice(new_list[i] - i,1)
    }
    return list
  }

  ngOnInit() {
    let today = new Date().getTime()
    this.auth.afAuth.user.subscribe(res => {
      this.firstname = res.email.split('@')[0].split('.')[0]
      this.lastname = res.email.split('@')[0].split('.')[1]
    })
    this.db.collection('fiches', ref => ref.where('order_number', '==', 'N')
    ).snapshotChanges().subscribe(res => {
      const res2 = res.map(a => {
        const data = a.payload.doc.data();
        const objectID = a.payload.doc.id;
        if(data['date'] && data['date'].seconds){
          let date = new Date(data['date'].seconds*1000);
          data['date'] = date
          data['timed_date'] = date.getTime()
        } else {
          let date = new Date(data['date']);
          data['date'] = date
          data['timed_date'] = date.getTime()
        }

        data['date_until_stock'] = Math.round((today - data['timed_date'])/8.64e+7);
        if( data['date_until_stock'] > this.options.ceil) {
          this.options.ceil = data['date_until_stock'];
          this.maxValue = this.options.ceil
        }
        return { objectID, ...data };
      });
      const res3 = this.parseRes(res2)
      this.fichesCollection = res3;
      console.log(this.options.ceil)
    })

  }

  markAsArrived(fiche, category) {
    console.log(fiche)
    fiche['inventory'] = {}
    fiche['inventory']['arrived'] = new Date();
    fiche['inventory']['employee'] = this.firstname + ' ' + this.lastname;
    fiche['inventory']['category'] = this.category;
    fiche['inventory']['listed'] = {};
    if (fiche['sold_on']){
      delete fiche['sold_on']
    }
    this.db.collection('fiches').doc(fiche['objectID']).set(fiche)
    this.ngxSmartModalService.closeLatestModal()

  }

  research(x, keys, string) {
    const searchStr = x['nom'] + ' ' + x['prenom'] + ' ' + x['modele'] + ' ' + x['size'] + ' ' + x['price'] + ' ' + x['mail_paypal'] + x['beneficiaire']
    const sstr2 = x['prenom'] + ' ' + x['nom'] + ' ' + x['modele'] + ' ' + x['size'] + ' ' + x['price'] + ' ' + x['mail_paypal'] + x['beneficiaire']
    if (searchStr.toLowerCase().includes(string.toLowerCase()) || sstr2.toLowerCase().includes(string.toLowerCase())) {
      return true
    } else {
      return false

    }

  }

  researchOrderNumber(x, string) {
    const searchStr = x['order_number']

    if (searchStr && searchStr.toLowerCase().includes(string.toLowerCase())) {
      return true
    } else {
      return false

    }

  }

  researchPolice(x, string) {
    const searchStr = x['police_number']

    if (searchStr && searchStr.toLowerCase().includes(string.toLowerCase())) {
      return true
    } else {
      return false

    }

  }

  applyFilter(filter: string, field: string, list) {
    if (filter == 'none') {
      return list
    } else if (field=='inventory' && filter=='transit') {
      let new_list = []
      for (let i = 0; i < list.length; i++) {
        if (!list[i]['inventory']) {

          new_list.push(list[i])

        }

      }
      return new_list
    } else if(field=='inventory' && filter=='authentified') {
      let new_list = []
      for (let i = 0; i < list.length; i++) {
        if (list[i]['inventory'] && list[i]['inventory']['arrived']) {

          new_list.push(list[i])

        }

      }
      return new_list
    } else if(field=='inventory' && filter=='paid') {
      let new_list = []
      for (let i = 0; i < list.length; i++) {
        if (list[i]['paid']) {

          new_list.push(list[i])

        }

      }
      return new_list
    }  else if (field=='category') {
      let new_list = []
      for (let i = 0; i < list.length; i++) {
        if (list[i]['inventory']['category']==filter) {

          new_list.push(list[i])

        }

      }
      return new_list
    } else {
      let new_list = []
      console.log(field)
      console.log(filter)
      for (let i = 0; i < list.length; i++) {
        if (list[i][field]==filter) {

          new_list.push(list[i])

        }

      }
      console.log(new_list)
      return new_list
    }
  }

  getSearchResults() {
    this.searchResults = this.valueChange(this.searchInput)
    this.searchResults = this.applyFilter(this.filter.inventory, 'inventory', this.searchResults);
    this.searchResults = this.applyFilter(this.filter.category, 'category', this.searchResults);

    this.searchResults = this.applyFilter(this.filter.type, 'type', this.searchResults);
    if (this.filter.date != 'none'){
      this.searchResults = this.applyDateFilter(this.minValue,this.maxValue, this.searchResults)
    }
    return this.searchResults
  }

  valueChange(string) {
if (!string || string =='') {
  return this.fichesCollection
} else {
  const new_fiches = this.fichesCollection;
  this.searchResults = []
  for (let i = 0; i < new_fiches.length; ++i) {
    const keys = Object.keys(new_fiches[i])
    if (this.research(new_fiches[i], keys, string)) {
      // console.log(x)
      this.searchResults.push(new_fiches[i])
    }
  }
  return this.searchResults
}
     }


  changeDate(fiche, date) {
    console.log('fiche: ', fiche);
    console.log('date: ', date);
    let newDate: any = new Date(date);
    console.log('newDate: ', newDate);
    newDate = newDate.getTime();
    if (!isNaN(newDate)) {
      fiche['date'] = newDate
      this.db.collection('fiches').doc(fiche['objectID']).update(fiche)
    } else {
      this.ngxSmartModalService.getModal('errorModal').open()
    }
  }

  changeModele(fiche, modele) {
    if (modele != '') {
      fiche['modele'] = modele;
      this.db.collection('fiches').doc(fiche['objectID']).update(fiche)
    }

  }

  changeSize(fiche, size) {
    if (size != '') {
      fiche['size'] = size;
      this.db.collection('fiches').doc(fiche['objectID']).update(fiche)
    }

  }

  changePrice(fiche, price) {
    if (price != '') {
      fiche['prix'] = price;
      this.db.collection('fiches').doc(fiche['objectID']).update(fiche)
    }

  }

  changeMail() {
    if (this.fiche['mail_paypal'] && this.fiche['mail_paypal'] != '') {
      this.db.collection('fiches').doc(this.fiche['objectID']).update(this.fiche).then(res => {
          this.ngxSmartModalService.getModal('mailModal').close()

        }
      )
    }
  }

  getInfos(fiche) {
    console.log(fiche)
    this.fiche = fiche;
    this.ngxSmartModalService.getModal('myModal').open()
  }

  changeName(fiche, name) {
    if (name != '') {
      this.db.collection('fiches').doc(fiche['objectID']).update(fiche)
    }

  }



  updatePoliceNumb(fiche) {
    console.log(fiche)
    this.db.collection('fiches').doc(fiche['objectID']).update(fiche)

  }

  checkColor(fiche) {
    if (fiche['order_number']) {
      return 'border-green'
    } else {
      return 'border-red'
    }
  }

  assign(fiche) {
    console.log(fiche)
    this.fiche = fiche;
    // this.ngxSmartModalService.get('arrivedModal2').open()
  }

  checkBg(fiche) {
    if (fiche['inventory']) {
      return 'green'
    }

  }

  isSelected(field, value) {
    if (field == 'all') {
      if (this.filter.order_number == 'none' && this.filter.type == 'none' && this.filter.category == 'none' && this.filter.date == 'none') {
        return 'selected'
      }
    } else if (this.filter[field] == value) {
      return 'selected'
    }

    return 'not_selected'
  }

  putListedOn(fiche,string, value) {
    console.log(fiche['inventory'])
    if (value) {
      if (fiche['inventory']['listed']['SG'] || fiche['inventory']['listed']['FC']) {
        fiche['inventory']['listed'] = {}
        fiche['inventory']['listed'][string] = value;
      } else {
        if (string == 'SG' || string == 'FC') {
          fiche['inventory']['listed'] = {}
          fiche['inventory']['listed'][string] = true;
        } else {
          fiche['inventory']['listed'][string] = true;
        }
      }
    } else {
      fiche['inventory']['listed'][string] = value;
    }
    this.db.collection('fiches').doc(fiche['objectID']).update(fiche)

  }
  sold(fiche) {
    console.log(fiche)
          delete fiche['inventory'];
          console.log('inventory deleted', fiche)

    fiche['sold_by'] = this.firstname + ' ' + this.lastname;

    fiche['order_number'] = fiche['sold_order_number']
      this.db.collection('fiches').doc(fiche['objectID']).set(fiche)
    this.ngxSmartModalService.closeLatestModal()

  }

  changeOrderNumb(fiche) {
    console.log(event)
    if (fiche['sold_on'] == 'StockX') {
      fiche['sold_order_number'] = 'SX'
    } else if (fiche['sold_on'] == 'Shopify') {
      fiche['sold_order_number'] = 'S'
    } else if (fiche['sold_on'] == 'Stadium Goods') {
      fiche['sold_order_number'] = 'SG'
    } else if (fiche['sold_on'] == 'Flight Club') {
      fiche['sold_order_number'] = 'FC'
    }
  }

  changeSlider(event) {
    console.log(event);
    this.filter.date = 'true'
  }

  applyDateFilter(from, to, list) {

    console.log(from)
    console.log(to)
    let new_list = []
    for (let i =0; i<list.length; i++) {

      if (from < list[i]['date_until_stock'] && list[i]['date_until_stock'] < to ) {
        if( i == 0) {
          console.log(list[i]['date_until_stock'])
        }
        new_list.push(list[i])
      }


    }
    return new_list
  }
  openSold(fiche) {
    this.assign(fiche);
    if (fiche['inventory']['listed']['SH']){
      this.fiche['sold_on'] = "Shopify";

    } else if (fiche['inventory']['listed']['FC']) {
      this.fiche['sold_on'] = "Flight Club";

    } else if (fiche['inventory']['listed']['SG']) {
      this.fiche['sold_on'] = "Stadium Goods";

    } else {
      this.fiche['sold_on'] = "StockX";

    }
    this.changeOrderNumb(fiche);
    this.ngxSmartModalService.open('soldModal')
  }
}

