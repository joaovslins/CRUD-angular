import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLembretesComponent } from './listar-lembretes.component';

describe('ListarLembretesComponent', () => {
  let component: ListarLembretesComponent;
  let fixture: ComponentFixture<ListarLembretesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarLembretesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarLembretesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
