import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../../app.globals';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  constructor(public globals:GlobalsService) { }

  ngOnInit() {
  }

}
