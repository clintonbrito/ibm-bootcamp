package br.com.aula2b5.services;

import br.com.aula2b5.entities.GeneroEntity;
import br.com.aula2b5.entities.PessoaEntity;
import br.com.aula2b5.repositories.GeneroRepository;
import br.com.aula2b5.repositories.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GeneroService {

    @Autowired
    private GeneroRepository generoRepository;

    public List<GeneroEntity> buscarTodosGeneros(){
        return generoRepository.findAll();
    }
}
