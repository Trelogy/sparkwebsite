import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesServiceComponent } from './categories-service.component';

describe('CategoriesServiceComponent', () => {
  let component: CategoriesServiceComponent;
  let fixture: ComponentFixture<CategoriesServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
