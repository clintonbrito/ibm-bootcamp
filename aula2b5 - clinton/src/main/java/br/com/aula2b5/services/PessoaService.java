package br.com.aula2b5.services;

import br.com.aula2b5.entities.PessoaEntity;
import br.com.aula2b5.repositories.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    public List<PessoaEntity> buscarTodasAsPessoas(){
        return pessoaRepository.findAll();
    }

    public void inserirOuAtualizaPessoa(PessoaEntity pessoa){
        pessoaRepository.save(pessoa);
    }

    public void apagarPessoa(Integer id){
        pessoaRepository.deleteById(id);
    }
}
