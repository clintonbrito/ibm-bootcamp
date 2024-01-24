package br.com.aula2b5.controllers;

import br.com.aula2b5.entities.EnderecoEntity;
import br.com.aula2b5.services.EnderecoService;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("endereco")
public class EnderecoController {

    @Autowired
    private EnderecoService enderecoService;

    @GetMapping
    public List<EnderecoEntity> buscarTodosOsEnderecos() {
        return enderecoService.buscarTodosOsEnderecos();
    }

    @PostMapping
    public ResponseEntity inserirEndereco(@RequestBody EnderecoEntity endereco) {
        if(endereco.getId() == null) {
            enderecoService.inserirOuAtualizarEndereco(endereco);
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(500).build();
        }
    }

    @DeleteMapping
    public void apagarEndereco(@PathParam("id") Integer id) {
        enderecoService.apagarEndereco(id);
    }

    @PutMapping
    public ResponseEntity atualizarEndereco(@RequestBody EnderecoEntity endereco) {
        if(endereco.getId() != null) {
            enderecoService.inserirOuAtualizarEndereco(endereco);
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(500).build();
        }
    }
}
