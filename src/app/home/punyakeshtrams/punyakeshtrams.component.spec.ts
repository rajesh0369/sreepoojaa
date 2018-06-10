import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyakeshtramsComponent } from './punyakeshtrams.component';

describe('PunyakeshtramsComponent', () => {
  let component: PunyakeshtramsComponent;
  let fixture: ComponentFixture<PunyakeshtramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyakeshtramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyakeshtramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
