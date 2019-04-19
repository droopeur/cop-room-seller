import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';
import {NgxSmartModalService} from "ngx-smart-modal";
import {InvoiceTemplateComponent} from "./invoice-template/invoice-template.component";
import {NgxNotificationService} from "ngx-notification";
import {ToastrManager} from "ng6-toastr-notifications";
import {NgbDate} from "@ng-bootstrap/ng-bootstrap";
import {InvoiceService} from "../../services/lists/invoice.service";


@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.css','../admin/admin.component.css']
})
export class InvoicesListComponent implements OnInit {
  @ViewChild('invoiceTemplate') invoiceTemplate;
  @ViewChild('invoicePrinter') invoicePrinter;


  public filter = { number: 'none', type: 'none', payement:'none', link: 'none', paid: 'none', eu: 'none' }

  public invoiceList: any;
  public invoice:any = {client:{}};
  public searchResults = [];
  public searchInput = '';
  public searchNotes = '';
  public searchOrderNbInput = '';
  public expanded;
  public TVA
  public ficheList = [];
  public schengen = ['Autriche',
    'Belgique', 'Grande-bretagne',
    'République Tchèque','Danemark','Estonie','Finlande','France','Allemagne','Grèce','Hongrie','Islande','Italie','Lettonie','Lituanie','Luxembourg','Malte','Pays-Bas','Norvège','Pologne','Portugal','Slovaquie','Slovénie','Espagne','Suède','Suisse','Liechtenstein'
,'AT','BE','BG','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT'
,'LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','GB'
  ]
  options =  {    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    headers:["ObjectID", 'client', 'articles','date','notes','number','type','paid', 'total'],
    showTitle: true,
    title: 'asfasf',
    useBom: false,
    removeNewLines: true,
    keys : ["ObjectID", 'client', 'articles','date','notes','number','type','paid', 'total']
  }
  public collection : AngularFirestoreCollection
  public fromDate: any;
  public toDate: any;
  public hoveredDate: any;
  public datehide= true
  constructor( private db: AngularFirestore,
               public invoiceService: InvoiceService,
               public ngxSmartModalService: NgxSmartModalService,
               ) {
  }

  ngOnInit() {
this.invoiceService.filteredInvoiceList.subscribe( res =>{
    this.invoiceList = res;
}
)
  //   this.collection
  // .snapshotChanges().pipe(
  //     map(actions => {
  //       this.TVA = 0;
  //       return actions.map(a => {
  //
  //         let data = a.payload.doc.data();
  //         if (isNaN(data['date'])) {
  //           let date = new Date(data['date']);
  //
  //           data['date'] = date.getTime();
  //         }
  //
  //         if (Array.isArray(data['client'])) {
  //           data['old_client'] = data['client']
  //           data['client'] = {}
  //         }
  //         const objectID = a.payload.doc.id;
  //         for (let article of data['articles']) {
  //           if (article['tva_margin']) {
  //             this.TVA = this.TVA +article['tva_margin']
  //           } else if (article['tva_intracom']) {
  //             this.TVA = this.TVA +article['tva_intracom']
  //             if (article['tva_recup']) {
  //               this.TVA = this.TVA  - article['tva_recup']
  //             }
  //
  //
  //           }
  //         }
  //         return {objectID, ...data};
  //
  //       })
  //
  //     })).subscribe(res =>
  //   {
  //     this.invoiceList = res;
  //     if (this.searchResults==[]){
  //       this.searchResults= res
  //     }
  //   });

  }

  update(){
    for (let data of this.searchResults){
      if (data['number'][0] === 'S' && data['paid2']!=true) {
        console.log('update')
        this.collection.doc(data['objectID']).update({paid2: true}).then(
          res=> {console.log('updated')}
        )

      }
    }

  }

  assign(fiche){
    this.invoice=fiche;
  }

