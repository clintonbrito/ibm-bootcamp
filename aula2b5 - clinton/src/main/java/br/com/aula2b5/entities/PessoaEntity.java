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

    @Column(name = "nomepessoa")
    private String nome;

    @Column(name = "idadepessoa")
    private Integer idade;

    @Column(name = "emailpessoa")
    private String email;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idendereco", referencedColumnName = "idendereco")
    private EnderecoEntity endereco;
}
