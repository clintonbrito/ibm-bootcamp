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

  pessoas:any = [];

  ngOnInit(): void {
    this.recuperarPessoas(null, true);
  }

  recuperarPessoas(url:string|null, recursivo:boolean|null){
    this.estaCarregando = true;
    this.starwarsService.recuperarPessoas(url).subscribe(
      resposta =>{
        console.log(resposta);
        this.respostaPessoas = resposta;
        this.pessoas.push(this.respostaPessoas.results)
      },
      erro => {
        console.log(erro);
      },
      () =>{
        // if(this.respostaPessoas.next && recursivo) {

        //   this.recuperarPessoas(this.respostaPessoas.next, true);
        // } else {
          this.estaCarregando = false;
        //   console.log(this.pessoas);
        // }
      }
    )
  }
  
  id:number|null = null;
}
