import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojaCategoryItemComponent } from './pooja-category-item.component';

describe('PoojaCategoryItemComponent', () => {
  let component: PoojaCategoryItemComponent;
  let fixture: ComponentFixture<PoojaCategoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoojaCategoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojaCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
