import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Act03instructorComponent } from './act03instructor.component';

describe('Act03instructorComponent', () => {
  let component: Act03instructorComponent;
  let fixture: ComponentFixture<Act03instructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Act03instructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Act03instructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
