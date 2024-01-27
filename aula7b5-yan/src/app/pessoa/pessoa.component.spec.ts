import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PessoaComponent } from './pessoa.component';
import { PessoaService } from './pessoa.service';
import { FormPessoaComponent } from './form-pessoa/form-pessoa.component';
import { LoadingComponent } from '../loading/loading.component';
import { FormsModule } from '@angular/forms';
import { Pessoa } from './pessoa';
import { of, throwError } from 'rxjs';

describe('PessoaComponent', () => {
  let component: PessoaComponent;
  let fixture: ComponentFixture<PessoaComponent>;
  let pessoaService: PessoaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [ PessoaComponent, FormPessoaComponent, LoadingComponent ],
      providers:[ PessoaService ]
    })
    .compileComponents();
    pessoaService = TestBed.inject(PessoaService);
    fixture = TestBed.createComponent(PessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call consultarTodasPessoas', () => {
    const mockListaPessoa:Pessoa[]=[{
      id:1,
      nome:'Yan',
      idade: 20,
      email: 'yansantana@ibm.com'
    }]

    spyOn(pessoaService, 'recuperarPessoas').and.returnValue(of(mockListaPessoa));
    fixture.detectChanges();

    component.consultarTodasPessoas();
    expect(component.listaPessoas).toEqual(mockListaPessoa);
  });

  it('should call consultarTodasPessoas with error', () => {
    const mockError = new Error("Deu erro!")
    spyOn(pessoaService, 'recuperarPessoas').and.callFake(() => throwError(mockError));
    fixture.detectChanges();

    component.consultarTodasPessoas();
    spyOn(console, 'log');
    console.log(mockError);
    expect(console.log).toHaveBeenCalledWith(mockError);
  });

  it('should call selecionaPessoa', () => {
    const mockListaPessoa:Pessoa[]=[{
      id:1,
      nome:'Yan',
      idade: 20,
      email: 'yansantana@ibm.com'
    }]

    component.selecionaPessoa(mockListaPessoa[0]);
    expect(component.pessoaSelecionada).toEqual(mockListaPessoa[0]);
  });

  it('should call apagarPessoa', () => {
    const mockIdPessoa:number=1;

    spyOn(pessoaService, 'apagarPessoa').and.returnValue(of("Sucesso!"));

    const mockListaPessoa:Pessoa[]=[{
      id:1,
      nome:'Yan',
      idade: 20,
      email: 'yansantana@ibm.com'
    }]

    spyOn(pessoaService, 'recuperarPessoas').and.returnValue(of(mockListaPessoa));
    fixture.detectChanges();

    component.apagarPessoaSelecionada();
    spyOn(console, 'log');
    console.log("Pessoa apagada com sucesso!");
    expect(console.log).toHaveBeenCalledWith("Pessoa apagada com sucesso!");
  });

  it('should call apagarPessoa with error', () => {
    const mockError = new Error("Deu erro!")
    spyOn(pessoaService, 'apagarPessoa').and.callFake(() => throwError(mockError));
    fixture.detectChanges();

    component.apagarPessoaSelecionada();
    spyOn(console, 'log');
    console.log(mockError);
    expect(console.log).toHaveBeenCalledWith(mockError);
  });
});
