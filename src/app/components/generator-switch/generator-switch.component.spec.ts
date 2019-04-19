import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorSwitchComponent } from './generator-switch.component';

describe('GeneratorSwitchComponent', () => {
  let component: GeneratorSwitchComponent;
  let fixture: ComponentFixture<GeneratorSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
