import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";
import {NgxSmartModalService} from "ngx-smart-modal";
import * as jsPDF from 'jspdf';
import {AngularFireStorage} from "angularfire2/storage";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {NgbDate, } from "@ng-bootstrap/ng-bootstrap";
import {FichesService} from "../../services/lists/fiches.service";

@Component({
  selector: 'app-fiche-list',
  templateUrl: './fiche-list.component.html',
  styleUrls: ['./fiche-list.component.css']
})
export class FicheListComponent implements OnInit {
  public RepsearchInputPay = '';
  public client : any;
  public index: any;
  fiches = [];
  public id : string
  public fiche={};
  public searchInput = '';
  public RepsearchInput = '';
  public RepsearchInputNote = '';
  public filter = { order_number: 'none', type: 'none', payement:'none' , employee: 'none', invoice: 'none'};
  firstname;
  lastname;
  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;
  progress: SafeStyle;
  datehide = true;

  @ViewChild('direct') direct: ElementRef;
  @ViewChild('consignment') consignment: ElementRef;
  @ViewChild('svgBtn') svgBtn: ElementRef;
  @ViewChild('closed') elementView: ElementRef;
  @ViewChild("canvas_ins") canvas_ins;
  @ViewChild('fichePrinter') fichePrinter;

  public options =  {    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    headers: ["ObjectID", 'prenom', 'nom','date','id','id_nat','id_type','modele', 'size','color','prix','type', 'police_number','payement','mail_paypal','iban','beneficiaire'],
    showTitle: true,
    title: 'asfasf',
    useBom: false,
    removeNewLines: true,
    keys : ["ObjectID", 'prenom', 'nom','date','id','id_nat','id_type','modele', 'size','color','prix','type', 'police_number','payement','mail_paypal','iban','beneficiaire']}

  constructor(private db: AngularFirestore,
              private afStorage: AngularFireStorage,
              private sanitizer: DomSanitizer,
              public ngxSmartModalService: NgxSmartModalService,
              private sanitization:DomSanitizer,
              private route: ActivatedRoute,
              private auth: AuthService,
              public ficheService: FichesService
              ) {
  }


  ngOnInit() {
    console.log('init')
    this.auth.afAuth.user.subscribe(res => {
      this.firstname = res.email.split('@')[0].split('.')[0]
      this.lastname = res.email.split('@')[0].split('.')[1]
    })
    this.ficheService.filteredFicheList.subscribe(res =>
    {
      this.fiches = res
    })

  }

  updateOrderNumb(fiche) {
    console.log(fiche)
    if (fiche['order_number']) {
      this.db.collection('fiches').doc(fiche['objectID']).update(fiche)
    }
  }

  updatePoliceNumb(fiche) {
    console.log(fiche)
      this.db.collection('fiches').doc(fiche['objectID']).update(fiche)

  }

  checkColor(fiche) {
    if (fiche['order_number']){
      return 'border-green'
    } else {
      return 'border-red'
    }
  }

  setFilter(filter, value, inverse = false) {
    if (!inverse) {
      this.ficheService.changeOptions('filter_'+filter, {fields :[filter], type: 'filter', value: value})
    }
    else {
      console.log('inverse')
      this.ficheService.changeOptions('filter_'+filter, {fields :[filter], type: 'filter', value: value, inverse: true})
    }
  }

  valueChangePay(string) {
    this.ficheService.changeOptions('text_payt', {fields :['iban', 'mail_paypal'], type: 'search', value: string})
  }
  valueChange(string) {
    this.ficheService.changeOptions('all', {fields :['all'], type: 'search', value: string})
  }
  valueChangeRep(string) {
    this.ficheService.changeOptions('order_number', {fields :['order_number'], type: 'search', value: string})
  }
  valueChangeNote(string) {
    this.ficheService.changeOptions('note', {fields :['police_number'], type: 'search', value: string})

  }

  assign(fiche){
    this.fiche=fiche;
  }

  getInfos(fiche) {
    console.log(fiche)
    this.fiche=fiche;
    this.db.collection('fiches').doc(fiche['objectID']).update({date: fiche['date']}).then( res => {
      console.log(res)
    })
    this.ngxSmartModalService.getModal('myModal').open()
  }


  checkBg (fiche) {
    if (fiche.type == 'cash receipt') {
      return 'blue'
    } else if (fiche.paid) {
      return 'green'
    }

  }

  isSelected(field,value) {
    if (field=='all') {
      if (this.filter.order_number == 'none' && this.filter.type == 'none' && this.filter.payement=='none' && !this.fromDate && !this.toDate && this.filter.invoice == 'none') {
        return 'selected'
      }
    } else if (this.filter[field] == value) {
      return 'selected'
    }

    return 'not_selected'
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
      this.ficheService.changeOptions('filter_date', {fields :['timed_date'], type: 'number', value: {from: from, to: to}})


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
}

