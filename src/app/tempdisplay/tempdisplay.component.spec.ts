import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempdisplayComponent } from './tempdisplay.component';

describe('TempdisplayComponent', () => {
  let component: TempdisplayComponent;
  let fixture: ComponentFixture<TempdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
