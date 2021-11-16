import { Component, OnInit } from '@angular/core';
import { Lembrete } from '../interface/lembrete';
import { ServiceLembreteService } from '../service/service-lembrete.service';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TabsComponent } from '../tabs/tabs.component';


@Component({
  selector: 'app-listar-lembretes',
  templateUrl: './listar-lembretes.component.html',
  styleUrls: ['./listar-lembretes.component.css']
})
export class ListarLembretesComponent implements OnInit {
  public formulario!:FormGroup;
  public lembretes!: Lembrete[];
  constructor(private form:FormBuilder, public lembreteService: ServiceLembreteService, public dialog: MatDialog) { }

  

  formularioPopulate(){
      this.formulario = this.form.group({
      id:[null],
      conteudo: [null],
      arquivado: [null],
      prioridade: [null],
      modificado: [null], 

     
    });

    console.log(this.formulario);
  }

  ngOnInit(): void {
    this.getListaLembrete();
  }

  

  getListaLembrete(){
    this.lembreteService.getListlembretes().subscribe(
      data => {
        this.lembretes = data;
        console.log(this.lembretes);
      },
      error => {
        console.log(error);
        alert('erro')
      }
    );
    return this.lembretes;
  }

  
  deletarLembrete(id: number){
    this.lembreteService.deletarLembrete(id).subscribe(
      data => {
      alert('sucesso')
      window.location.reload()
    },
    error => {
      console.log(error);
      alert('erro ao deletar')
    });
}

editarLembrete(lembrete: Lembrete){
  this.lembreteService.atualizaLembrete(lembrete).subscribe(
    data=>{
      alert('sucesso')
      window.location.reload()
    },
    error=>{
      console.log(error)
      alert('erro')
    }
  )
}





  

}
