import { Component, OnInit } from '@angular/core';

import Const from 'src/assets/i18n/en.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  const = Const.home;

  constructor() { }

  ngOnInit(): void {
  }

}
