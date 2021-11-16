import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceLembreteService } from '../service/service-lembrete.service';
import { Lembrete } from '../interface/lembrete';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public lembrete!: Lembrete;

  constructor(
    private service: ServiceLembreteService,
    private activeRoute: ActivatedRoute,
    private routes: Router
  ) {
    this.getLembrete(this.activeRoute.snapshot.params.id);
  }


   getLembrete(id: number){
     this.service.getLembrete(id).subscribe(
       data=>{
                this.lembrete=data;
                console.log(this.lembrete);
       },
       error=>{
         console.log(error);
         alert('erro');
       }
     )
   }



  ngOnInit(): void{

  }



  atualizaLembrete(lembrete: Lembrete){
    this.service.atualizaLembrete(lembrete).subscribe(
      data=>{
          alert('sucesso')
          console.log(data);
          this.routes.navigate(['/',''])
      },
      error=>{
        alert('erro');
        console.log(error);

      }
    )
  }

 


}
