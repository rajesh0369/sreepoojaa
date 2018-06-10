import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojasiteamComponent } from './poojasiteam.component';

describe('PoojasiteamComponent', () => {
  let component: PoojasiteamComponent;
  let fixture: ComponentFixture<PoojasiteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoojasiteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojasiteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
