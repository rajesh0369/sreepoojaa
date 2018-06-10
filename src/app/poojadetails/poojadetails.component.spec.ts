import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojadetailsComponent } from './poojadetails.component';

describe('PoojadetailsComponent', () => {
  let component: PoojadetailsComponent;
  let fixture: ComponentFixture<PoojadetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoojadetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
