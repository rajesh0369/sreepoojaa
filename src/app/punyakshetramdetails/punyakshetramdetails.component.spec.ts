import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyakshetramdetailsComponent } from './punyakshetramdetails.component';

describe('PunyakshetramdetailsComponent', () => {
  let component: PunyakshetramdetailsComponent;
  let fixture: ComponentFixture<PunyakshetramdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyakshetramdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyakshetramdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
