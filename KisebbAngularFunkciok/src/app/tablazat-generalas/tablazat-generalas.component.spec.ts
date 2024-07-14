import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablazatGeneralasComponent } from './tablazat-generalas.component';

describe('TablazatGeneralasComponent', () => {
  let component: TablazatGeneralasComponent;
  let fixture: ComponentFixture<TablazatGeneralasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablazatGeneralasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablazatGeneralasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
