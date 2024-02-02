import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import Const from 'src/assets/i18n/en.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ibm-shippent-search';
  const = Const.header;

  constructor(private translate: TranslateService){
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

}
