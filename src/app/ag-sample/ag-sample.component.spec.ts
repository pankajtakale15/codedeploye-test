import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgSampleComponent } from './ag-sample.component';

describe('AgSampleComponent', () => {
  let component: AgSampleComponent;
  let fixture: ComponentFixture<AgSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
