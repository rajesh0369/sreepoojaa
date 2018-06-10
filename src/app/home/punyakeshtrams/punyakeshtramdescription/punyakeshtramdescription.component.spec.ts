import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyakeshtramdescriptionComponent } from './punyakeshtramdescription.component';

describe('PunyakeshtramdescriptionComponent', () => {
  let component: PunyakeshtramdescriptionComponent;
  let fixture: ComponentFixture<PunyakeshtramdescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyakeshtramdescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyakeshtramdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
