import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgtetelekComponent } from './progtetelek.component';

describe('ProgtetelekComponent', () => {
  let component: ProgtetelekComponent;
  let fixture: ComponentFixture<ProgtetelekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgtetelekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgtetelekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
