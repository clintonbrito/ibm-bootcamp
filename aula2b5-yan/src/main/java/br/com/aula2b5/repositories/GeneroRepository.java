package br.com.aula2b5.repositories;

import br.com.aula2b5.entities.GeneroEntity;
import br.com.aula2b5.entities.PessoaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GeneroRepository extends JpaRepository<GeneroEntity, Integer> {
}
