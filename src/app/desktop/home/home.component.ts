import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../../app.globals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public globals:GlobalsService) { }

  ngOnInit() {
  }

}
