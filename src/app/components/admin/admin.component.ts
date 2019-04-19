import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import * as algoliasearch from 'algoliasearch';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import * as jsPDF from 'jsPDF';
import * as html2canvas from 'html2canvas'
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {DeviceDetectorService} from "ngx-device-detector";
import {ConnectionService} from "ng-connection-service";
import {NetworkStatusAngularService} from "network-status-angular";
import {st} from "@angular/core/src/render3";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public lastname = ''
  public firstname = '';
  dock = true;
  mode = 'push';
  public isConnected = true

  public _opened: boolean = true;

  constructor(
    // private db: AngularFirestore, private sanitizer: DomSanitizer
    private auth: AuthService,
    private router: Router,
    public deviceService : DeviceDetectorService,
    private networkStatusAngularService: NetworkStatusAngularService  ) {
    this.networkStatusAngularService.status.subscribe(status => {
      console.log(status); // returns true if it is online or false if it is offline
      this.isConnected = status
    });

    if (this.deviceService.isMobile()) {
      this.dock = false;
      this.mode = 'over';
       this._opened = false

    }
  }


  private _toggleSidebar() {
    this._opened = !this._opened;
  }
  // getName() {
  //   this.auth.afAuth.user.subscribe(res => console.log(res))
  // }
  location() {
if (this.router.url == '/admin/fiche-list' ){
  return ['Achats','Fiches & Factures']
}
    if (this.router.url == '/admin/generator' ){
      return ['Achats','Generateur de fiches']
    }
    if (this.router.url == '/admin/cash-receipt' ){
      return ['Achats','Importateur de factures']
    }
    if (this.router.url == '/admin/invoices/list' ){
      return ['Vente','Factures']
    }
    if (this.router.url == '/admin/invoices' ){
      return ['Vente','Generateur de factures']
    }
return [,'Admin' ]
  }

  ngOnInit() {

    console.log(this.router.url);
    this.auth.afAuth.user.subscribe(res => {
      this.firstname = res.email.split('@')[0].split('.')[0]
      this.lastname = res.email.split('@')[0].split('.')[1]
    })
    this.router.events.subscribe(res => {
      if (this.deviceService.isMobile()) {
        this._opened = false

      }
    })
  }
}
