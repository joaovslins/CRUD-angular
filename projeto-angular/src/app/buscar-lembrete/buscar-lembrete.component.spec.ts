import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarLembreteComponent } from './buscar-lembrete.component';

describe('BuscarLembreteComponent', () => {
  let component: BuscarLembreteComponent;
  let fixture: ComponentFixture<BuscarLembreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarLembreteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarLembreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
