import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarLembreteComponent } from './cadastrar-lembrete.component';

describe('CadastrarLembreteComponent', () => {
  let component: CadastrarLembreteComponent;
  let fixture: ComponentFixture<CadastrarLembreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarLembreteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarLembreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
