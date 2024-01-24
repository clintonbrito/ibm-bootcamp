package br.com.aula2b5.controllers;

import br.com.aula2b5.entities.PessoaEntity;
import br.com.aula2b5.services.PessoaService;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("pessoa")
public class PessoaController {

    @Autowired
    private PessoaService pessoaService;

    @GetMapping
    public List<PessoaEntity> buscarTodasPessoas(){
        return pessoaService.buscarTodasAsPessoas();
    }

    @PostMapping
    public ResponseEntity inserirPessoa(@RequestBody PessoaEntity pessoa){
        if(pessoa.getId() == null) {
            pessoaService.inserirOuAtualizaPessoa(pessoa);
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(500).build();
        }
    }

    @DeleteMapping
    public void apagarPessoa(@PathParam("id") Integer id){
        pessoaService.apagarPessoa(id);
    }

    @PutMapping
    public ResponseEntity atualizarPessoa(@RequestBody PessoaEntity pessoa){
        if(pessoa.getId() != null) {
            pessoaService.inserirOuAtualizaPessoa(pessoa);
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(500).build();
        }
    }
}
