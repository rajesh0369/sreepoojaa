import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyakeshtramiteamComponent } from './punyakeshtramiteam.component';

describe('PunyakeshtramiteamComponent', () => {
  let component: PunyakeshtramiteamComponent;
  let fixture: ComponentFixture<PunyakeshtramiteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyakeshtramiteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyakeshtramiteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
