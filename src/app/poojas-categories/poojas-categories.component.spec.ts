import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojasCategoriesComponent } from './poojas-categories.component';

describe('PoojasCategoriesComponent', () => {
  let component: PoojasCategoriesComponent;
  let fixture: ComponentFixture<PoojasCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoojasCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojasCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
