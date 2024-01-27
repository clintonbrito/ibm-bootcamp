import { Component, OnInit } from '@angular/core';
import { PessoaService } from './pessoa.service';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit{
  constructor( private pessoaService: PessoaService ){

  }

  estaCarregando = true;

  ngOnInit(): void {
    this.consultarTodasPessoas();
  }

  listaPessoas:Pessoa[] = [];

  pessoaSelecionada:Pessoa = new Pessoa;

  consultarTodasPessoas(): void{
    this.estaCarregando = true;
    this.pessoaService.recuperarPessoas().subscribe(
      (resposta) => {
        console.log(resposta);
        this.listaPessoas = resposta;
      },
      (erro)=> {
        console.log(erro);
      },
      ()=> {
        this.estaCarregando = false;
      }
    )
  }

  selecionaPessoa(pessoa:Pessoa): void{
    this.pessoaSelecionada = pessoa;
  }

  apagarPessoaSelecionada(id?:number|null): void{
    this.pessoaService.apagarPessoa(id!).subscribe(
      ()=> {
        alert("Pessoa apagada com sucesso!"); 
        console.log("Pessoa apagada com sucesso!");
        this.consultarTodasPessoas();
      },
      (erro) => {console.log(erro)}
    );
  }
}
