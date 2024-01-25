package br.com.aula2b5.services;

import br.com.aula2b5.entities.EnderecoEntity;
import br.com.aula2b5.repositories.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnderecoService {

    @Autowired
    private EnderecoRepository enderecoRepository;

    public List<EnderecoEntity> buscarTodosOsEnderecos() {
        return enderecoRepository.findAll();
    }

    public void inserirOuAtualizarEndereco(EnderecoEntity endereco) {
        enderecoRepository.save(endereco);
    }

    public void apagarEndereco(Integer id) {
        enderecoRepository.deleteById(id);
    }
}