  setFilter(filter, value, inverse = false) {
    if (!inverse) {
      this.invoiceService.changeOptions('filter_'+filter, {fields :[filter], type: 'filter', value: value})
    }
    else {
      this.invoiceService.changeOptions('filter_'+filter, {fields :[filter], type: 'filter', value: value, inverse: true})
    }
  }

  valueChange(string) {
    this.invoiceService.changeOptions('all', {fields :['all'], type: 'search', value: string})
  }
  valueChangeRep(string) {
    this.invoiceService.changeOptions('order_number', {fields :['number'], type: 'search', value: string})
  }
  valueChangeNote(string) {
    this.invoiceService.changeOptions('note', {fields :['police_number'], type: 'search', value: string})

  }

  // valueChange(string) {
  //   if(string=='' || !string) {
  //     this.searchResults = this.invoiceList
  //   }
  //   this.searchResults = [];
  //   for (let i = 0; i < this.invoiceList.length; ++i) {
  //     const keys = Object.keys(this.invoiceList[i]);
  //     if (this.research(this.invoiceList[i], keys, string)) {
  //       // console.log(x)
  //       this.searchResults.push(this.invoiceList[i])
  //     }
  //   }
  //   console.log(this.searchResults)
  // }
  //
  // valueChangeNote(string) {
  //
  //   this.searchResults = []
  //   for (let i = 0; i < this.invoiceList.length; ++i) {
  //     if (this.researchNotes(this.invoiceList[i], string)) {
  //       // console.log(x)
  //       this.searchResults.push(this.invoiceList[i])
  //     }
  //   }
  //   console.log(this.searchResults)
  // }
  research(x, keys, string) {
    let searchString = ''
    for (let line in x.client) {
      searchString = searchString + ' ' + x.client[line]
    }
    searchString = searchString + ' ' + x['number'] +' '+x['total']
    if (searchString.toLowerCase().includes(string.toLowerCase())){
      return true
    } else {
      return false

    }

  }
  researchNotes(x, string) {
    let searchString = ''

    searchString = x['notes']
    if (searchString && searchString.toLowerCase().includes(string.toLowerCase())){
      return true
    } else {
      return false

    }

  }
  getInfos(inv) {
    console.log(inv)
    let total = 0
    for (let article of inv['articles']) {
      if (article['refunded'] != 'refunded') {
        total = total +parseInt(article['prix'])
      }
    }
    console.log(total)
    this.invoice=inv;
    this.ngxSmartModalService.getModal('myModal').open()
  }

  getData() {
    if (this.searchInput =='' && this.searchOrderNbInput =='' && this.searchNotes == '' && this.filter.number == 'none' && this.filter.type =='none' && this.filter.paid =='none' && this.filter.link =='none' && (!this.fromDate && !this.toDate)) {
      return this.invoiceList
    } else {
      return this.searchResults
    }
  }
  researchOrderNumber(x, string) {
    const searchStr = x['number']

    if (searchStr && searchStr.toLowerCase().includes(string.toLowerCase())){
      return true
    } else {
      return false

    }

  }
  // valueChangeRep(string) {
  //   this.searchResults = []
  //   for (let i = 0; i < this.invoiceList.length; ++i) {
  //     if (this.researchOrderNumber(this.invoiceList[i], string)) {
  //       console.log(true)
  //       this.searchResults.push(this.invoiceList[i])
  //     }
  //   }
  //   console.log(this.searchResults)
  // }

  expand(i,invoice) {
    this.invoice = invoice
    if (invoice['objectID'] == this.expanded) {
      this.expanded = undefined;
      this.ficheList = []
    }
    else {
      this.ficheList = []
      this.db.collection('fiches', ref => ref.where('order_number', '==', invoice['number'])
      ).snapshotChanges().subscribe
      (res => {
        this.ficheList = res.map(a => {
          let data = a.payload.doc.data();
          data['objectID'] = a.payload.doc.id;
          return data
        })
      })
      this.expanded = invoice['objectID'];

    }
  }

