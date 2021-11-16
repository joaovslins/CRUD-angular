import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ListarLembretesComponent } from '../listar-lembretes/listar-lembretes.component';
import { Lembrete } from '../interface/lembrete';
import { ServiceLembreteService } from '../service/service-lembrete.service';

@Component({
  selector: 'app-cadastrar-lembrete',
  templateUrl: './cadastrar-lembrete.component.html',
  styleUrls: ['./cadastrar-lembrete.component.css']
})
export class CadastrarLembreteComponent implements OnInit {



public formulario!:FormGroup;
public lembretes!: Lembrete[];
public dados!: Lembrete;

  constructor(private form:FormBuilder, private lembreteService: ServiceLembreteService) { 
    
  }

  
  

  ngOnInit(){
    
    this.formulario = this.form.group({
      id:[null],
      conteudo: [null],
      arquivado: [null],
      prioridade: [null],
      modificado: [null]

     
  
    });

  }

  onSubmit(){
  
    

   this.lembreteService.addLembrete(this.formulario.value).subscribe(
      data => {
        alert('sucesso');
        window.location.reload()
      },error => {
        console.log(error);
        alert('erro ao cadastrar')
    });


  }

}
