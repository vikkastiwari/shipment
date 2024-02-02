import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Filter } from 'src/app/modules/shipment/models/shipment-model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  selectedFiltersList:Filter[] = [];
  @Input() const!:any;
  @Output() selectedFilters = new EventEmitter<Filter[]>();

  filterOptions = [
    { id: 'Ready for Backroom Pick', label: 'Ready for Backroom Pick', checked: false },
    { id: 'Backroom Pick in Progress', label: 'Backroom Pick in Progress', checked: false },
    { id: 'Ready for Customer Pickup', label: 'Ready for Customer Pickup', checked: false },
    { id: 'Ready for Packing', label: 'Ready for Packing', checked: false },
    { id: 'Packing in Progress', label: 'Packing in Progress', checked: false },
    { id: 'Packed', label: 'Packed', checked: false },
    { id: 'Shipped/Picked', label: 'Shipped/Picked', checked: false },
    { id: 'Cancelled', label: 'Cancelled', checked: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  applyFilters(){
    this.selectedFiltersList = this.filterOptions.filter(item => item.checked === true);
    this.selectedFilters.emit(this.selectedFiltersList);
  }

  resetFilters(){
    this.selectedFiltersList = [];
    this.filterOptions.map((item) => item.checked = false);
  }
}
