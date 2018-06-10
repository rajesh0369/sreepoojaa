import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPurohitComponent } from './register-purohit.component';

describe('RegisterPurohitComponent', () => {
  let component: RegisterPurohitComponent;
  let fixture: ComponentFixture<RegisterPurohitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPurohitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPurohitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
