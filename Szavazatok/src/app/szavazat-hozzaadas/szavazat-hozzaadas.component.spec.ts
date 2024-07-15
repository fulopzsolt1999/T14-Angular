import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzavazatHozzaadasComponent } from './szavazat-hozzaadas.component';

describe('SzavazatHozzaadasComponent', () => {
  let component: SzavazatHozzaadasComponent;
  let fixture: ComponentFixture<SzavazatHozzaadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SzavazatHozzaadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzavazatHozzaadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
