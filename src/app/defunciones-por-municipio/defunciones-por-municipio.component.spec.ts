import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefuncionesPorMunicipioComponent } from './defunciones-por-municipio.component';

describe('DefuncionesPorMunicipioComponent', () => {
  let component: DefuncionesPorMunicipioComponent;
  let fixture: ComponentFixture<DefuncionesPorMunicipioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefuncionesPorMunicipioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefuncionesPorMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
