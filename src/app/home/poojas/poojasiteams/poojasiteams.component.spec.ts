import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojasiteamsComponent } from './poojasiteams.component';

describe('PoojasiteamsComponent', () => {
  let component: PoojasiteamsComponent;
  let fixture: ComponentFixture<PoojasiteamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoojasiteamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojasiteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
