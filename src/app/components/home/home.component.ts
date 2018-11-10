import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {ActivatedRoute, Router} from '@angular/router';
import {Base64} from '../../services/base64';
import { NgxSmartModalService } from 'ngx-smart-modal';


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

  constructor(public router: Router,
              private db: AngularFirestore,
              private route: ActivatedRoute,
              public ngxSmartModalService: NgxSmartModalService) {
  this.modele = [{}]
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
    this.fiche['paid'] = false;
    this.fiche['type'] = 'direct cash out';
    this.fiche['id_nat'] = 'Francais';
    this.fiche['id_type'] = 'Carte Nationale d\'identite';
    this.route.queryParams.subscribe(params => {
      if (params['param1'] && params['param2'] && params['param3']  && params['param4']) {
        this.disabled = true
        this.modele[0].order_number = Base64.decode(params['param1']);
        this.modele[0].modele = Base64.decode(params['param2']);
        this.modele[0].size = Base64.decode(params['param3']);
        this.modele[0].prix = Base64.decode(params['param4']);

        this.modele[0].quantity = 1;
        console.log(this.modele)
      }
    });
  }
  send(fiche) {
    for (let model of this.modele) {
      for (let i =0; i < model['quantity']; i++) {
        this.fiche['modele'] = model.modele;
        this.fiche['prix'] = model.prix;
        this.fiche['color'] = model.color;
        this.fiche['size'] = model.size;
        if(model.order_number) {
          this.fiche['order_number'] = model.order_number;
        }
        this.fiche['date'] = new Date();
        this.onWait = true;
        console.log(this.fiche)
        this.db.collection('fiches')
          .add(JSON.parse(JSON.stringify(this.fiche)))
          .then(x => {
              this.onWait = false;
              this.success = true;
              this.router.navigate(['/home/results'])
            }
          )
          .catch(err => {
            this.onWait = false;
            this.fail = true
          });
      }

    }
  }

}
