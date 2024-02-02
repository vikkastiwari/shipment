import { Component, Input, OnInit } from '@angular/core';
import { ShipmentProductCard } from 'src/app/modules/shipment/models/shipment-model';

@Component({
  selector: 'app-shipment-product-card',
  templateUrl: './shipment-product-card.component.html',
  styleUrls: ['./shipment-product-card.component.scss']
})
export class ShipmentProductCardComponent implements OnInit {

  @Input() shipmentProductDetail!:ShipmentProductCard;
  @Input() const:any;

  constructor() { }

  ngOnInit(): void {
  }

}
