import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-form-pessoa',
  templateUrl: './form-pessoa.component.html',
  styleUrls: ['./form-pessoa.component.scss']
})
export class FormPessoaComponent {
  constructor(private pessoaService: PessoaService){

  }
  
  @Output()
  statusParaAtualizacao: EventEmitter<boolean> = new EventEmitter(false);

  @Input()
  pessoa:Pessoa = new Pessoa;

  limpar(){
    this.pessoa = new Pessoa;
  }

  salvar():void{
    this.pessoaService.salvarPessoa(this.pessoa).subscribe(
      ()=>{
        alert("Pessoa Salva!");
        this.limpar();
        this.statusParaAtualizacao.emit(true);
      },
      (erro)=>{
        console.log(erro);
      }
    )
  }

  alterar():void{
    this.pessoaService.alterarPessoa(this.pessoa).subscribe(
      ()=>{
        alert("Pessoa Alterada!");
        this.limpar();
        this.statusParaAtualizacao.emit(true);
      },
      (erro)=>{
        console.log(erro);
      }
    )
  }
}
