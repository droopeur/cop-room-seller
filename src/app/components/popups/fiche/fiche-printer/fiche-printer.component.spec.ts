import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichePrinterComponent } from './fiche-printer.component';

describe('FichePrinterComponent', () => {
  let component: FichePrinterComponent;
  let fixture: ComponentFixture<FichePrinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichePrinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichePrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
