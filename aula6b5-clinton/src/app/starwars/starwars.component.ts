import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarwarsService } from './starwars.service';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.scss']
})
export class StarwarsComponent implements OnInit{
  // constructor(private rotaAtivada: ActivatedRoute){
  //   this.rotaAtivada.params.subscribe((parametro)=>{
  //     this.id = parametro['id'];
  //   })
  // }

  constructor(private starwarsService: StarwarsService){

  }

  estaCarregando:boolean = true;

  respostaPessoas:any|null = null;
  respostaCachorro:any|null = null;

  urlCachorro:string = 'https://dog.ceo/api/breeds/image/random';

  pessoas:any = [];

  ngOnInit(): void {
    this.recuperarPessoas(null, true);
    // this.recuperarCachorro();
  }

  recuperarPessoas(url:string|null, recursivo:boolean|null){
    this.estaCarregando = true;
    this.starwarsService.recuperarPessoas(url).subscribe(
      resposta =>{
        console.log(resposta);
        if(!this.respostaPessoas){
          this.respostaPessoas = resposta;
        }
        resposta.results.forEach((pessoa: any) => {
          this.recuperarCachorro(pessoa);
        });
        this.pessoas.push(...resposta.results);
      },
      erro => {
        console.log(erro);
      },
      () =>{
         {
          this.estaCarregando = false;
          console.log(this.pessoas);
        }
      }
    )
  }

  recuperarCachorro(pessoa: any){
    this.starwarsService.recuperarCachorro(this.urlCachorro).subscribe(
      respostaCachorro => {
        pessoa.cachorro = respostaCachorro.message;
      }
    );
  }

  id:number|null = null;
}
