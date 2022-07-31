import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawrComponent } from './rawr.component';

describe('RawrComponent', () => {
  let component: RawrComponent;
  let fixture: ComponentFixture<RawrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RawrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
