import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Input() const!:any;
  searchForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.searchForm = this.fb.group({
      order: [''],
      shipment: [''],
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.email]],
      phoneNumber: [''],
    });
  }

  onReset(){
    this.searchForm.reset();
  }

  onSearch(){
    const filteredSearchTerm = this.removeEmptyProperties(this.searchForm.value);
    this.router.navigate(['/shipment'], { queryParams: filteredSearchTerm });
  }

  private removeEmptyProperties(obj: any): any {
    const newObj: any = {};
    for (const key in obj) {
      if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }
}
