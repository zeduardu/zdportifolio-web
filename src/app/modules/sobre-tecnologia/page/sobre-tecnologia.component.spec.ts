import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreTecnologiaComponent } from './sobre-tecnologia.component';

describe('SobreTecnologiaComponent', () => {
  let component: SobreTecnologiaComponent;
  let fixture: ComponentFixture<SobreTecnologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreTecnologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
