import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFirestore} from 'angularfire2/firestore';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private translate: TranslateService, public router: Router){
    if (navigator.language.includes('fr')){
      translate.setDefaultLang('fr');
    }
    else {
      translate.setDefaultLang('en');
    }

    if (window.navigator['standalone']) {
      console.log('display-mode is standalone');
      this.router.navigate(['/login'])
    }
  }


}
