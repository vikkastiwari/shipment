import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentProductCardComponent } from './shipment-product-card.component';

describe('ShipmentProductCardComponent', () => {
  let component: ShipmentProductCardComponent;
  let fixture: ComponentFixture<ShipmentProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentProductCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
