import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor( private http:HttpClient ) { }

  private url = 'http://localhost:8080/pessoa';

  public recuperarPessoas():Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.url);
  }

  public apagarPessoa(id:number):Observable<any>{
    return this.http.delete<any>(this.url+"?id="+id);
  }

  public salvarPessoa(pessoa:Pessoa):Observable<any>{
    return this.http.post<any>(this.url, pessoa);
  }

  public alterarPessoa(pessoa:Pessoa):Observable<any>{
    return this.http.put<any>(this.url, pessoa);
  }
}
