import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePrinterComponent } from './invoice-printer.component';

describe('InvoicePrinterComponent', () => {
  let component: InvoicePrinterComponent;
  let fixture: ComponentFixture<InvoicePrinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicePrinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
