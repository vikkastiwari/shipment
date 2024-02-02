import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent implements OnInit {

  @Input() const!:any;
  @Input() isSummary:boolean = false;

  constructor(
    private router:Router, 
    private location: Location, 
  ) { }

  ngOnInit(): void {
  }

  onBack(){
    this.location.back();
  }

  onClose(){
    this.router.navigate(['']);
  }

}
