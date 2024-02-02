import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SearchFormComponent } from './components/search-form/search-form.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
  ]
})
export class HomeModule { }