  getArticles(inv, objectID) {
      for (let article of inv['articles']) {
        if (article['fiche'] && article['fiche']['objectID'] == objectID) {
return true
        }
      }

  }
  linkFiche(index, event){
    this.invoiceTemplate.linkFiche(index,event)
  }
  updateInvoice(invoice) {
    if (invoice['old_client'] && invoice['client']['name'] && invoice['client']['address1'] && invoice['client']['city'] && invoice['client']['country']) {
      delete invoice['old_client']
    }
    this.db.collection('invoices_v3').doc(invoice['objectID']).set(invoice)
  }



  checked(invoice) {
    for(let article of invoice.articles) {
      if (!article.fiche_id) {
        return false
      }
    }
    return true
  }

  isSelected(field,value) {
    if (field=='all') {
      if (this.filter.number == 'none' && this.filter.type == 'none' && this.filter.payement=='none') {
        return 'selected'
      }
    } else if (this.filter[field] == value) {
      return 'selected'
    }

    return 'not_selected'
  }

  getSearchResults() {
    console.log(this.searchResults)

    this.searchResults = this.applyFilter(this.filter.number, 'number', this.invoiceList);
    this.searchResults = this.applyFilter(this.filter.link, 'link', this.searchResults);
    this.searchResults = this.applyFilter(this.filter.paid, 'paid', this.searchResults);
    this.searchResults = this.applyFilter(this.filter.eu, 'eu', this.searchResults);

    console.log(JSON.stringify(this.searchResults))

    return this.searchResults
  }


  applyFilter(filter : string, field: string , list) {
    if (filter == 'none') {
      return list
    }  else if (field == 'eu') {
      let new_list = []
      for (let i =0; i<list.length; i++) {
        if (filter=='true') {
          if (this.schengen.indexOf(list[i]['client']['country']) > -1) {
            new_list.push(list[i])
          }
        } else {
          if (this.schengen.indexOf(list[i]['client']['country']) == -1) {
            new_list.push(list[i])
          }
        }
      }
      return new_list
    }else if (field == 'link') {
      let new_list = []
      for (let i =0; i<list.length; i++) {
        if (this.isLinked(list[i]) == filter) {
          new_list.push(list[i])
        }
      }
      return new_list

    }   else if (field == 'paid') {
      let new_list = []
      for (let i =0; i<list.length; i++) {
        if (this.isPaid(list[i]) == filter) {
          new_list.push(list[i])
        }
      }
      return new_list

    } else {
      let new_list = []
      for (let i =0; i<list.length; i++) {
        if (filter == 'no order') {
          if (!list[i][field] || list[i][field] == '') {
            new_list.push(list[i])
          }
        } else {

          if (list[i][field] && list[i][field].toLowerCase().includes(filter.toLowerCase())) {
            new_list.push(list[i])
          }
        }

      }
      return new_list
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



  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    if ( this.fromDate && this.toDate) {
      this.datehide = true;
      let from = new Date(this.fromDate.year, this.fromDate.month-1, this.fromDate.day).getTime()
      let to = new Date(this.toDate.year, this.toDate.month-1, this.toDate.day).getTime()
      this.invoiceService.changeOptions('filter_date', {fields :['date'], type: 'number', value: {from: from, to: to}})


    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  applyDateFilter(list) {
    if (this.toDate && this.fromDate) {
      let from = new Date(this.fromDate.year, this.fromDate.month-1, this.fromDate.day).getTime()
      let to = new Date(this.toDate.year, this.toDate.month-1, this.toDate.day).getTime()
      console.log(from)
      console.log(to)
      let new_list = []
      for (let i =0; i<list.length; i++) {

        if (from < list[i]['date'] && list[i]['date'] < to ) {
          if( i == 0) {
            console.log(list[i]['date'])
          }
          new_list.push(list[i])
        }


      }
      return new_list
    } else {
      return list
    }
  }

}
