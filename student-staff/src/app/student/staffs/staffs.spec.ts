import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Staffs } from './staffs';

describe('Staffs', () => {
  let component: Staffs;
  let fixture: ComponentFixture<Staffs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Staffs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Staffs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
