package br.com.aula2b5.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "genero")
public class GeneroEntity {

    @Id
    @Column(name = "idgenero")
    private Integer id;

    @Column(name = "nomegenero")
    private String nome;

}
