import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilarComponent } from './familar.component';

describe('FamilarComponent', () => {
  let component: FamilarComponent;
  let fixture: ComponentFixture<FamilarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
