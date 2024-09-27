import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHNOLOGYComponent } from './technology.component';

describe('TECHNOLOGYComponent', () => {
  let component: TECHNOLOGYComponent;
  let fixture: ComponentFixture<TECHNOLOGYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHNOLOGYComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TECHNOLOGYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
