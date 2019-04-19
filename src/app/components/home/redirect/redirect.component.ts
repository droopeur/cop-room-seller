import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {Base64} from "../../../services/base64";

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private auth: AuthService,
              public router : Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.auth.afAuth.authState.subscribe(res => {
      if (res.uid) {
        let fiche = Base64.decode(id);
        console.log(fiche)
        this.router.navigate(['admin','fiche-list',fiche], {relativeTo: this.route})
      } else {
        this.router.navigateByUrl('home/result')

      }
    })
  }

}
