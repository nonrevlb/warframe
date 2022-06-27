import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusGraphComponent } from './status-graph.component';

describe('StatusGraphComponent', () => {
  let component: StatusGraphComponent;
  let fixture: ComponentFixture<StatusGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
