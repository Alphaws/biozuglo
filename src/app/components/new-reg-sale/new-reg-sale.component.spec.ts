import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegSaleComponent } from './new-reg-sale.component';

describe('NewRegSaleComponent', () => {
  let component: NewRegSaleComponent;
  let fixture: ComponentFixture<NewRegSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRegSaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRegSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
