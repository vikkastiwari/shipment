import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {

  @Input() cardDetails!:any;
  @Input() const!:any;

  constructor() { }

  ngOnInit(): void {
  }

}
