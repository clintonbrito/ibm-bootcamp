package br.com.aula2b5.controllers;

import br.com.aula2b5.entities.GeneroEntity;
import br.com.aula2b5.entities.PessoaEntity;
import br.com.aula2b5.services.GeneroService;
import br.com.aula2b5.services.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("genero")
public class GeneroController {

    @Autowired
    private GeneroService generoService;

    @GetMapping
    public List<GeneroEntity> buscarTodosGeneros(){
        return generoService.buscarTodosGeneros();
    }

}
