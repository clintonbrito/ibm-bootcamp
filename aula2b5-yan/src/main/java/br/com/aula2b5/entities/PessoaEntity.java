package br.com.aula2b5.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "pessoa")
public class PessoaEntity {

    @Id
    @Column(name = "idpessoa", nullable = false, unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nomepessoa", nullable = false)
    private String nome;

    @Column(name = "idadepessoa")
    private Integer idade;

    @Column(name = "emailpessoa", nullable = false)
    private String email;

    @OneToOne
    @JoinColumn
    private GeneroEntity genero;
}
