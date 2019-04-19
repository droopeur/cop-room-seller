import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['../home.component.css', './results.component.css']
})
export class ResultsComponent implements OnInit {
  public label;
  public transac
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(-10,-10);
    this.route
      .queryParams
      .subscribe(params => {
        console.log(params)
        // Defaults to 0 if no query param provided.
        this.label = params['label'];
        this.transac= params['transac']
      });
  }

}
