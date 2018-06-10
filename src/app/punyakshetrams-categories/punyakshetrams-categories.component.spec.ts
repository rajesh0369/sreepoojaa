import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyakshetramsCategoriesComponent } from './punyakshetrams-categories.component';

describe('PunyakshetramsCategoriesComponent', () => {
  let component: PunyakshetramsCategoriesComponent;
  let fixture: ComponentFixture<PunyakshetramsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyakshetramsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyakshetramsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
