import { Component } from '@angular/core';

import Const from './utils/en.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ibm-shippent-search';
  const = Const.header;
}
