import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgxSmartModalService} from "ngx-smart-modal";
import {AngularFirestore} from "angularfire2/firestore";
import {AuthService} from "../../../services/auth.service";
import {UserService} from "../../../services/user.service";
import {FichePrinterComponent} from "./fiche-printer/fiche-printer.component";
import {ActivatedRoute} from "@angular/router";
import {Base64} from "../../../services/base64";
import {finalize} from "rxjs/operators";
import {AngularFireStorage} from "angularfire2/storage";
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit {
  @Input() fiche: any;
  @ViewChild('fichePrinter') fichePrinter;
  category;
  public id;
  public ficheCollection : any;
  public downloadUrl;
  progress: SafeStyle
  public opened = { hist: false, modif: false,
  }

  constructor(public ngxSmartModalService: NgxSmartModalService,
              public db: AngularFirestore,
              private user: UserService,
              private route: ActivatedRoute,
              private afStorage: AngularFireStorage,
              private sanitization:DomSanitizer,


  ) { }

  ngOnInit() {
  this.ficheCollection = this.db.collection('fiches');
  let id =this.route.snapshot.paramMap.get('id');
    console.log('id: ', id)
    let start = +new Date(); // get unix-timestamp in milliseconds

    if (id) {
      // this.id = Base64.decode(id)
      this.id= id
      console.log(this.id)
      this.db.collection('fiches').doc(this.id).snapshotChanges().subscribe(
        a => {
          console.log(a)
          console.log(a.payload)
          let data = a.payload.data();

          data['objectID'] = a.payload.id;

          if(data['date'] && data['date'].seconds){
            let date = new Date(data['date'].seconds*1000);
            data['date'] = date
            data['timed_date'] = date.getTime()
          } else {
            let date = new Date(data['date']);
            data['date'] = date
            data['timed_date'] = date.getTime()
          }
          if(data['color']){
            data['modele'] = data['modele'] +' '+ data['color']

          }
          // let index = this.searchResults.findIndex(x => x['objectID'] == a.payload.doc.id)
          // if(index  != -1 ){
          //   this.searchResults[index] = data
          // }
          this.fiche = data;
          console.log('time elapsed: ', +new Date() - start,' ms')

        }
      )
    }
  }

  updateFiche(fiche) {
    this.ficheCollection.doc(fiche['objectID']).update(fiche)
  }

  changeStatus(fiche,status) {

    fiche[status]= {employee: this.user.getName().firstname +' '+this.user.getName().lastname, date: new Date()}
    console.log(fiche)
    this.updateFiche(fiche)
  }

  changeDate(fiche, date){

    let newDate: Date = new Date(date);
    newDate.setHours(Math.floor(Math.random() * 20))
    newDate.setMinutes(Math.floor(Math.random() * 61))
    newDate.setSeconds(Math.floor(Math.random() * 101))
    console.log('newDate: ', newDate);
    fiche['date'] = newDate
    fiche['timed_date']= newDate.getTime()

    this.db.collection('fiches').doc(fiche['objectID']).update(fiche)

  }

  getTransaction(fiche) {
    if (fiche['type'] == 'cash receipt') {
      return 'Invoice'
    } else if(fiche['transaction'] == 'dropoff') {
      return 'C. Meetup'
    } else if (fiche['transaction'] == 'invoice') {
      return 'B. Invoice & Ship'
    } else if (fiche['transaction'] == 'gift') {
      return 'A. Ship & gift'
    } else {
      return 'Old Fiche'
    }
  }

  delete(id){
    console.log(id)
    if(confirm("Are you sure to delete the fiche")) {
      console.log("Implement delete functionality here");
      this.db.collection('fiches').doc(id).delete();
      this.ngxSmartModalService.getModal('myModal').close();
    }

  }

  markAsArrived(fiche,category) {
    console.log(fiche)
    fiche['inventory'] = {}
    fiche['inventory']['arrived'] = new Date();
    fiche['inventory']['employee'] = this.user.getName().firstname +' '+this.user.getName().lastname
    fiche['inventory']['category'] = this.category;
    fiche['inventory']['listed'] = {};
    if (fiche['sold_on']){
      delete fiche['sold_on']
    }
    this.db.collection('fiches').doc(fiche['objectID']).set(fiche)
    this.ngxSmartModalService.closeLatestModal()

  }
  upload(event,invoice) {
    console.log(invoice)
    let file = event.target.files[0]
    const date = new Date()
    let refstr = '/cash-receipt/'+date.toISOString().substring(0,10)+'/'+date.getTime();
    const ref = this.afStorage.ref(refstr);
    const task = ref.put(event.target.files[0]);
    task.snapshotChanges().pipe(
      finalize(() => {
        ref.getDownloadURL().subscribe(url => {
          console.log(url);
          this.downloadUrl =  url
          invoice['receipt_ref'] = refstr;
          invoice['receipt_url'] = url
          this.db.collection('fiches').doc(invoice['objectID']).set(invoice)
          // <-- do what ever you want with the url..
        });
      })
    )
      .subscribe(s => {this.progress = this.sanitization.bypassSecurityTrustStyle(((s.bytesTransferred / s.totalBytes) * 100).toString()+'%');

      });



  }
}
