import { TestBed } from '@angular/core/testing';

import { PessoaService } from './pessoa.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Pessoa } from './pessoa';

describe('PessoaService', () => {
  let service: PessoaService;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[ PessoaService ]
    });
    service = TestBed.inject(PessoaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach( ()=>{
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be apagarPessoa', () => {
    const id = 999;
    service.apagarPessoa(id).subscribe()
    const url= 'http://localhost:8080/pessoa?id='+id;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('DELETE');
  });

  it('should be salvarPessoa', () => {
    const mockPessoa:Pessoa = new Pessoa;
    service.salvarPessoa(mockPessoa).subscribe()
    const url= 'http://localhost:8080/pessoa';
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('POST');
  });

  it('should be alterarPessoa', () => {
    const mockPessoa:Pessoa = new Pessoa;
    service.alterarPessoa(mockPessoa).subscribe()
    const url= 'http://localhost:8080/pessoa';
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('PUT');
  });
});
