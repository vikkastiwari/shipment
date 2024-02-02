import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentDetailsCardComponent } from './shipment-details-card.component';

describe('ShipmentDetailsCardComponent', () => {
  let component: ShipmentDetailsCardComponent;
  let fixture: ComponentFixture<ShipmentDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentDetailsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
