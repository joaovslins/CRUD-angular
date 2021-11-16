import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lembrete } from '../interface/lembrete';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceLembreteService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:8080/lembretes'

  getListlembretes(): Observable<Lembrete[]>{
    return this.http.get<Lembrete[]>(this.apiUrl);
  }

  getLembrete(id:number): Observable<Lembrete>{
    return this.http.get<Lembrete>(`${this.apiUrl}/${id}`);
  }
  
  addLembrete(lembrete: any): Observable<Lembrete>{
    return this.http.post<Lembrete>(this.apiUrl, lembrete);
  }
    
  atualizaLembrete(lembrete: Lembrete): Observable<Lembrete>{
    return this.http.put<Lembrete>(`${this.apiUrl}`, lembrete);
  }

  deletarLembrete(id: number){
    return this.http.delete<Lembrete>(`${this.apiUrl}/${id}`);
  }
}
