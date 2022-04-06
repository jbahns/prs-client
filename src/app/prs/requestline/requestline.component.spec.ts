import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestlineComponent } from './requestline.component';

describe('RequestlineComponent', () => {
  let component: RequestlineComponent;
  let fixture: ComponentFixture<RequestlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
