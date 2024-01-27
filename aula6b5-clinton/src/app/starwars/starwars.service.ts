import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor( private http:HttpClient ) { }

  private url = 'https://swapi.dev/api'
  private urlCachorro = 'https://dog.ceo/api/breeds/image/random';

  private urlPessoas = '/people/';
  private urlFilmes = '/films/';
  private urlPlanetas = '/planets/';
  private urlEspecies = '/species/';
  private urlNaves = '/starships/'
  private urlVeiculos = '/vehicles/';

  public recuperarPessoas(urlCompleta:string|null):Observable<any>{
    if(!urlCompleta){
      return this.http.get<any>(this.url+this.urlPessoas);
    } else {
      return this.http.get<any>(urlCompleta);
    }
  }

  public recuperarCachorro(urlCachorro: string):Observable<any>{
    return this.http.get<any>(this.urlCachorro);
  }
}
