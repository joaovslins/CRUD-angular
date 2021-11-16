import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Lembrete } from '../interface/lembrete';
import { ServiceLembreteService } from '../service/service-lembrete.service';


@Component({
  selector: 'app-buscar-lembrete',
  templateUrl: './buscar-lembrete.component.html',
  styleUrls: ['./buscar-lembrete.component.css']
})
export class BuscarLembreteComponent implements OnInit {

  public formulario!:FormGroup;
  public lembretes!: Lembrete;


  

  constructor(private form:FormBuilder, private lembreteService: ServiceLembreteService) { }

  


    ngOnInit(){}

 



    buscar(){

      this.formulario = this.form.group({
        id:[null]
      });



      console.log(this.formulario);



      this.lembreteService.getLembrete(22).subscribe(
          dados=>{
            this.lembretes = dados;
            console.log(this.lembretes);
          },
          error=>{
            alert("erro ao buscar");
          }
      )
    }
   


  



}
