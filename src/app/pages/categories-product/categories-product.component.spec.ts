import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesProductComponent } from './categories-product.component';

describe('CategoriesProductComponent', () => {
  let component: CategoriesProductComponent;
  let fixture: ComponentFixture<CategoriesProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
