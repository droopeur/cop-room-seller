import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {
  hide = false;
  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }
  changeLanguage(string) {
    this.translate.setDefaultLang(string)
  }
}
