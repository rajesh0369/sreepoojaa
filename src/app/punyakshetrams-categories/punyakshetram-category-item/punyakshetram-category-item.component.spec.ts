import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyakshetramCategoryItemComponent } from './punyakshetram-category-item.component';

describe('PunyakshetramCategoryItemComponent', () => {
  let component: PunyakshetramCategoryItemComponent;
  let fixture: ComponentFixture<PunyakshetramCategoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyakshetramCategoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyakshetramCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
