import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersServiceComponent } from './answers-service.component';

describe('AnswersServiceComponent', () => {
  let component: AnswersServiceComponent;
  let fixture: ComponentFixture<AnswersServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswersServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswersServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
