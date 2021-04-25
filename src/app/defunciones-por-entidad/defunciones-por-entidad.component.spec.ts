import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefuncionesPorEntidadComponent } from './defunciones-por-entidad.component';

describe('DefuncionesPorEntidadComponent', () => {
  let component: DefuncionesPorEntidadComponent;
  let fixture: ComponentFixture<DefuncionesPorEntidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefuncionesPorEntidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefuncionesPorEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
