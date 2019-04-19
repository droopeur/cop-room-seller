import { Injectable } from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  public schengen = ['Autriche','Germany','Austria','United Kingdom','Spain','Belgium','Sweden','Guadeloupe','French Guiana','Ireland','Cyprus','Malta','Croatia','Netherlands','Romania',
    'République Tchèque','Danemark','Estonie','Finland','France','Deutschland','Greece','Hungary','Island','Italy','Lettonie','Lituanie','Luxembourg','Malte','Pays-Bas','Norvège','Pologne','Portugal','Slovaquie','Slovénie','Espagne','Suède','Suisse','Liechtenstein'
    ,'AT','BE','BG','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT'
    ,'LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','GB'
  ]
  private completeInvoiceList = []
  public filteredInvoiceList  = new BehaviorSubject([]);
  private options = {};
  public TVA;
  constructor(private db: AngularFirestore) {
    this.filteredInvoiceList = new BehaviorSubject([]);
    this.db.collection('invoices_v3', ref => ref.orderBy('date', 'desc'))
      .snapshotChanges().subscribe
    (res => {
      this.TVA = 0
      let arr = []
      res.forEach(a => {
        let data = a.payload.doc.data();
        if (isNaN(data['date'])) {
          let date = new Date(data['date']);

          data['date'] = date.getTime();
        }

        if (Array.isArray(data['client'])) {
          data['old_client'] = data['client']
          data['client'] = {}
        }
        const objectID = a.payload.doc.id;
        data['objectID'] = objectID
        for (let article of data['articles']) {
          if (article['tva_margin']) {
            this.TVA = this.TVA +article['tva_margin']
          } else if (article['tva_intracom']) {
            this.TVA = this.TVA +article['tva_intracom']
            if (article['tva_recup']) {
              this.TVA = this.TVA  - article['tva_recup']
            }


          }
        }
        if (this.schengen.indexOf(data['client']['country']) > -1) {
          data['eu'] = true;
        }
        data['isLinked'] = this.isLinked(data)
        data['status'] = this.isPaid(data)
        arr.push(data)

        });
        this.completeInvoiceList = arr;
        if (this.options) {
          this.filteredInvoiceList.next(this.filterList(this.options, this.completeInvoiceList))
        } else {
          this.filteredInvoiceList.next(this.completeInvoiceList)
        }
      }
    )
  }

  changeOptions(index, newOptions) {
    this.options[index] = newOptions;
    this.filteredInvoiceList.next(this.filterList(this.options, this.completeInvoiceList))
  }

  filterList(options, list) {
    let initlist = list
    let filterFields = Object.keys(options)
    for (let searchFilter of filterFields) {
      let filterOptions = options[searchFilter]
      console.log(filterOptions)
      if (filterOptions['value'] !== '') {
        initlist = this.makeFilteredList(initlist, filterOptions)
      }
    }
    console.log(filterFields)
    return initlist
  }

  research(x, keys, string) {

    if (keys[0] == 'all') {
      let searchStr = x['client']['name'].split(' ')[0] + ' ' +x['client']['name'].split(' ')[1]+' '
      let sstr2 = x['client']['name'].split(' ')[1] + ' ' +x['client']['name'].split(' ')[0] + ' '
      for (let article of x['articles']) {
        searchStr = searchStr+ article['modele'] + ' ' + article['size'] + ' '
        sstr2 = sstr2+ article['modele'] + ' ' + article['size'] + ' '
      }
      if (searchStr.toLowerCase().includes(string.toLowerCase()) || sstr2.toLowerCase().includes(string.toLowerCase())) {
        return true
      } else {
        return false

      }
    } if (string == undefined) {
      if (x[keys[0]] == undefined) {
        return true
      }
    } else {
      let searchStr = ''
      for (let key of keys) {
        if (x[key] !== undefined) {
          searchStr = ' ' + x[key]
        }
      }
      if (searchStr.toLowerCase().includes(string.toLowerCase())) {
        return true
      } else {
        return false

      }
    }


  }

  getValueList(field) {
    let list = []
    for (let item of this.completeInvoiceList) {
      if (item[field] && list.indexOf(item[field]) < 0) {
        list.push(item[field])
      }

    }
    return list
  }

  makeFilteredList(list, filterOptions) {
    let new_list = []
    for (let i = 0; i < list.length; ++i) {
      if (!filterOptions['inverse']) {
        if (filterOptions['type'] == 'number') {
          if( this.researchNumber(list[i],filterOptions['fields'][0], filterOptions['value'])) {
            new_list.push(list[i])

          }
        } else {
          if (this.research(list[i], filterOptions['fields'], filterOptions['value'])) {
            // console.log(x)
            new_list.push(list[i])
          }
        }

      } else {
        if (filterOptions['type'] == 'number') {
        if (!this.researchNumber(list[i], filterOptions['fields'][0], filterOptions['value'])) {
          new_list.push(list[i])

        } } else {
          if (!this.research(list[i], filterOptions['fields'], filterOptions['value'])) {
            // console.log(x)
            new_list.push(list[i])
          }
        }
      }
    }
    return new_list
  }
  researchNumber(x, key, value) {
    const from = value['from'];
    const to = value['to']

    const searchStr = x[key]

    if (from < x[key] && x[key] < to ) {
      return true
    } else {
      return false

    }
  }

  resetInvoices() {
    let filterFields = Object.keys(this.options)
    for (let searchFilter of filterFields) {
      let filterOptions = this.options[searchFilter]
      if(filterOptions['type'] != 'search') {
        delete this.options[searchFilter]
      }
    }
    this.filteredInvoiceList.next(this.filterList(this.options,this.completeInvoiceList))
  }

  isPaid(invoice) {
    if (invoice.paid == 'refunded' || invoice.articles.length == 0) {
      return 'refunded'
    } else if (invoice.paid == 'partially_refunded') {
      return 'partially_refunded'
    } else if (!invoice.paid) {
      return 'unpaid'
    } else {
      return 'paid'
    }
  }

  isLinked(invoice) {
    let total = 0
    for (let article of invoice.articles) {
      if (article['fiche']) {
        total = total +1;
      }
    }
    if (total == invoice.articles.length) {
      return 'fully_linked'
    } else if (total != 0) {
      return 'partially_linked'
    } else {
      return 'unlinked'
    }
  }

}


