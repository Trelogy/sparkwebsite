import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersProductComponent } from './answers-product.component';

describe('AnswersProductComponent', () => {
  let component: AnswersProductComponent;
  let fixture: ComponentFixture<AnswersProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswersProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswersProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
