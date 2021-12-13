import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodModifComponent } from './food-modif.component';

describe('FoodModifComponent', () => {
  let component: FoodModifComponent;
  let fixture: ComponentFixture<FoodModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
