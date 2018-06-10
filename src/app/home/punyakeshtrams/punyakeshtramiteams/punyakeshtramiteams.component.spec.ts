import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyakeshtramiteamsComponent } from './punyakeshtramiteams.component';

describe('PunyakeshtramiteamsComponent', () => {
  let component: PunyakeshtramiteamsComponent;
  let fixture: ComponentFixture<PunyakeshtramiteamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyakeshtramiteamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyakeshtramiteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
