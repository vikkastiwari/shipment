import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { FormGroup } from '@angular/forms';

import Const from 'src/assets/i18n/en.json';
import ShipmentData from 'src/assets/shippement-list.json';
import { Filter, Shipment } from 'src/app/modules/shipment/models/shipment-model';
import { SearchFormModel } from 'src/app/modules/home/models/home-model';

@Component({
  selector: 'app-shippment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {

  searchResults: Shipment[] = []; 
  selectedFilters!:Filter[];
  const = Const.shipment;
  visibleItemCount:number = 10; 
  searchForm!: FormGroup;
  shipmentData = ShipmentData;

  constructor(
    private router:Router, 
    private location: Location, 
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchResults = this.filterResults(params as SearchFormModel);
    });
  }

  onBack(){
    this.location.back();
  }

  onClose(){
    this.router.navigate(['']);
  }

  private filterResults(filterValues: SearchFormModel): Shipment[] {
    return this.shipmentData.Shipments.Shipment.filter((item) => {
      return (
        (!filterValues.order || item.OrderNo.toLowerCase() === filterValues.order.toLowerCase()) &&
        (!filterValues.shipment || item.ShipmentNo.toLowerCase() === filterValues.shipment.toLowerCase()) &&
        (!filterValues.firstName || item.BillToAddress.FirstName.toLowerCase() === filterValues.firstName.toLowerCase()) &&
        (!filterValues.lastName || item.BillToAddress.LastName.toLowerCase() === filterValues.lastName.toLowerCase()) &&
        (!filterValues.email || item.BillToAddress.EMailID.toLowerCase() === filterValues.email.toLowerCase()) &&
        (!filterValues.phoneNumber || item.BillToAddress.DayPhone.toLowerCase() === filterValues.phoneNumber.toLowerCase())
      )
    });
  }

  onApplyFilter(event:Filter[]){
    this.selectedFilters = event;
  }

  // Custom Infinite Scroll Implementation
  private loadMoreItems() {
    if(this.visibleItemCount < this.searchResults.length){
      this.visibleItemCount += 10;
      console.log(this.visibleItemCount);
    }
  }

  private isScrolledToBottom(): boolean {
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    return scrollPosition >= documentHeight;
  }

  @HostListener('window:scroll', ['$event'])
  private onScroll(event: Event): void {
    if (this.isScrolledToBottom()) {
      this.loadMoreItems();
    }
  }
}
