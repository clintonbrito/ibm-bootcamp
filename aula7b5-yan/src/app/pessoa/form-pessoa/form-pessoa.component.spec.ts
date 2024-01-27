import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPessoaComponent } from './form-pessoa.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa';
import { of, throwError } from 'rxjs';

describe('FormPessoaComponent', () => {
  let component: FormPessoaComponent;
  let fixture: ComponentFixture<FormPessoaComponent>;
  let pessoaService: PessoaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [ FormPessoaComponent ],
      providers: [PessoaService]
    })
    .compileComponents();
    pessoaService = TestBed.inject(PessoaService);
    fixture = TestBed.createComponent(FormPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call salvar', () => {
    const mockPessoa:Pessoa= new Pessoa;

    spyOn(pessoaService, 'salvarPessoa').and.returnValue(of(''));
    fixture.detectChanges();

    component.salvar();
    expect(component.pessoa).toEqual(mockPessoa);
  });

  it('should call salvar with error', () => {
    const mockError = new Error("Deu erro!")
    spyOn(pessoaService, 'salvarPessoa').and.callFake(() => throwError(mockError));
    fixture.detectChanges();

    component.salvar();
    spyOn(console, 'log');
    console.log(mockError);
    expect(console.log).toHaveBeenCalledWith(mockError);
  });

  it('should call alterar', () => {
    const mockPessoa:Pessoa= new Pessoa;

    spyOn(pessoaService, 'alterarPessoa').and.returnValue(of(''));
    fixture.detectChanges();

    component.alterar();
    expect(component.pessoa).toEqual(mockPessoa);
  });

  it('should call alterar with error', () => {
    const mockError = new Error("Deu erro!")
    spyOn(pessoaService, 'alterarPessoa').and.callFake(() => throwError(mockError));
    fixture.detectChanges();

    component.alterar();
    spyOn(console, 'log');
    console.log(mockError);
    expect(console.log).toHaveBeenCalledWith(mockError);
  });
});
