import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojasdescriptionComponent } from './poojasdescription.component';

describe('PoojasdescriptionComponent', () => {
  let component: PoojasdescriptionComponent;
  let fixture: ComponentFixture<PoojasdescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoojasdescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojasdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
