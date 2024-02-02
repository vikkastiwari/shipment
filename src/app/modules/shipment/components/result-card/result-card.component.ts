import { Component, Input, OnInit } from '@angular/core';
import { Shipment } from 'src/app/modules/shipment/models/shipment-model';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {

  @Input() cardDetails!:Shipment;
  @Input() const!:any;

  constructor() { }

  ngOnInit(): void {
  }

}
