import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { FormGroup } from '@angular/forms';

import Const from 'src/app/utils/en.json';
import ShipmentData from 'src/assets/shippement-list.json';

@Component({
  selector: 'app-shippment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {

  searchResults: any[] = []; 
  selectedFilters!:any;
  const = Const.shipment;
  searchForm!: FormGroup;
  shipmentData = ShipmentData;

  constructor(
    private router:Router, 
    private location: Location, 
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchResults = this.filterResults(params);
    });
  }

  onBack(){
    this.location.back();
  }

  onClose(){
    this.router.navigate(['']);
  }

  private filterResults(searchTerms: any): any[] {
    return this.shipmentData.Shipments.Shipment.filter((item) => {
      return (
        (!searchTerms.order || item.OrderNo.toLowerCase() === searchTerms.order.toLowerCase()) &&
        (!searchTerms.shipment || item.ShipmentNo.toLowerCase() === searchTerms.shipment.toLowerCase()) &&
        (!searchTerms.firstName || item.BillToAddress.FirstName.toLowerCase() === searchTerms.firstName.toLowerCase()) &&
        (!searchTerms.lastName || item.BillToAddress.LastName.toLowerCase() === searchTerms.lastName.toLowerCase()) &&
        (!searchTerms.email || item.BillToAddress.EMailID.toLowerCase() === searchTerms.email.toLowerCase()) &&
        (!searchTerms.phoneNumber || item.BillToAddress.DayPhone.toLowerCase() === searchTerms.phoneNumber.toLowerCase())
      )
    });
  }

  onApplyFilter(event:any){
    this.selectedFilters = event;
  }

  // Infinite Scroll

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    if (this.isScrolledToBottom()) {
      this.loadShipments();
      console.log("bottom reached");
    }
  }

  private isScrolledToBottom(): boolean {
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    return scrollPosition >= documentHeight;
  }

  shipments:any[] = [];
  private loadShipments(): void {
    const newShipments = Array.from({ length: 10 }, (_, index) => `Shipment ${this.shipments.length + index + 1}`);
    this.shipments = [...this.shipments, ...newShipments];
    console.log(this.shipments);
  }
}
