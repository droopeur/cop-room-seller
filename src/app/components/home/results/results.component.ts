import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['../home.component.css']
})
export class ResultsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(-10,-10);
  }

}
